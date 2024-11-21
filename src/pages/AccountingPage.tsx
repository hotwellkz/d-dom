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
  // ... остальной код остается без изменений ...

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="transition-all duration-300">
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

      {/* Модальные окна остаются без изменений */}
    </div>
  );
}
