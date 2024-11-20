import React from 'react';
import { ChevronUp, ChevronDown, Plus } from 'lucide-react';
import { AccountSection as AccountSectionType, AccountItem } from '../types/accounting';
import AccountIcon from './AccountIcon';

interface AccountSectionProps {
  section: AccountSectionType;
  isExpanded: boolean;
  onToggle: () => void;
  onContextMenu: (e: React.MouseEvent, accountId: number, sectionId: string) => void;
  onAccountClick: (account: AccountItem) => void;
  onCreateClick: (sectionId: string) => void;
  onDragStart: (e: React.DragEvent, account: AccountItem) => void;
  onDragOver: (e: React.DragEvent, account: AccountItem) => void;
  onDrop: (e: React.DragEvent, account: AccountItem) => void;
  onDragEnd: () => void;
  dropTarget: AccountItem | null;
  getColorClass: (color: string) => string;
}

export default function AccountSection({
  section,
  isExpanded,
  onToggle,
  onContextMenu,
  onAccountClick,
  onCreateClick,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
  dropTarget,
  getColorClass
}: AccountSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {section.accounts.map((account) => (
              <div key={account.id} className="flex flex-col items-center">
                <div 
                  className={`${getColorClass(account.color)} rounded-full p-6 mb-2 shadow-lg cursor-pointer ${
                    dropTarget?.id === account.id ? 'ring-4 ring-primary-500' : ''
                  }`}
                  onClick={() => onAccountClick(account)}
                  onContextMenu={(e) => onContextMenu(e, account.id, section.id)}
                  draggable
                  onDragStart={(e) => onDragStart(e, account)}
                  onDragOver={(e) => onDragOver(e, account)}
                  onDrop={(e) => onDrop(e, account)}
                  onDragEnd={onDragEnd}
                >
                  <AccountIcon type={account.iconType} />
                </div>
                <div className="text-center">
                  <div className="font-medium text-gray-900 mb-1">{account.name}</div>
                  <div className={`text-sm ${account.amount.includes('-') ? 'text-red-600' : 'text-gray-600'}`}>
                    {account.amount}
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => onCreateClick(section.id)}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-gray-200 rounded-full p-6 mb-2 shadow-lg hover:bg-gray-300 transition-colors">
                <Plus className="h-8 w-8 text-gray-600" />
              </div>
              <div className="font-medium text-gray-600">Добавить счет</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
