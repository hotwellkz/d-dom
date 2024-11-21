import React, { useState, useEffect } from 'react';
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
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

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
    clearAccountHistory,
    isLoading
  } = useAccounts();

  const [contextMenu, setContextMenu] = useState<{
    show: boolean;
    x: number;
    y: number;
    accountId?: string;
    sectionId?: string;
  }>({
    show: false,
    x: 0,
    y: 0
  });

  const [editModal, setEditModal] = useState<{
    show: boolean;
    accountId?: string;
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

  const handleContextMenu = (e: React.MouseEvent, accountId: string, sectionId: string) => {
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

  const handleDeleteAccount = async () => {
    if (contextMenu.accountId && contextMenu.sectionId) {
      await deleteAccount(contextMenu.accountId, contextMenu.sectionId);
    }
    setContextMenu(prev => ({ ...prev, show: false }));
  };

  const handleClearHistory = async () => {
    if (contextMenu.accountId) {
      await clearAccountHistory(contextMenu.accountId);
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

  const handleSaveNewAccount = async (name: string, iconType: string, color: 'blue' | 'yellow' | 'green' | 'purple', sectionId: string) => {
    try {
      const newAccount: Omit<AccountItem, 'id'> = {
        name,
        amount: "0 ₸",
        iconType,
        color
      };

      await addAccount(sectionId, newAccount);
      setCreateModal({ show: false });
    } catch (error) {
      console.error('Error creating account:', error);
      alert('Ошибка при создании счета');
    }
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

  const handleSaveTransaction = async (amount: number, description: string, date: string) => {
    if (transactionModal.fromAccount && transactionModal.toAccount) {
      try {
        // Update account balances
        await updateAccountAmount(transactionModal.fromAccount.id, -amount);
        await updateAccountAmount(transactionModal.toAccount.id, amount);

        // Save transaction to Firestore
        const transactionsRef = collection(db, 'transactions');
        await addDoc(transactionsRef, {
          fromAccountId: transactionModal.fromAccount.id,
          fromAccountName: transactionModal.fromAccount.name,
          toAccountId: transactionModal.toAccount.id,
          toAccountName: transactionModal.toAccount.name,
          amount,
          description,
          date,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        console.error('Error saving transaction:', error);
        alert('Ошибка при сохранении транзакции');
      }
    }
    setTransactionModal({ show: false });
  };

  const handleClearAllHistory = async () => {
    try {
      await Promise.all(
        sections.flatMap(section =>
          section.accounts.map(account =>
            clearAccountHistory(account.id)
          )
        )
      );
    } catch (error) {
      console.error('Error clearing all history:', error);
      alert('Ошибка при очистке истории');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Загрузка...</div>
      </div>
    );
  }

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
          onDelete={handleDeleteAccount}
          onClearHistory={handleClearHistory}
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
