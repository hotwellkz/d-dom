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
        iconType: 'user',
        color: 'blue'
      },
      {
        id: 2,
        name: "Еркынгали", 
        amount: "75 000 ₸",
        iconType: 'user',
        color: 'blue'
      },
      {
        id: 3,
        name: "Ольга",
        amount: "4 275k ₸",
        iconType: 'user',
        color: 'blue'
      },
      {
        id: 4,
        name: "Асхат/Куралай",
        amount: "16 368k ₸",
        iconType: 'user',
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
        iconType: 'car',
        color: 'yellow'
      },
      {
        id: 6,
        name: "Саша",
        amount: "- 195 486 ₸",
        iconType: 'car',
        color: 'yellow'
      },
      {
        id: 7,
        name: "Леонид",
        amount: "2 729k ₸",
        iconType: 'user',
        color: 'yellow'
      },
      {
        id: 8,
        name: "Милюк",
        amount: "40 614k ₸",
        iconType: 'building',
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
        iconType: 'calculator',
        color: 'green'
      },
      {
        id: 10,
        name: "Пеноп Клей OSB",
        amount: "38 446k ₸",
        iconType: 'building',
        color: 'green'
      },
      {
        id: 11,
        name: "KK1",
        amount: "1 512k ₸",
        iconType: 'home',
        color: 'green'
      },
      {
        id: 12,
        name: "KK2",
        amount: "1 159k ₸",
        iconType: 'home',
        color: 'green'
      }
    ]
  },
  {
    id: 'warehouse',
    title: 'Склад',
    accounts: [
      {
        id: 13,
        name: "СИП панели",
        amount: "12 450k ₸",
        iconType: 'building',
        color: 'purple'
      },
      {
        id: 14,
        name: "Пиломатериалы",
        amount: "8 320k ₸",
        iconType: 'hammer',
        color: 'purple'
      },
      {
        id: 15,
        name: "Крепеж",
        amount: "2 150k ₸",
        iconType: 'hammer',
        color: 'purple'
      },
      {
        id: 16,
        name: "Утеплитель",
        amount: "5 780k ₸",
        iconType: 'home',
        color: 'purple'
      }
    ]
  }
];
