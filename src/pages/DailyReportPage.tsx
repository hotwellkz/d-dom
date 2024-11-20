import React from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
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

interface DailySummary {
  totalAmount: number;
  income: number;
  expenses: number;
  transactions: Transaction[];
}

export default function DailyReportPage() {
  const transactions = getAllTransactions();

  // Группируем транзакции по дням и считаем итоги
  const dailyReports = transactions.reduce((acc: Record<string, DailySummary>, transaction) => {
    const date = new Date(transaction.date).toLocaleDateString('ru-RU');
    
    if (!acc[date]) {
      acc[date] = {
        totalAmount: 0,
        income: 0,
        expenses: 0,
        transactions: []
      };
    }

    // Добавляем транзакцию в список
    acc[date].transactions.push(transaction);

    // Обновляем суммы
    const amount = transaction.amount;
    acc[date].totalAmount += amount;
    if (amount > 0) {
      acc[date].income += amount;
    } else {
      acc[date].expenses += Math.abs(amount);
    }

    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-64">
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Отчет по дням - Бухгалтерия компании"
              description="Ежедневный финансовый отчет компании. Доходы и расходы по дням."
              keywords="отчет по дням, финансы, доходы, расходы, учет"
              h1="Отчет по дням"
            />

            <div className="space-y-6">
              {Object.entries(dailyReports).map(([date, summary]) => (
                <div key={date} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Дата и итоги дня */}
                  <div className="p-6 bg-gray-50 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-bold text-gray-900">
                        {new Date(date).toLocaleDateString('ru-RU', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Итого за день</div>
                        <div className={`text-lg font-bold ${
                          summary.totalAmount >= 0 ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {summary.totalAmount.toLocaleString()} ₸
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Приход</div>
                        <div className="text-lg font-bold text-emerald-600">
                          +{summary.income.toLocaleString()} ₸
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Расход</div>
                        <div className="text-lg font-bold text-red-600">
                          -{summary.expenses.toLocaleString()} ₸
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Список транзакций */}
                  <div className="divide-y divide-gray-200">
                    {summary.transactions.map((transaction) => (
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

              {Object.keys(dailyReports).length === 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
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
