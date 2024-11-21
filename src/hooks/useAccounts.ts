import { useState, useEffect } from 'react';
import { AccountSection, AccountItem } from '../types/accounting';
import { initialSections } from '../data/initialAccounts';
import { 
  getAllAccounts, 
  createAccount as dbCreateAccount,
  updateAccount as dbUpdateAccount,
  deleteAccount as dbDeleteAccount,
  clearAccountTransactions
} from '../db/firebase';

export function useAccounts() {
  const [sections, setSections] = useState<AccountSection[]>(initialSections);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    clients: true,
    personal: true,
    objects: true,
    warehouse: true
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = async () => {
    try {
      setIsLoading(true);
      const accounts = await getAllAccounts();
      
      if (accounts.length === 0) {
        // Инициализируем базу данных начальными значениями
        await Promise.all(
          initialSections.flatMap(section =>
            section.accounts.map(account =>
              dbCreateAccount({ ...account, sectionId: section.id })
            )
          )
        );
        setSections(initialSections);
      } else {
        // Группируем счета по секциям
        const updatedSections = sections.map(section => ({
          ...section,
          accounts: accounts
            .filter(account => account.sectionId === section.id)
            .map(({ sectionId, ...account }) => account as AccountItem)
        }));
        setSections(updatedSections);
      }
    } catch (error) {
      console.error('Failed to load accounts:', error);
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
      await dbUpdateAccount(accountId.toString(), updates);
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
      await dbDeleteAccount(accountId.toString());
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

  const addAccount = async (sectionId: string, newAccount: Omit<AccountItem, 'id'>) => {
    try {
      const id = await dbCreateAccount({ ...newAccount, sectionId });
      setSections(prevSections =>
        prevSections.map(section =>
          section.id === sectionId
            ? { 
                ...section, 
                accounts: [...section.accounts, { ...newAccount, id: parseInt(id) }] 
              }
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
      await clearAccountTransactions(accountId.toString());
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
