import React from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import { useAccounts } from '../hooks/useAccounts';
import { useTransactions } from '../hooks/useTransactions';

export default function DailyReportPage() {
  const { sections } = useAccounts();
  const allTransactions = sections.flatMap(section => 
    section.accounts.flatMap(account => {
      const { transactions } = useTransactions(account.id);
      return transactions.map(t => ({
        ...t,
        accountName: account.name
      }));
    })
  );

  // Группируем транзакции по датам
  const groupedTransactions = allTransactions.reduce((groups, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString('ru-RU');
    if (!groups[date]) {
      groups[date] = {
        transactions: [],
        totalIncome: 0,
        totalExpense: 0
      };
    }
    groups[date].transactions.push(transaction);
    if (transaction.amount > 0) {
      groups[date].totalIncome += transaction.amount;
    } else {
      groups[date].totalExpense += Math.abs(transaction.amount);
    }
    return groups;
  }, {} as Record<string, { 
    transactions: typeof allTransactions, 
    totalIncome: number, 
    totalExpense: number 
  }>);

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-0 md:pl-64 transition-all duration-300">
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Отчет по дням - Бухгалтерия компании"
              description="Ежедневный финансовый отчет компании. Доходы и расходы по дням."
              keywords="отчет по дням, финансы, доходы, расходы, учет"
              h1="Отчет по дням"
            />

            <div className="space-y-8">
              {Object.entries(groupedTransactions)
                .sort((a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())
                .map(([date, data]) => (
                  <div key={date} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {new Date(date).toLocaleDateString('ru-RU', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long'
                        })}
                      </h2>
                    </div>

                    <div className="divide-y divide-gray-200">
                      {data.transactions.map((transaction) => (
                        <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-medium text-gray-900">
                                {transaction.fromAccountName} → {transaction.toAccountName}
                              </h3>
                              <p className="text-sm text-gray-500">{transaction.description}</p>
                            </div>
                            <div className={`text-lg font-semibold ${
                              transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {transaction.amount > 0 ? '+' : '-'} {Math.abs(transaction.amount).toLocaleString()} ₸
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 bg-gray-50">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Доходы</p>
                          <p className="text-lg font-semibold text-green-600">
                            + {data.totalIncome.toLocaleString()} ₸
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Расходы</p>
                          <p className="text-lg font-semibold text-red-600">
                            - {data.totalExpense.toLocaleString()} ₸
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
