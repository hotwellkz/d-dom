import { useState, useEffect } from 'react';
import { Transaction } from '../types/accounting';

const STORAGE_KEY_PREFIX = 'transactions_';

export function useTransactions(accountId: number) {
  const storageKey = `${STORAGE_KEY_PREFIX}${accountId}`;
  
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem(storageKey);
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(transactions));
  }, [transactions, storageKey]);

  const addTransaction = (transaction: Transaction) => {
    setTransactions(prev => [...prev, transaction]);
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
