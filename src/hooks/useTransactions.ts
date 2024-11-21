import { useState, useEffect } from 'react';
import { Transaction } from '../types/accounting';
import { 
  getAccountTransactions, 
  createTransaction as dbCreateTransaction,
  clearAccountTransactions 
} from '../db/firebase';

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
      const data = await getAccountTransactions(accountId.toString());
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      const id = await dbCreateTransaction(transaction);
      setTransactions(prev => [...prev, { ...transaction, id }]);
      await fetchTransactions(); // Обновляем список после добавления
    } catch (error) {
      console.error('Failed to add transaction:', error);
      throw error;
    }
  };

  const clearTransactions = async () => {
    try {
      await clearAccountTransactions(accountId.toString());
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
