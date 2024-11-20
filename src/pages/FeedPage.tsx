import React from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';

interface FeedItem {
  id: number;
  user: string;
  category: string;
  amount: string;
  description: string;
  isExpense: boolean;
}

const feedItems: FeedItem[] = [
  {
    id: 1,
    user: "Савицкий",
    category: "Общ Расх",
    amount: "2 600 ₸",
    description: "зимния омывайка 2шт спринтер 2",
    isExpense: true
  },
  {
    id: 2,
    user: "Савицкий",
    category: "Общ Расх",
    amount: "25 500 ₸",
    description: "салафан бухта и фломастеры 2уп на склад",
    isExpense: true
  },
  {
    id: 3,
    user: "Савицкий",
    category: "Общ Расх",
    amount: "500 ₸",
    description: "заезд",
    isExpense: true
  },
  {
    id: 4,
    user: "Савицкий",
    category: "Общ Расх",
    amount: "2 500 ₸",
    description: "мойка спринт 2",
    isExpense: true
  },
  {
    id: 5,
    user: "Милюк",
    category: "Общ Расх",
    amount: "190 146 ₸",
    description: "налоги hotwell общ расх",
    isExpense: true
  },
  {
    id: 6,
    user: "Милюк",
    category: "Анна 114",
    amount: "352 000 ₸",
    description: "бетон",
    isExpense: true
  },
  {
    id: 7,
    user: "Милюк",
    category: "Общ Расх",
    amount: "20 000 ₸",
    description: "зп Андрей сайт",
    isExpense: true
  },
  {
    id: 8,
    user: "Саша",
    category: "Пансионат Талгар",
    amount: "16 100 ₸",
    description: "проволока, арматура",
    isExpense: true
  },
  {
    id: 9,
    user: "Саша",
    category: "Общ Расх",
    amount: "500 ₸",
    description: "заезд",
    isExpense: true
  }
];

export default function FeedPage() {
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
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  СЕГОДНЯ, {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {feedItems.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.user}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className={`text-lg font-semibold ${item.isExpense ? 'text-red-600' : 'text-green-600'}`}>
                        {item.isExpense ? '- ' : '+ '}{item.amount}
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
