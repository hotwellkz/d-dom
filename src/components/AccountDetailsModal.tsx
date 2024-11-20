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

  // Группируем транзакции по датам
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const date = new Date(transaction.date);
    const dateKey = date.toLocaleDateString('ru-RU', {
      weekday: 'short',
      day: 'numeric',
      month: 'long'
    });
    
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(transaction);
    return groups;
  }, {} as Record<string, typeof transactions>);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl">
          {/* Заголовок */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
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

          {/* Список транзакций */}
          <div className="overflow-y-auto max-h-[70vh]">
            {Object.entries(groupedTransactions).length > 0 ? (
              Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
                <div key={date} className="border-b border-gray-100 last:border-0">
                  {/* Дата */}
                  <div className="px-6 py-3 bg-gray-50">
                    <h4 className="text-sm font-medium text-gray-500 uppercase">
                      {date}
                    </h4>
                  </div>

                  {/* Транзакции за дату */}
                  <div className="divide-y divide-gray-100">
                    {dateTransactions.map((transaction) => (
                      <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900">
                                {transaction.fromAccountId === account.id ? 
                                  transaction.toAccountName : 
                                  transaction.fromAccountName}
                              </span>
                              <span className="text-sm text-gray-500">
                                {transaction.description}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${
                              transaction.fromAccountId === account.id ? 
                                'text-red-600' : 
                                'text-green-600'
                            }`}>
                              {transaction.fromAccountId === account.id ? '- ' : '+ '}
                              {transaction.amount.toLocaleString()} ₸
                            </p>
                            <p className="text-sm text-gray-500">изменение</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
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
