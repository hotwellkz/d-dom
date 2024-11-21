import { useState, useEffect } from 'react';
import { Transaction } from '../types/accounting';

const API_URL = 'http://localhost:3001/api';

export function useTransactions(accountId: number) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchTransactions();
  }, [accountId]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${accountId}`);
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    }
  };

  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      const response = await fetch(`${API_URL}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction)
      });
      const { id } = await response.json();
      setTransactions(prev => [...prev, { ...transaction, id }]);
    } catch (error) {
      console.error('Failed to add transaction:', error);
    }
  };

  const clearTransactions = async () => {
    try {
      await fetch(`${API_URL}/transactions/${accountId}`, {
        method: 'DELETE'
      });
      setTransactions([]);
    } catch (error) {
      console.error('Failed to clear transactions:', error);
    }
  };

  return {
    transactions,
    addTransaction,
    clearTransactions
  };
}
