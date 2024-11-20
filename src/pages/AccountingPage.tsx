import React, { useState } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import AccountContextMenu from '../components/AccountContextMenu';
import EditAccountModal from '../components/EditAccountModal';
import CreateAccountModal from '../components/CreateAccountModal';
import TransactionModal from '../components/TransactionModal';
import AccountDetailsModal from '../components/AccountDetailsModal';
import { useAccounts } from '../hooks/useAccounts';
import { AccountItem } from '../types/accounting';
import { User, Car, Building2, Calculator, Home, Hammer } from 'lucide-react';

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

  const handleSaveNewAccount = (name: string, iconType: string, color: 'blue' | 'yellow' | 'green', sectionId: string) => {
    const newId = Math.max(...sections.flatMap(s => s.accounts.map(a => a.id))) + 1;
    
    let icon;
    switch (iconType) {
      case 'user':
        icon = <User className="h-8 w-8 text-white" />;
        break;
      case 'car':
        icon = <Car className="h-8 w-8 text-white" />;
        break;
      case 'building':
        icon = <Building2 className="h-8 w-8 text-white" />;
        break;
      case 'calculator':
        icon = <Calculator className="h-8 w-8 text-white" />;
        break;
      case 'home':
        icon = <Home className="h-8 w-8 text-white" />;
        break;
      case 'hammer':
        icon = <Hammer className="h-8 w-8 text-white" />;
        break;
      default:
        icon = <User className="h-8 w-8 text-white" />;
    }

    const newAccount: AccountItem = {
      id: newId,
      name,
      amount: "0 ₸",
      icon,
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
      // Списываем с одного счета
      updateAccountAmount(transactionModal.fromAccount.id, -amount);
      // Начисляем на другой счет
      updateAccountAmount(transactionModal.toAccount.id, amount);
    }
    setTransactionModal({ show: false });
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-cyan-500';
      case 'yellow':
        return 'bg-yellow-400';
      case 'green':
        return 'bg-emerald-500';
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

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Баланс</div>
                  <div className="text-xl font-bold text-gray-900">{summary.balance}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Расходы</div>
                  <div className="text-xl font-bold text-gray-900">{summary.expenses}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">В планах</div>
                  <div className="text-xl font-bold text-gray-900">{summary.planned}</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                    <span className="transform transition-transform duration-200">
                      {expandedSections[section.id] ? '▼' : '▶'}
                    </span>
                  </button>
                  
                  {expandedSections[section.id] && (
                    <div className="p-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {section.accounts.map((account) => (
                          <div key={account.id} className="flex flex-col items-center">
                            <div 
                              className={`${getColorClass(account.color)} rounded-full p-6 mb-2 shadow-lg cursor-pointer ${
                                dropTarget?.id === account.id ? 'ring-4 ring-primary-500' : ''
                              }`}
                              onClick={() => handleAccountClick(account)}
                              onContextMenu={(e) => handleContextMenu(e, account.id, section.id)}
                              draggable
                              onDragStart={(e) => handleDragStart(e, account)}
                              onDragOver={(e) => handleDragOver(e, account)}
                              onDrop={(e) => handleDrop(e, account)}
                              onDragEnd={handleDragEnd}
                            >
                              {account.icon}
                            </div>
                            <div className="text-center">
                              <div className="font-medium text-gray-900 mb-1">{account.name}</div>
                              <div className={`text-sm ${account.amount.includes('-') ? 'text-red-600' : 'text-gray-600'}`}>
                                {account.amount}
                              </div>
                            </div>
                          </div>
                        ))}
                        <button
                          onClick={() => handleCreateAccount(section.id)}
                          className="flex flex-col items-center justify-center"
                        >
                          <div className="bg-gray-200 rounded-full p-6 mb-2 shadow-lg hover:bg-gray-300 transition-colors">
                            <svg className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <div className="font-medium text-gray-600">Добавить счет</div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
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
