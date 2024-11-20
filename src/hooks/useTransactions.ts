import { useState, useEffect } from 'react';
import { Transaction } from '../types/accounting';

export function useTransactions(accountId: number) {
  const storageKey = `transactions_${accountId}`;
  
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem(storageKey);
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
  }, [transactions, storageKey]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now()
    };
    setTransactions(prev => [...prev, newTransaction]);
  };

  const clearTransactions = () => {
    setTransactions([]);
    localStorage.removeItem(storageKey);
  };

  return {
    transactions,
    addTransaction,
    clearTransactions
  };
}
