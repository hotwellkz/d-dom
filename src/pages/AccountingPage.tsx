import React, { useState } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import AccountContextMenu from '../components/AccountContextMenu';
import EditAccountModal from '../components/EditAccountModal';
import CreateAccountModal from '../components/CreateAccountModal';
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

const accountSections: AccountSection[] = [
  {
    id: 'personal',
    title: 'Личные счета',
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
    id: 'vehicles',
    title: 'Транспорт и управление',
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
    id: 'operations',
    title: 'Операционные счета',
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
      },
      {
        id: 13,
        name: "KK3",
        amount: "86 100 ₸",
        icon: <Home className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 14,
        name: "Мария M200",
        amount: "0 ₸",
        icon: <Home className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 15,
        name: "ЗП Руслан",
        amount: "0 ₸",
        icon: <Hammer className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 16,
        name: "ЗП Ришат",
        amount: "0 ₸",
        icon: <Hammer className="h-8 w-8 text-white" />,
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

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'user':
      return <User className="h-8 w-8 text-white" />;
    case 'car':
      return <Car className="h-8 w-8 text-white" />;
    case 'building':
      return <Building2 className="h-8 w-8 text-white" />;
    case 'calculator':
      return <Calculator className="h-8 w-8 text-white" />;
    case 'home':
      return <Home className="h-8 w-8 text-white" />;
    case 'hammer':
      return <Hammer className="h-8 w-8 text-white" />;
    default:
      return <User className="h-8 w-8 text-white" />;
  }
};

export default function AccountingPage() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    personal: true,
    vehicles: true,
    operations: true
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

  const [sections, setSections] = useState(accountSections);

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
      const section = sections.find(s => s.id === contextMenu.sectionId);
      const account = section?.accounts.find(a => a.id === contextMenu.accountId);
      if (account) {
        setEditModal({
          show: true,
          accountId: contextMenu.accountId,
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

  const handleCreateAccount = (name: string, iconName: string, color: 'blue' | 'yellow' | 'green', sectionId: string) => {
    setSections(prevSections => 
      prevSections.map(section => {
        if (section.id === sectionId) {
          const newId = Math.max(...section.accounts.map(a => a.id), 0) + 1;
          return {
            ...section,
            accounts: [
              ...section.accounts,
              {
                id: newId,
                name,
                amount: "0 ₸",
                icon: getIconComponent(iconName),
                color
              }
            ]
          };
        }
        return section;
      })
    );
    setCreateModal({ show: false, sectionId: null });
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
                              className={`${getColorClass(account.color)} rounded-full p-6 mb-2 shadow-lg cursor-pointer`}
                              onContextMenu={(e) => handleContextMenu(e, account.id, section.id)}
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
          </div>
        </div>
      </div>
    </div>
  );
}
