import { useState } from 'react';
import { AccountSection, AccountItem } from '../types/accounting';
import { initialSections } from '../data/initialAccounts';

export function useAccounts() {
  const [sections, setSections] = useState<AccountSection[]>(initialSections);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    clients: true,
    personal: true,
    objects: true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const updateAccount = (accountId: number, updates: Partial<AccountItem>) => {
    setSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        accounts: section.accounts.map(account =>
          account.id === accountId
            ? { ...account, ...updates }
            : account
        )
      }))
    );
  };

  const deleteAccount = (accountId: number, sectionId: string) => {
    setSections(prevSections =>
      prevSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            accounts: section.accounts.filter(account => account.id !== accountId)
          };
        }
        return section;
      })
    );
  };

  const addAccount = (sectionId: string, newAccount: AccountItem) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? { ...section, accounts: [...section.accounts, newAccount] }
          : section
      )
    );
  };

  const updateAccountAmount = (accountId: number, amount: number) => {
    setSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        accounts: section.accounts.map(account => {
          if (account.id === accountId) {
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
  };

  return {
    sections,
    expandedSections,
    toggleSection,
    updateAccount,
    deleteAccount,
    addAccount,
    updateAccountAmount
  };
}
