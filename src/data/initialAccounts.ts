import { IconType } from './icons';

export interface AccountItem {
  id: number;
  name: string;
  amount: string;
  iconType: IconType;
  color: 'blue' | 'yellow' | 'green' | 'purple';
}

export interface AccountSection {
  id: string;
  title: string;
  accounts: AccountItem[];
}

export interface Transaction {
  id: number;
  fromAccountId: number;
  fromAccountName: string;
  toAccountId: number;
  toAccountName: string;
  amount: number;
  description: string;
  date: string;
}

export interface AccountSummary {
  balance: string;
  expenses: string;
  planned: string;
}
