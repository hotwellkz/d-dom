import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import { AccountItem } from '../types/accounting';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  fromAccount: AccountItem;
  toAccount: AccountItem;
  onSave: (amount: number, description: string, date: string) => void;
}

export default function TransactionModal({ 
  isOpen, 
  onClose, 
  fromAccount, 
  toAccount,
  onSave 
}: TransactionModalProps) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ''));
    
    if (!isNaN(numAmount) && description.trim()) {
      setIsSubmitting(true);
      try {
        // Save transaction to Firestore
        const transactionsRef = collection(db, 'transactions');
        await addDoc(transactionsRef, {
          fromAccountId: fromAccount.id.toString(),
          fromAccountName: fromAccount.name,
          toAccountId: toAccount.id.toString(),
          toAccountName: toAccount.name,
          amount: numAmount,
          description: description.trim(),
          date,
          createdAt: serverTimestamp()
        });

        onSave(numAmount, description.trim(), date);
        setAmount('');
        setDescription('');
        onClose();
      } catch (error) {
        console.error('Error saving transaction:', error);
        alert('Ошибка при сохранении транзакции');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Перевод средств
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>От: {fromAccount.name}</span>
              <span>Кому: {toAccount.name}</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Сумма (₸)
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Введите сумму"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Описание
              </label>
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="За что"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Дата
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  disabled={isSubmitting}
                />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                disabled={isSubmitting}
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Сохранение...' : 'Перевести'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
