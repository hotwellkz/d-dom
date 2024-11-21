import React from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import { useAccounts } from '../hooks/useAccounts';
import { Transaction } from '../types/accounting';

function getAllTransactions(): Transaction[] {
  // Получаем все ключи из localStorage, которые начинаются с 'transactions_'
  const keys = Object.keys(localStorage).filter(key => key.startsWith('transactions_'));
  
  // Собираем все транзакции из всех счетов
  const allTransactions = keys.reduce((acc: Transaction[], key) => {
    const transactions = JSON.parse(localStorage.getItem(key) || '[]');
    return [...acc, ...transactions];
  }, []);

  // Сортируем по дате (самые новые сверху)
  return allTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default function FeedPage() {
  const { sections } = useAccounts();
  const transactions = getAllTransactions();

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      weekday: 'short',
      day: 'numeric',
      month: 'long'
    });
  };

  // Группируем транзакции по датам
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const dateKey = formatDate(transaction.date);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(transaction);
    return groups;
  }, {} as Record<string, Transaction[]>);

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-64">
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Лента операций - Бухгалтерия компании"
              description="Лента финансовых операций компании. История транзакций и расходов."
              keywords="лента операций, финансы, транзакции, расходы, учет"
              h1="Лента операций"
            />

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
                <div key={date} className="border-b border-gray-200 last:border-0">
                  {/* Дата */}
                  <div className="p-6 bg-gray-50">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {date}
                    </h2>
                  </div>

                  {/* Транзакции за дату */}
                  <div className="divide-y divide-gray-200">
                    {dateTransactions.map((transaction) => (
                      <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-gray-900">
                                {transaction.fromAccountName}
                              </h3>
                              <span className="text-gray-500">→</span>
                              <h3 className="font-medium text-gray-900">
                                {transaction.toAccountName}
                              </h3>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                              {transaction.description}
                            </p>
                          </div>
                          <div className="text-lg font-semibold text-red-600">
                            {transaction.amount.toLocaleString()} ₸
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">
                          {new Date(transaction.date).toLocaleTimeString('ru-RU', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {transactions.length === 0 && (
                <div className="p-6 text-center text-gray-500">
                  История операций пуста
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
