import React from 'react';
import { RotateCcw } from 'lucide-react';
import { AccountSummary as AccountSummaryType } from '../types/accounting';

interface AccountSummaryProps {
  summary: AccountSummaryType;
  onClearAll: () => void;
}

export default function AccountSummary({ summary, onClearAll }: AccountSummaryProps) {
  const [showConfirm, setShowConfirm] = React.useState(false);

  const handleClearAll = () => {
    if (showConfirm) {
      onClearAll();
      setShowConfirm(false);
    } else {
      setShowConfirm(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Общая статистика</h2>
        <button
          onClick={handleClearAll}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            showConfirm 
              ? 'bg-red-100 text-red-600 hover:bg-red-200' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          {showConfirm ? 'Подтвердить очистку' : 'Очистить историю'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Баланс</div>
          <div className="text-xl font-bold text-gray-900">{summary.balance}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Расходы</div>
          <div className="text-xl font-bold text-red-600">{summary.expenses}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">В планах</div>
          <div className="text-xl font-bold text-gray-900">{summary.planned}</div>
        </div>
      </div>
    </div>
  );
}
