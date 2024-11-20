import React, { useState, useRef } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import AccountContextMenu from '../components/AccountContextMenu';
import EditAccountModal from '../components/EditAccountModal';
import CreateAccountModal from '../components/CreateAccountModal';
import AccountDetailsModal from '../components/AccountDetailsModal';
import TransactionModal from '../components/TransactionModal';
import { 
  User, 
  Car, 
  Building2, 
  Calculator,
  Home,
  Hammer,
  ChevronDown,
  ChevronUp,
  Plus
} from 'lucide-react';

interface AccountItem {
  id: number;
  name: string;
  amount: string;
  icon: React.ReactNode;
  color: 'blue' | 'yellow' | 'green';
}

interface AccountSection {
  id: string;
  title: string;
  accounts: AccountItem[];
}

// ... остальные интерфейсы и константы остаются без изменений ...

export default function AccountingPage() {
  // ... существующие состояния ...

  const [draggedAccount, setDraggedAccount] = useState<AccountItem | null>(null);
  const [dropTarget, setDropTarget] = useState<AccountItem | null>(null);
  const [transactionModal, setTransactionModal] = useState<{
    show: boolean;
    fromAccount: AccountItem | null;
    toAccount: AccountItem | null;
  }>({
    show: false,
    fromAccount: null,
    toAccount: null
  });

  const handleDragStart = (e: React.DragEvent, account: AccountItem) => {
    setDraggedAccount(account);
    e.dataTransfer.setData('text/plain', account.id.toString());
    
    // Создаем превью для перетаскивания
    const dragIcon = document.createElement('div');
    dragIcon.className = `${getColorClass(account.color)} rounded-full p-6`;
    dragIcon.innerHTML = '<div class="h-8 w-8 text-white"></div>';
    document.body.appendChild(dragIcon);
    e.dataTransfer.setDragImage(dragIcon, 40, 40);
    setTimeout(() => document.body.removeChild(dragIcon), 0);
  };

  const handleDragOver = (e: React.DragEvent, account: AccountItem) => {
    e.preventDefault();
    setDropTarget(account);
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
    setDraggedAccount(null);
    setDropTarget(null);
  };

  const handleDragEnd = () => {
    setDraggedAccount(null);
    setDropTarget(null);
  };

  const handleSaveTransaction = (amount: number, description: string, date: string) => {
    if (transactionModal.fromAccount && transactionModal.toAccount) {
      // Обновляем баланс обоих счетов
      setSections(prevSections =>
        prevSections.map(section => ({
          ...section,
          accounts: section.accounts.map(account => {
            if (account.id === transactionModal.fromAccount?.id) {
              const currentAmount = parseFloat(account.amount.replace(/[^0-9.-]+/g, ''));
              return {
                ...account,
                amount: `${(currentAmount - amount).toLocaleString()} ₸`
              };
            }
            if (account.id === transactionModal.toAccount?.id) {
              const currentAmount = parseFloat(account.amount.replace(/[^0-9.-]+/g, ''));
              return {
                ...account,
                amount: `${(currentAmount + amount).toLocaleString()} ₸`
              };
            }
            return account;
          })
        }))
      );
    }
    setTransactionModal({ show: false, fromAccount: null, toAccount: null });
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

            {/* Summary Section */}
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

            {/* Accounts Sections */}
            <div className="space-y-8">
              {sections.map((section) => (
                <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                    {expandedSections[section.id] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
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
                        {/* Add Account Button */}
                        <button
                          onClick={() => setCreateModal({ show: true, sectionId: section.id })}
                          className="flex flex-col items-center justify-center"
                        >
                          <div className="bg-gray-200 rounded-full p-6 mb-2 shadow-lg hover:bg-gray-300 transition-colors">
                            <Plus className="h-8 w-8 text-gray-600" />
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-gray-600">Добавить счет</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Context Menu */}
            {contextMenu.show && (
              <AccountContextMenu
                x={contextMenu.x}
                y={contextMenu.y}
                onEdit={handleEditAccount}
                onDelete={handleDeleteAccount}
                onClose={() => setContextMenu(prev => ({ ...prev, show: false }))}
              />
            )}

            {/* Edit Modal */}
            {editModal.show && (
              <EditAccountModal
                isOpen={editModal.show}
                onClose={() => setEditModal({ show: false, accountId: null, currentName: '' })}
                onSave={handleSaveEdit}
                currentName={editModal.currentName}
              />
            )}

            {/* Create Modal */}
            {createModal.show && createModal.sectionId && (
              <CreateAccountModal
                isOpen={createModal.show}
                onClose={() => setCreateModal({ show: false, sectionId: null })}
                onSave={handleCreateAccount}
                sectionId={createModal.sectionId}
              />
            )}

            {/* Details Modal */}
            {detailsModal.show && detailsModal.account && (
              <AccountDetailsModal
                isOpen={detailsModal.show}
                onClose={() => setDetailsModal({ show: false, account: null })}
                account={detailsModal.account}
              />
            )}

            {/* Transaction Modal */}
            {transactionModal.show && transactionModal.fromAccount && transactionModal.toAccount && (
              <TransactionModal
                isOpen={transactionModal.show}
                onClose={() => setTransactionModal({ show: false, fromAccount: null, toAccount: null })}
                fromAccount={transactionModal.fromAccount}
                toAccount={transactionModal.toAccount}
                onSave={handleSaveTransaction}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
