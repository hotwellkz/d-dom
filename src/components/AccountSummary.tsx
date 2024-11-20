import React from 'react';
import { AccountSummary as AccountSummaryType } from '../types/accounting';

interface AccountSummaryProps {
  summary: AccountSummaryType;
}

export default function AccountSummary({ summary }: AccountSummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-sm text-gray-600">Баланс</div>
          <div className="text-xl font-bold text-gray-900">{summary.balance}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">Расходы</div>
          <div className="text-xl font-bold text-gray-900">{summary.expenses}</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-600">В планах</div>
          <div className="text-xl font-bold text-gray-900">{summary.planned}</div>
        </div>
      </div>
    </div>
  );
}
