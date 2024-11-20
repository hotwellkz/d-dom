import { useState, useEffect } from 'react';
import { AccountSection, AccountItem } from '../types/accounting';
import { initialSections } from '../data/initialAccounts';

const STORAGE_KEY = 'accountData';

export function useAccounts() {
  // Загружаем данные из localStorage при инициализации
  const loadInitialData = () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : initialSections;
  };

  const [sections, setSections] = useState<AccountSection[]>(loadInitialData);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    clients: true,
    personal: true,
    objects: true,
    warehouse: true
  });

  // Сохраняем данные в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sections));
  }, [sections]);

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

  const clearAccountHistory = (accountId: number) => {
    // Очищаем историю транзакций и сбрасываем сумму
    setSections(prevSections =>
      prevSections.map(section => ({
        ...section,
        accounts: section.accounts.map(account => {
          if (account.id === accountId) {
            return {
              ...account,
              amount: "0 ₸"
            };
          }
          return account;
        })
      }))
    );

    // Очищаем историю в localStorage
    const storageKey = `transactions_${accountId}`;
    localStorage.removeItem(storageKey);
  };

  return {
    sections,
    expandedSections,
    toggleSection,
    updateAccount,
    deleteAccount,
    addAccount,
    updateAccountAmount,
    clearAccountHistory
  };
}
