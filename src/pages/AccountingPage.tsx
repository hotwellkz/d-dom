import React, { useState } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import AccountSummary from '../components/AccountSummary';
import AccountSection from '../components/AccountSection';
import AccountContextMenu from '../components/AccountContextMenu';
import EditAccountModal from '../components/EditAccountModal';
import CreateAccountModal from '../components/CreateAccountModal';
import AccountDetailsModal from '../components/AccountDetailsModal';
import TransactionModal from '../components/TransactionModal';
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
    updateAccountAmount
  } = useAccounts();

  const [contextMenu, setContextMenu] = useState({
    show: false,
    x: 0,
    y: 0,
    accountId: null as number | null,
    sectionId: null as string | null
  });

  const [editModal, setEditModal] = useState({
    show: false,
    accountId: null as number | null,
    currentName: ''
  });

  const [createModal, setCreateModal] = useState({
    show: false,
    sectionId: null as string | null
  });

  const [detailsModal, setDetailsModal] = useState({
    show: false,
    account: null as AccountItem | null
  });

  const [draggedAccount, setDraggedAccount] = useState<AccountItem | null>(null);
  const [dropTarget, setDropTarget] = useState<AccountItem | null>(null);
  const [transactionModal, setTransactionModal] = useState({
    show: false,
    fromAccount: null as AccountItem | null,
    toAccount: null as AccountItem | null
  });

  const getColorClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-cyan-500';
      case 'yellow': return 'bg-yellow-400';
      case 'green': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
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

    addAccount(sectionId, newAccount);
    setCreateModal({ show: false, sectionId: null });
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

  const handleSaveTransaction = (amount: number, description: string, date: string) => {
    if (transactionModal.fromAccount && transactionModal.toAccount) {
      updateAccountAmount(transactionModal.fromAccount.id, -amount);
      updateAccountAmount(transactionModal.toAccount.id, amount);
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

            <AccountSummary summary={summary} />

            <div className="space-y-8">
              {sections.map((section) => (
                <AccountSection
                  key={section.id}
                  section={section}
                  isExpanded={expandedSections[section.id]}
                  onToggle={() => toggleSection(section.id)}
                  onContextMenu={handleContextMenu}
                  onAccountClick={(account) => setDetailsModal({ show: true, account })}
                  onCreateClick={(sectionId) => setCreateModal({ show: true, sectionId })}
                  onDragStart={handleDragStart}
                  onDragOver={(e, account) => {
                    e.preventDefault();
                    setDropTarget(account);
                  }}
                  onDrop={handleDrop}
                  onDragEnd={() => {
                    setDraggedAccount(null);
                    setDropTarget(null);
                  }}
                  dropTarget={dropTarget}
                  getColorClass={getColorClass}
                />
              ))}
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
                onClose={() => setContextMenu(prev => ({ ...prev, show: false }))}
              />
            )}

            {editModal.show && (
              <EditAccountModal
                isOpen={editModal.show}
                onClose={() => setEditModal({ show: false, accountId: null, currentName: '' })}
                onSave={(newName) => {
                  if (editModal.accountId) {
                    updateAccount(editModal.accountId, { name: newName });
                  }
                  setEditModal({ show: false, accountId: null, currentName: '' });
                }}
                currentName={editModal.currentName}
              />
            )}

            {createModal.show && createModal.sectionId && (
              <CreateAccountModal
                isOpen={createModal.show}
                onClose={() => setCreateModal({ show: false, sectionId: null })}
                onSave={handleCreateAccount}
                sectionId={createModal.sectionId}
              />
            )}

            {detailsModal.show && detailsModal.account && (
              <AccountDetailsModal
                isOpen={detailsModal.show}
                onClose={() => setDetailsModal({ show: false, account: null })}
                account={detailsModal.account}
              />
            )}

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
