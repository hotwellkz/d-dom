import { useState, useEffect } from 'react';
import { Transaction } from '../types/accounting';

const API_URL = 'http://localhost:3001/api';

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
      const response = await fetch(`${API_URL}/transactions/${accountId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Failed to fetch transactions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    try {
      const response = await fetch(`${API_URL}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }
      
      const { id } = await response.json();
      setTransactions(prev => [...prev, { ...transaction, id }]);
      
      // Обновляем список транзакций после добавления новой
      await fetchTransactions();
    } catch (error) {
      console.error('Failed to add transaction:', error);
      throw error;
    }
  };

  const clearTransactions = async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${accountId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error('Failed to clear transactions');
      }
      
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
