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
  serverTimestamp,
  onSnapshot
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

  // Подписываемся на изменения в реальном времени
  useEffect(() => {
    const unsubscribe = onSnapshot(accountsCollection, (snapshot) => {
      const accounts = snapshot.docs.map(doc => ({
        id: parseInt(doc.id),
        ...doc.data()
      }));

      const updatedSections = sections.map(section => ({
        ...section,
        accounts: accounts
          .filter(account => account.sectionId === section.id)
          .map(({ sectionId, ...account }) => account as AccountItem)
      }));

      setSections(updatedSections);
    });

    return () => unsubscribe();
  }, []);

  const loadAccounts = async () => {
    try {
      setIsLoading(true);
      const snapshot = await getDocs(accountsCollection);
      const accounts = snapshot.docs.map(doc => ({
        id: parseInt(doc.id),
        ...doc.data()
      }));
      
      if (accounts.length === 0) {
        // Инициализируем базу данных начальными значениями
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
      const docRef = doc(accountsCollection, accountId.toString());
      await updateDoc(docRef, {
        ...updates,
        updatedAt: serverTimestamp()
      });
      
      // Обновление локального состояния произойдет автоматически через onSnapshot
    } catch (error) {
      console.error('Failed to update account:', error);
      throw error;
    }
  };

  const deleteAccount = async (accountId: number, sectionId: string) => {
    try {
      const docRef = doc(accountsCollection, accountId.toString());
      await deleteDoc(docRef);
      
      // Удаляем связанные транзакции
      const q = query(transactionsCollection, where('fromAccountId', '==', accountId.toString()));
      const snapshot = await getDocs(q);
      await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));
      
      // Обновление локального состояния произойдет автоматически через onSnapshot
    } catch (error) {
      console.error('Failed to delete account:', error);
      throw error;
    }
  };

  const addAccount = async (sectionId: string, newAccount: Omit<AccountItem, 'id'>) => {
    try {
      const docRef = await addDoc(accountsCollection, {
        ...newAccount,
        sectionId,
        createdAt: serverTimestamp(),
        amount: "0 ₸"
      });
      
      // Обновление локального состояния произойдет автоматически через onSnapshot
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
      const q = query(transactionsCollection, where('fromAccountId', '==', accountId.toString()));
      const snapshot = await getDocs(q);
      await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));
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
