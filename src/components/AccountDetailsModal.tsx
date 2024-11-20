import React from 'react';
import { X, ArrowLeft } from 'lucide-react';

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: string;
  category: string;
  note?: string;
}

interface AccountDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  account: {
    name: string;
    amount: string;
  };
}

// Пример транзакций
const transactions: Transaction[] = [
  {
    id: 1,
    date: "20 ноября",
    description: "Общ Расх",
    amount: "- 190 146 ₸",
    category: "налоги hotwell общ расх",
  },
  {
    id: 2,
    date: "20 ноября",
    description: "Анна 114",
    amount: "- 352 000 ₸",
    category: "бетон",
  },
  {
    id: 3,
    date: "20 ноября",
    description: "Общ Расх",
    amount: "- 20 000 ₸",
    category: "зп Андрей сайт",
  },
  {
    id: 4,
    date: "19 ноября",
    description: "Саша",
    amount: "+ 1 200k ₸",
    category: "",
  },
  {
    id: 5,
    date: "19 ноября",
    description: "ОльгаКайрат",
    amount: "+ 4 200k ₸",
    category: "надстройка 144 Ремизовка",
  },
  {
    id: 6,
    date: "19 ноября",
    description: "ЕрнарАлуа",
    amount: "+ 1 288k ₸",
    category: "Шымбулак Модуль Б40",
  },
  {
    id: 7,
    date: "19 ноября",
    description: "Пеноп Клей OSB",
    amount: "- 508 539 ₸",
    category: "пенопласт",
  }
];

export default function AccountDetailsModal({ isOpen, onClose, account }: AccountDetailsModalProps) {
  if (!isOpen) return null;

  // Group transactions by date
  const groupedTransactions = transactions.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {} as { [key: string]: Transaction[] });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative w-full max-w-lg bg-white shadow-xl ml-auto min-h-screen">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
            <div className="flex items-center px-4 py-3">
              <button onClick={onClose} className="p-2 -ml-2">
                <ArrowLeft className="h-6 w-6 text-gray-500" />
              </button>
              <h2 className="text-xl font-semibold text-gray-900 ml-2">{account.name}</h2>
            </div>
            <div className="px-6 py-4 border-t border-gray-100">
              <div className="text-3xl font-bold text-gray-900">{account.amount}</div>
            </div>
          </div>

          {/* Transactions List */}
          <div className="divide-y divide-gray-200">
            {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
              <div key={date}>
                <div className="px-6 py-3 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-500">{date}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {dateTransactions.map((transaction) => (
                    <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-medium text-gray-900">{transaction.description}</h4>
                          {transaction.category && (
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                          )}
                        </div>
                        <span className={`font-semibold ${
                          transaction.amount.includes('-') ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {transaction.amount}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
