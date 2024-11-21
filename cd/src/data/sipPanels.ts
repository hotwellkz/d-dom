export interface SipPanel {
  id: number;
  title: string;
  thickness: string;
  width: string;
  height: string;
  composition: string;
  price: string;
  features: string[];
  thermalResistance: string;
  soundInsulation: string;
  weight: string;
  category: string;
  image: string;
  description: string;
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  gallery: string[];
}

export const sipPanels: SipPanel[] = [
  {
    id: 1,
    title: 'СИП Панель 163 мм',
    thickness: '163 мм',
    width: '1250 мм',
    height: '2500 мм',
    composition: 'ОСП-3 9мм + ПСБ-С25 145мм + ОСП-3 9мм',
    price: '8 894',
    category: 'Стандарт',
    image: 'https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp',
    thermalResistance: '2.5 м²·°С/Вт',
    soundInsulation: '32 дБ',
    weight: '12,6 кг/м²',
    description: 'Стандартная СИП панель толщиной 163 мм - оптимальное решение для строительства жилых домов и малоэтажных зданий. Обеспечивает отличную теплоизоляцию и прочность конструкции.',
    features: [
      'Стандартная теплоизоляция',
      'Для стен',
      'Оптимальное решение',
      'Высокая прочность',
      'Легкий монтаж'
    ],
    applications: [
      'Строительство жилых домов',
      'Малоэтажное строительство',
      'Внутренние перегородки',
      'Реконструкция зданий'
    ],
    specifications: [
      { label: 'Толщина', value: '163 мм' },
      { label: 'Ширина', value: '1250 мм' },
      { label: 'Высота', value: '2500 мм' },
      { label: 'Вес', value: '12,6 кг/м²' },
      { label: 'Теплосопротивление', value: '2.5 м²·°С/Вт' },
      { label: 'Звукоизоляция', value: '32 дБ' }
    ],
    gallery: [
      'https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp',
      'https://hotwell.kz/wp-content/uploads/2022/09/0707.jpeg.webp',
      'https://hotwell.kz/wp-content/uploads/2021/01/Sertifikat-sip-01.jpg'
    ]
  },
  {
    id: 2,
    title: 'СИП Панель 163 мм',
    thickness: '163 мм',
    width: '1250 мм',
    height: '2800 мм',
    composition: 'ОСП-3 9мм + ПСБ-С25 145мм + ОСП-3 9мм',
    price: '8 894',
    category: 'Премиум',
    image: 'https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp',
    thermalResistance: '3.6 м²·°С/Вт',
    soundInsulation: '35 дБ',
    weight: '12,6 кг/м²',
    description: 'Усиленная СИП панель толщиной 163 мм предназначена для строительства в регионах с суровым климатом. Обеспечивает превосходную теплоизоляцию и повышенную прочность конструкции.',
    features: [
      'Повышенная теплоизоляция',
      'Для стен и перекрытий',
      'Высокая прочность',
      'Усиленная конструкция',
      'Профессиональный монтаж'
    ],
    applications: [
      'Строительство в холодных регионах',
      'Многоэтажное строительство',
      'Коммерческие здания',
      'Промышленные объекты'
    ],
    specifications: [
      { label: 'Толщина', value: '168 мм' },
      { label: 'Ширина', value: '1250 мм' },
      { label: 'Высота', value: '2500 мм' },
      { label: 'Вес', value: '12,6 кг/м²' },
      { label: 'Теплосопротивление', value: '3.6 м²·°С/Вт' },
      { label: 'Звукоизоляция', value: '35 дБ' }
    ],
    gallery: [
      'https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp',
      'https://hotwell.kz/wp-content/uploads/2022/09/0707.jpeg.webp',
      'https://hotwell.kz/wp-content/uploads/2021/01/Sertifikat-sip-01.jpg'
    ]
  },
  {
    id: 3,
    title: 'СИП Панель 170 мм',
    thickness: '170 мм',
    width: '1250 мм',
    height: '2800 мм',
    composition: 'ОСП-3 10мм + ПСБ-С25 145мм + ОСП-3 10мм',
    price: '9 500',
    category: 'Премиум+',
    image: 'https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp',
    thermalResistance: '3.8 м²·°С/Вт',
    soundInsulation: '37 дБ',
    weight: '13,8 кг/м²',
    description: 'Премиальная СИП панель толщиной 170 мм - идеальное решение для строительства энергоэффективных зданий. Обеспечивает максимальную теплоизоляцию и звукоизоляцию.',
    features: [
      'Максимальная теплоизоляция',
      'Для крыши',
      'Усиленная конструкция',
      'Повышенная прочность',
      'Профессиональный монтаж',
      'Расширенная гарантия'
    ],
    applications: [
      'Энергоэффективные здания',
      'Пассивные дома',
      'Кровельные конструкции',
      'Премиальное строительство'
    ],
    specifications: [
      { label: 'Толщина', value: '170 мм' },
      { label: 'Ширина', value: '1250 мм' },
      { label: 'Высота', value: '2800 мм' },
      { label: 'Вес', value: '13,8 кг/м²' },
      { label: 'Теплосопротивление', value: '3.8 м²·°С/Вт' },
      { label: 'Звукоизоляция', value: '37 дБ' }
    ],
    gallery: [
      'https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp',
      'https://hotwell.kz/wp-content/uploads/2022/09/0707.jpeg.webp',
      'https://hotwell.kz/wp-content/uploads/2021/01/Sertifikat-sip-01.jpg'
    ]
  }
];