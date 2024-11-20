import React from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';

interface Transaction {
  id: number;
  name: string;
  amount: string;
  isExpense: boolean;
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: "Асхат/Куралай Кегень",
    amount: "16 368k ₸",
    isExpense: false
  },
  {
    id: 2,
    name: "Гульжемал 65кв.м",
    amount: "3 534k ₸",
    isExpense: false
  },
  {
    id: 3,
    name: "Пополнение",
    amount: "260 000 ₸",
    isExpense: false
  },
  {
    id: 4,
    name: "Алдияр Шымкент",
    amount: "12 500 ₸",
    isExpense: true
  },
  {
    id: 5,
    name: "Сайвали ДомЦех",
    amount: "18 175 ₸",
    isExpense: true
  },
  {
    id: 6,
    name: "ЗПАлдияр Шымкент",
    amount: "100 000 ₸",
    isExpense: true
  },
  {
    id: 7,
    name: "Михаил 144 Панфилова",
    amount: "319 000 ₸",
    isExpense: true
  },
  {
    id: 8,
    name: "Пеноп Клей OSB",
    amount: "396 000 ₸",
    isExpense: true
  }
];

const summary = {
  totalAmount: "+ 16 276k ₸",
  income: "+ 20 162k ₸",
  expenses: "- 3 886k ₸"
};

export default function DailyReportPage() {
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

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Date Navigation */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    15 ноября 2024
                  </h2>
                  <div className="flex space-x-1">
                    {Array(17).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${i === 14 ? 'bg-primary-600' : 'bg-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Total Amount */}
              <div className="p-8 text-center border-b border-gray-200">
                <div className="text-4xl font-bold text-emerald-500">
                  {summary.totalAmount}
                </div>
              </div>

              {/* Transactions List */}
              <div className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-900">
                        {transaction.name}
                      </h3>
                      <span className={`text-lg font-semibold ${
                        transaction.isExpense ? 'text-red-600' : 'text-emerald-500'
                      }`}>
                        {transaction.isExpense ? '- ' : '+ '}{transaction.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="p-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-medium text-gray-900">Доход</span>
                    <span className="font-semibold text-emerald-500">{summary.income}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-medium text-gray-900">Расход</span>
                    <span className="font-semibold text-red-600">{summary.expenses}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
