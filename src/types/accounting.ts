import { ReactNode } from 'react';

export interface AccountItem {
  id: number;
  name: string;
  amount: string;
  icon: ReactNode;
  color: 'blue' | 'yellow' | 'green';
}

export interface AccountSection {
  id: string;
  title: string;
  accounts: AccountItem[];
}

export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: string;
  category: string;
  note?: string;
}

export interface AccountSummary {
  balance: string;
  expenses: string;
  planned: string;
}
