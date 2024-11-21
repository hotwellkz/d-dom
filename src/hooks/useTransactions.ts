import { useState, useEffect } from 'react';
import { Transaction } from '../types/accounting';
import { 
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  serverTimestamp,
  orderBy,
  doc
} from 'firebase/firestore';
import { db } from '../config/firebase';

const transactionsCollection = collection(db, 'transactions');

export function useTransactions(accountId: number) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (accountId) {
      fetchTransactions();
    }
  }, [accountId]);

  const fetchTransactions = async () => {
    try {
      setIsLoading(true);
      const q = query(
        transactionsCollection,
        where('fromAccountId', '==', accountId.toString()),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      const transactionData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Transaction[];
      setTransactions(transactionData);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      const docRef = await addDoc(transactionsCollection, {
        ...transaction,
        fromAccountId: transaction.fromAccountId.toString(),
        toAccountId: transaction.toAccountId.toString(),
        createdAt: serverTimestamp()
      });

      const newTransaction = {
        id: docRef.id,
        ...transaction
      };

      setTransactions(prev => [newTransaction, ...prev]);
      return docRef.id;
    } catch (error) {
      console.error('Failed to add transaction:', error);
      throw error;
    }
  };

  const clearTransactions = async () => {
    try {
      const q = query(
        transactionsCollection,
        where('fromAccountId', '==', accountId.toString())
      );
      const snapshot = await getDocs(q);
      await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));
      setTransactions([]);
    } catch (error) {
      console.error('Failed to clear transactions:', error);
      throw error;
    }
  };

  return {
    transactions,
    addTransaction,
    clearTransactions,
    isLoading,
    refetch: fetchTransactions
  };
}
