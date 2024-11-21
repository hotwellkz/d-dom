import { useState, useEffect } from 'react';
import { AccountSection, AccountItem } from '../types/accounting';
import { initialSections } from '../data/initialAccounts';

const API_URL = 'http://localhost:3001/api';

export function useAccounts() {
  const [sections, setSections] = useState<AccountSection[]>(initialSections);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    clients: true,
    personal: true,
    objects: true,
    warehouse: true
  });

  // Загружаем данные с сервера при инициализации
  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      const response = await fetch(`${API_URL}/accounts`);
      const accounts = await response.json();
      
      // Группируем счета по секциям
      const updatedSections = sections.map(section => ({
        ...section,
        accounts: accounts.filter((account: AccountItem) => account.section_id === section.id)
      }));
      
      setSections(updatedSections);
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const updateAccount = async (accountId: number, updates: Partial<AccountItem>) => {
    try {
      await fetch(`${API_URL}/accounts/${accountId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      
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
    } catch (error) {
      console.error('Failed to update account:', error);
    }
  };

  const deleteAccount = async (accountId: number, sectionId: string) => {
    try {
      await fetch(`${API_URL}/accounts/${accountId}`, {
        method: 'DELETE'
      });
      
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
    } catch (error) {
      console.error('Failed to delete account:', error);
    }
  };

  const addAccount = async (sectionId: string, newAccount: AccountItem) => {
    try {
      const response = await fetch(`${API_URL}/accounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newAccount, section_id: sectionId })
      });
      const { id } = await response.json();
      
      setSections(prevSections =>
        prevSections.map(section =>
          section.id === sectionId
            ? { ...section, accounts: [...section.accounts, { ...newAccount, id }] }
            : section
        )
      );
    } catch (error) {
      console.error('Failed to add account:', error);
    }
  };

  const updateAccountAmount = async (accountId: number, amount: number) => {
    try {
      const sections = await fetchAccounts();
      const account = sections.flatMap(s => s.accounts).find(a => a.id === accountId);
      if (account) {
        const currentAmount = parseFloat(account.amount.replace(/[^0-9.-]+/g, ''));
        const newAmount = `${(currentAmount + amount).toLocaleString()} ₸`;
        await updateAccount(accountId, { amount: newAmount });
      }
    } catch (error) {
      console.error('Failed to update account amount:', error);
    }
  };

  const clearAccountHistory = async (accountId: number) => {
    try {
      await fetch(`${API_URL}/transactions/${accountId}`, {
        method: 'DELETE'
      });
      
      // Сбрасываем сумму счета на 0
      await updateAccount(accountId, { amount: "0 ₸" });
    } catch (error) {
      console.error('Failed to clear account history:', error);
    }
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
