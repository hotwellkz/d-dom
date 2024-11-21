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
  const [isLoading, setIsLoading] = useState(true);

  // Загружаем данные с сервера при инициализации
  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/accounts`);
      const accounts = await response.json();
      
      if (accounts.length === 0) {
        // Если база данных пуста, инициализируем её данными из initialSections
        await Promise.all(
          initialSections.flatMap(section =>
            section.accounts.map(account =>
              createAccount(section.id, account)
            )
          )
        );
        return;
      }
      
      // Группируем счета по секциям
      const updatedSections = sections.map(section => ({
        ...section,
        accounts: accounts.filter((account: AccountItem & { section_id: string }) => 
          account.section_id === section.id
        )
      }));
      
      setSections(updatedSections);
    } catch (error) {
      console.error('Failed to fetch accounts:', error);
    } finally {
      setIsLoading(false);
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
      throw error;
    }
  };

  const deleteAccount = async (accountId: number, sectionId: string) => {
    try {
      await fetch(`${API_URL}/accounts/${accountId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
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
      throw error;
    }
  };

  const createAccount = async (sectionId: string, account: Omit<AccountItem, 'id'>) => {
    try {
      const response = await fetch(`${API_URL}/accounts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...account, section_id: sectionId })
      });
      
      if (!response.ok) {
        throw new Error('Failed to create account');
      }
      
      const { id } = await response.json();
      return id;
    } catch (error) {
      console.error('Failed to create account:', error);
      throw error;
    }
  };

  const addAccount = async (sectionId: string, newAccount: Omit<AccountItem, 'id'>) => {
    try {
      const id = await createAccount(sectionId, newAccount);
      
      setSections(prevSections =>
        prevSections.map(section =>
          section.id === sectionId
            ? { ...section, accounts: [...section.accounts, { ...newAccount, id }] }
            : section
        )
      );
    } catch (error) {
      console.error('Failed to add account:', error);
      throw error;
    }
  };

  const updateAccountAmount = async (accountId: number, amount: number) => {
    try {
      const account = sections
        .flatMap(s => s.accounts)
        .find(a => a.id === accountId);
      
      if (account) {
        const currentAmount = parseFloat(account.amount.replace(/[^0-9.-]+/g, ''));
        const newAmount = `${(currentAmount + amount).toLocaleString()} ₸`;
        await updateAccount(accountId, { amount: newAmount });
      }
    } catch (error) {
      console.error('Failed to update account amount:', error);
      throw error;
    }
  };

  const clearAccountHistory = async (accountId: number) => {
    try {
      await fetch(`${API_URL}/transactions/${accountId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      
      // Сбрасываем сумму счета на 0
      await updateAccount(accountId, { amount: "0 ₸" });
    } catch (error) {
      console.error('Failed to clear account history:', error);
      throw error;
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
    clearAccountHistory,
    isLoading
  };
}
