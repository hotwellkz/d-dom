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

const initialSections: AccountSection[] = [
  {
    id: 'clients',
    title: 'Клиенты',
    accounts: [
      {
        id: 1,
        name: "Гульжемал",
        amount: "3 609k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      },
      {
        id: 2,
        name: "Еркынгали",
        amount: "75 000 ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      },
      {
        id: 3,
        name: "Ольга",
        amount: "4 275k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      },
      {
        id: 4,
        name: "Асхат/Куралай",
        amount: "16 368k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      }
    ]
  },
  {
    id: 'personal',
    title: 'Личные счета',
    accounts: [
      {
        id: 5,
        name: "Савицкий",
        amount: "30 748.57 ₸",
        icon: <Car className="h-8 w-8 text-white" />,
        color: 'yellow'
      },
      {
        id: 6,
        name: "Саша",
        amount: "- 195 486 ₸",
        icon: <Car className="h-8 w-8 text-white" />,
        color: 'yellow'
      },
      {
        id: 7,
        name: "Леонид",
        amount: "2 729k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'yellow'
      },
      {
        id: 8,
        name: "Милюк",
        amount: "40 614k ₸",
        icon: <Building2 className="h-8 w-8 text-white" />,
        color: 'yellow'
      }
    ]
  },
  {
    id: 'objects',
    title: 'Объекты',
    accounts: [
      {
        id: 9,
        name: "Общ Расх",
        amount: "38 910k ₸",
        icon: <Calculator className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 10,
        name: "Пеноп Клей OSB",
        amount: "38 446k ₸",
        icon: <Building2 className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 11,
        name: "KK1",
        amount: "1 512k ₸",
        icon: <Home className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 12,
        name: "KK2",
        amount: "1 159k ₸",
        icon: <Home className="h-8 w-8 text-white" />,
        color: 'green'
      }
    ]
  }
];

const summary = {
  balance: "135.2M ₸",
  expenses: "160.2M ₸",
  planned: "0 ₸"
};

export default function AccountingPage() {
  const [sections, setSections] = useState<AccountSection[]>(initialSections);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    clients: true,
    personal: true,
    objects: true
  });

  const [contextMenu, setContextMenu] = useState<{
    show: boolean;
    x: number;
    y: number;
    accountId: number | null;
    sectionId: string | null;
  }>({
    show: false,
    x: 0,
    y: 0,
    accountId: null,
    sectionId: null
  });

  const [editModal, setEditModal] = useState<{
    show: boolean;
    accountId: number | null;
    currentName: string;
  }>({
    show: false,
    accountId: null,
    currentName: ''
  });

  const [createModal, setCreateModal] = useState<{
    show: boolean;
    sectionId: string | null;
  }>({
    show: false,
    sectionId: null
  });

  const [detailsModal, setDetailsModal] = useState<{
    show: boolean;
    account: AccountItem | null;
  }>({
    show: false,
    account: null
  });

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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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

  const handleDeleteAccount = () => {
    if (contextMenu.accountId && contextMenu.sectionId) {
      setSections(prevSections =>
        prevSections.map(section => {
          if (section.id === contextMenu.sectionId) {
            return {
              ...section,
              accounts: section.accounts.filter(account => account.id !== contextMenu.accountId)
            };
          }
          return section;
        })
      );
    }
    setContextMenu(prev => ({ ...prev, show: false }));
  };

  const handleSaveEdit = (newName: string) => {
    if (editModal.accountId) {
      setSections(prevSections =>
        prevSections.map(section => ({
          ...section,
          accounts: section.accounts.map(account =>
            account.id === editModal.accountId
              ? { ...account, name: newName }
              : account
          )
        }))
      );
    }
    setEditModal({ show: false, accountId: null, currentName: '' });
  };

  const handleCreateAccount = (name: string, iconType: string, color: 'blue' | 'yellow' | 'green', sectionId: string) => {
    const newId = Math.max(...sections.flatMap(s => s.accounts.map(a => a.id))) + 1;
    
    const getIcon = () => {
      switch (iconType) {
        case 'user': return <User className="h-8 w-8 text-white" />;
        case 'car': return <Car className="h-8 w-8 text-white" />;
        case 'building': return <Building2 className="h-8 w-8 text-white" />;
        case 'calculator': return <Calculator className="h-8 w-8 text-white" />;
        case 'home': return <Home className="h-8 w-8 text-white" />;
        case 'hammer': return <Hammer className="h-8 w-8 text-white" />;
        default: return <User className="h-8 w-8 text-white" />;
      }
    };

    const newAccount: AccountItem = {
      id: newId,
      name,
      amount: "0 ₸",
      icon: getIcon(),
      color
    };

    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? { ...section, accounts: [...section.accounts, newAccount] }
          : section
      )
    );

    setCreateModal({ show: false, sectionId: null });
  };

  const handleAccountClick = (account: AccountItem) => {
    setDetailsModal({ show: true, account });
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-cyan-500';
      case 'yellow': return 'bg-yellow-400';
      case 'green': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const handleDragStart = (e: React.DragEvent, account: AccountItem) => {
    setDraggedAccount(account);
    e.dataTransfer.setData('text/plain', account.id.toString());
    
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
                            <div className="font-medium text-gray-600">Добавить счет</div>
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
