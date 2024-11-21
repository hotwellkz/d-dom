import React, { useState } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import AccountContextMenu from '../components/AccountContextMenu';
import EditAccountModal from '../components/EditAccountModal';
import CreateAccountModal from '../components/CreateAccountModal';
import TransactionModal from '../components/TransactionModal';
import AccountDetailsModal from '../components/AccountDetailsModal';
import AccountSection from '../components/AccountSection';
import AccountSummary from '../components/AccountSummary';
import { useAccounts } from '../hooks/useAccounts';
import { AccountItem } from '../types/accounting';

const summary = {
  balance: "135.2M ₸",
  expenses: "160.2M ₸",
  planned: "0 ₸"
};

export default function AccountingPage() {
  const {
    sections,
    expandedSections,
    toggleSection,
    updateAccount,
    deleteAccount,
    addAccount,
    updateAccountAmount,
    clearAccountHistory
  } = useAccounts();

  const [contextMenu, setContextMenu] = useState<{
    show: boolean;
    x: number;
    y: number;
    accountId?: number;
    sectionId?: string;
  }>({
    show: false,
    x: 0,
    y: 0
  });

  const [editModal, setEditModal] = useState<{
    show: boolean;
    accountId?: number;
    currentName?: string;
  }>({
    show: false
  });

  const [createModal, setCreateModal] = useState<{
    show: boolean;
    sectionId?: string;
  }>({
    show: false
  });

  const [selectedAccount, setSelectedAccount] = useState<AccountItem | null>(null);
  const [draggedAccount, setDraggedAccount] = useState<AccountItem | null>(null);
  const [dropTarget, setDropTarget] = useState<AccountItem | null>(null);
  const [transactionModal, setTransactionModal] = useState<{
    show: boolean;
    fromAccount?: AccountItem;
    toAccount?: AccountItem;
  }>({
    show: false
  });

  const handleContextMenu = (e: React.MouseEvent, accountId: number, sectionId: string) => {
    e.preventDefault();
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      accountId,
      sectionId
    });
  };

  const handleEditAccount = () => {
    if (contextMenu.accountId) {
      const account = sections
        .flatMap(section => section.accounts)
        .find(account => account.id === contextMenu.accountId);
      
      if (account) {
        setEditModal({
          show: true,
          accountId: account.id,
          currentName: account.name
        });
      }
    }
    setContextMenu(prev => ({ ...prev, show: false }));
  };

  const handleAccountClick = (account: AccountItem) => {
    setSelectedAccount(account);
  };

  const handleCreateAccount = (sectionId: string) => {
    setCreateModal({
      show: true,
      sectionId
    });
  };

  const handleSaveNewAccount = (name: string, iconType: string, color: 'blue' | 'yellow' | 'green' | 'purple', sectionId: string) => {
    const newId = Math.max(...sections.flatMap(s => s.accounts.map(a => a.id))) + 1;
    
    const newAccount: AccountItem = {
      id: newId,
      name,
      amount: "0 ₸",
      iconType,
      color
    };

    addAccount(sectionId, newAccount);
    setCreateModal({ show: false });
  };

  const handleDragStart = (e: React.DragEvent, account: AccountItem) => {
    setDraggedAccount(account);
    e.dataTransfer.setData('text/plain', ''); // Required for Firefox
  };

  const handleDragOver = (e: React.DragEvent, account: AccountItem) => {
    e.preventDefault();
    if (draggedAccount && draggedAccount.id !== account.id) {
      setDropTarget(account);
    }
  };

  const handleDrop = (e: React.DragEvent, targetAccount: AccountItem) => {
    e.preventDefault();
    if (draggedAccount && draggedAccount.id !== targetAccount.id) {
      setTransactionModal({
        show: true,
        fromAccount: draggedAccount,
        toAccount: targetAccount
      });
    }
    setDropTarget(null);
  };

  const handleDragEnd = () => {
    setDraggedAccount(null);
    setDropTarget(null);
  };

  const handleSaveTransaction = (amount: number, description: string, date: string) => {
    if (transactionModal.fromAccount && transactionModal.toAccount) {
      const transaction = {
        id: Date.now(),
        fromAccountId: transactionModal.fromAccount.id,
        fromAccountName: transactionModal.fromAccount.name,
        toAccountId: transactionModal.toAccount.id,
        toAccountName: transactionModal.toAccount.name,
        amount,
        description,
        date
      };

      // Обновляем баланс счетов
      updateAccountAmount(transactionModal.fromAccount.id, -amount);
      updateAccountAmount(transactionModal.toAccount.id, amount);

      // Сохраняем транзакцию в историю обоих счетов
      const fromStorageKey = `transactions_${transactionModal.fromAccount.id}`;
      const toStorageKey = `transactions_${transactionModal.toAccount.id}`;

      const fromTransactions = JSON.parse(localStorage.getItem(fromStorageKey) || '[]');
      const toTransactions = JSON.parse(localStorage.getItem(toStorageKey) || '[]');

      localStorage.setItem(fromStorageKey, JSON.stringify([...fromTransactions, transaction]));
      localStorage.setItem(toStorageKey, JSON.stringify([...toTransactions, transaction]));
    }
    setTransactionModal({ show: false });
  };

  const handleClearAllHistory = () => {
    // Очищаем все транзакции
    sections.forEach(section => {
      section.accounts.forEach(account => {
        clearAccountHistory(account.id);
      });
    });
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-cyan-500';
      case 'yellow':
        return 'bg-yellow-400';
      case 'green':
        return 'bg-emerald-500';
      case 'purple':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-64">
        <div className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Бухгалтерия компании - Финансовый учет"
              description="Финансовый учет и отчетность компании. Баланс, расходы и планируемые затраты."
              keywords="бухгалтерия, финансы, учет, расходы, баланс"
              h1="Бухгалтерия компании"
            />

            <AccountSummary summary={summary} onClearAll={handleClearAllHistory} />

            <div className="space-y-8">
              {sections.map((section) => (
                <AccountSection
                  key={section.id}
                  section={section}
                  isExpanded={expandedSections[section.id]}
                  onToggle={() => toggleSection(section.id)}
                  onContextMenu={handleContextMenu}
                  onAccountClick={handleAccountClick}
                  onCreateClick={handleCreateAccount}
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onDragEnd={handleDragEnd}
                  dropTarget={dropTarget}
                  getColorClass={getColorClass}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {contextMenu.show && (
        <AccountContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onEdit={handleEditAccount}
          onDelete={() => {
            if (contextMenu.accountId && contextMenu.sectionId) {
              deleteAccount(contextMenu.accountId, contextMenu.sectionId);
            }
            setContextMenu(prev => ({ ...prev, show: false }));
          }}
          onClearHistory={() => {
            if (contextMenu.accountId) {
              clearAccountHistory(contextMenu.accountId);
            }
            setContextMenu(prev => ({ ...prev, show: false }));
          }}
          onClose={() => setContextMenu(prev => ({ ...prev, show: false }))}
        />
      )}

      {editModal.show && (
        <EditAccountModal
          isOpen={editModal.show}
          onClose={() => setEditModal({ show: false })}
          onSave={(newName) => {
            if (editModal.accountId) {
              updateAccount(editModal.accountId, { name: newName });
            }
            setEditModal({ show: false });
          }}
          currentName={editModal.currentName || ''}
        />
      )}

      {createModal.show && createModal.sectionId && (
        <CreateAccountModal
          isOpen={createModal.show}
          onClose={() => setCreateModal({ show: false })}
          onSave={handleSaveNewAccount}
          sectionId={createModal.sectionId}
        />
      )}

      {selectedAccount && (
        <AccountDetailsModal
          account={selectedAccount}
          onClose={() => setSelectedAccount(null)}
        />
      )}

      {transactionModal.show && transactionModal.fromAccount && transactionModal.toAccount && (
        <TransactionModal
          isOpen={transactionModal.show}
          onClose={() => setTransactionModal({ show: false })}
          fromAccount={transactionModal.fromAccount}
          toAccount={transactionModal.toAccount}
          onSave={handleSaveTransaction}
        />
      )}
    </div>
  );
}
