import React from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import { useAccounts } from '../hooks/useAccounts';
import { useTransactions } from '../hooks/useTransactions';

interface FeedItem {
  id: number;
  user: string;
  category: string;
  amount: string;
  description: string;
  isExpense: boolean;
  date: string;
}

export default function FeedPage() {
  const { sections } = useAccounts();
  const allTransactions = sections.flatMap(section => 
    section.accounts.flatMap(account => {
      const { transactions } = useTransactions(account.id);
      return transactions.map(t => ({
        ...t,
        accountName: account.name
      }));
    })
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-0 md:pl-64 transition-all duration-300">
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Лента операций - Бухгалтерия компании"
              description="Лента финансовых операций компании. История транзакций и расходов."
              keywords="лента операций, финансы, транзакции, расходы, учет"
              h1="Лента операций"
            />

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  СЕГОДНЯ, {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {allTransactions.length > 0 ? (
                  allTransactions.map((transaction) => (
                    <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {transaction.fromAccountName} → {transaction.toAccountName}
                          </h3>
                          <p className="text-sm text-gray-500">{transaction.description}</p>
                        </div>
                        <div className="text-lg font-semibold text-red-600">
                          {transaction.amount.toLocaleString()} ₸
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {new Date(transaction.date).toLocaleDateString('ru-RU', {
                          day: 'numeric',
                          month: 'long',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    История операций пуста
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
