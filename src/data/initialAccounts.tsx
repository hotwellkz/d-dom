import React from 'react';
import { User, Car, Building2, Calculator, Home } from 'lucide-react';
import { AccountSection } from '../types/accounting';

export const initialSections: AccountSection[] = [
  {
    id: 'clients',
    title: 'Клиенты',
    accounts: [
      {
        id: 1,
        name: "Гульжемал",
        amount: "3 609k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      },
      {
        id: 2,
        name: "Еркынгали",
        amount: "75 000 ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      },
      {
        id: 3,
        name: "Ольга",
        amount: "4 275k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      },
      {
        id: 4,
        name: "Асхат/Куралай",
        amount: "16 368k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'blue'
      }
    ]
  },
  {
    id: 'personal',
    title: 'Личные счета',
    accounts: [
      {
        id: 5,
        name: "Савицкий",
        amount: "30 748.57 ₸",
        icon: <Car className="h-8 w-8 text-white" />,
        color: 'yellow'
      },
      {
        id: 6,
        name: "Саша",
        amount: "- 195 486 ₸",
        icon: <Car className="h-8 w-8 text-white" />,
        color: 'yellow'
      },
      {
        id: 7,
        name: "Леонид",
        amount: "2 729k ₸",
        icon: <User className="h-8 w-8 text-white" />,
        color: 'yellow'
      },
      {
        id: 8,
        name: "Милюк",
        amount: "40 614k ₸",
        icon: <Building2 className="h-8 w-8 text-white" />,
        color: 'yellow'
      }
    ]
  },
  {
    id: 'objects',
    title: 'Объекты',
    accounts: [
      {
        id: 9,
        name: "Общ Расх",
        amount: "38 910k ₸",
        icon: <Calculator className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 10,
        name: "Пеноп Клей OSB",
        amount: "38 446k ₸",
        icon: <Building2 className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 11,
        name: "KK1",
        amount: "1 512k ₸",
        icon: <Home className="h-8 w-8 text-white" />,
        color: 'green'
      },
      {
        id: 12,
        name: "KK2",
        amount: "1 159k ₸",
        icon: <Home className="h-8 w-8 text-white" />,
        color: 'green'
      }
    ]
  }
];
