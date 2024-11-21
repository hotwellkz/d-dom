import { useState, useEffect } from 'react';
import { AccountSection, AccountItem } from '../types/accounting';
import { initialSections } from '../data/initialAccounts';
import { 
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';

const accountsCollection = collection(db, 'accounts');
const transactionsCollection = collection(db, 'transactions');

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
      const snapshot = await getDocs(accountsCollection);
      const accounts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      if (accounts.length === 0) {
        // Initialize database with initial values
        await Promise.all(
          initialSections.flatMap(section =>
            section.accounts.map(account =>
              addDoc(accountsCollection, {
                ...account,
                sectionId: section.id,
                createdAt: serverTimestamp()
              })
            )
          )
        );
        setSections(initialSections);
      } else {
        // Group accounts by sections
        const updatedSections = sections.map(section => ({
          ...section,
          accounts: accounts
            .filter(account => account.sectionId === section.id)
            .map(({ sectionId, ...account }) => ({
              ...account,
              id: account.id
            } as AccountItem))
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

  const updateAccount = async (accountId: string, updates: Partial<AccountItem>) => {
    try {
      const docRef = doc(accountsCollection, accountId);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: serverTimestamp()
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

  const deleteAccount = async (accountId: string, sectionId: string) => {
    try {
      // Delete account document
      const docRef = doc(accountsCollection, accountId);
      await deleteDoc(docRef);

      // Delete related transactions
      const q = query(transactionsCollection, 
        where('fromAccountId', '==', accountId)
      );
      const snapshot = await getDocs(q);
      await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));

      // Update local state
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
      // Add new account to Firestore
      const docRef = await addDoc(accountsCollection, {
        ...newAccount,
        sectionId,
        amount: "0 ₸",
        createdAt: serverTimestamp()
      });

      // Update local state
      setSections(prevSections =>
        prevSections.map(section =>
          section.id === sectionId
            ? { 
                ...section, 
                accounts: [...section.accounts, { ...newAccount, id: docRef.id }] 
              }
            : section
        )
      );
      return docRef.id;
    } catch (error) {
      console.error('Failed to add account:', error);
      throw error;
    }
  };

  const updateAccountAmount = async (accountId: string, amount: number) => {
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

  const clearAccountHistory = async (accountId: string) => {
    try {
      // Delete all transactions for this account
      const q = query(transactionsCollection, where('fromAccountId', '==', accountId));
      const snapshot = await getDocs(q);
      await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));

      // Reset account amount
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
