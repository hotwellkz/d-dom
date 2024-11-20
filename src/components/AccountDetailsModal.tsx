import React from 'react';
import { X } from 'lucide-react';
import { AccountItem } from '../types/accounting';
import { useTransactions } from '../hooks/useTransactions';
import AccountIcon from './AccountIcon';

interface AccountDetailsModalProps {
  account: AccountItem;
  onClose: () => void;
}

export default function AccountDetailsModal({ account, onClose }: AccountDetailsModalProps) {
  const { transactions } = useTransactions(account.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className={`${getColorClass(account.color)} rounded-full p-4`}>
                <AccountIcon type={account.iconType} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{account.name}</h3>
                <p className={`text-lg ${account.amount.includes('-') ? 'text-red-600' : 'text-gray-600'}`}>
                  {account.amount}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">История операций</h4>
            
            {transactions.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="py-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">
                          {transaction.fromAccountId === account.id ? 
                            `Перевод для ${transaction.toAccountName}` : 
                            `Получено от ${transaction.fromAccountName}`}
                        </p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                        <p className="text-sm text-gray-600 mt-1">{transaction.description}</p>
                      </div>
                      <p className={`font-semibold ${
                        transaction.fromAccountId === account.id ? 
                          'text-red-600' : 
                          'text-green-600'
                      }`}>
                        {transaction.fromAccountId === account.id ? '- ' : '+ '}
                        {transaction.amount.toLocaleString()} ₸
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">История операций пуста</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getColorClass(color: string) {
  switch (color) {
    case 'blue':
      return 'bg-cyan-500';
    case 'yellow':
      return 'bg-yellow-400';
    case 'green':
      return 'bg-emerald-500';
    default:
      return 'bg-gray-500';
  }
}
