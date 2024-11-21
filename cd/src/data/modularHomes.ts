export interface ModularHome {
  id: number;
  title: string;
  price: string;
  area: string;
  length: string;
  width: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  description: string;
  features: string[];
  gallery: string[];
}

export const modularHomes: ModularHome[] = [
  {
    id: 1,
    title: "Модульный дом С-24",
    price: "4 471 000 ₸",
    area: "24 м²",
    length: "4.0 м",
    width: "6.0 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.07.54_4f51f039.jpg",
    description: "Компактный модульный дом с современным дизайном и полной отделкой. Идеально подходит для небольшой семьи или дачного участка.",
    features: [
      "Полная отделка",
      "Все коммуникации",
      "Современный дизайн",
      "Быстрая установка",
      "Готов к проживанию"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.07.54_4f51f039.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/001-2048x1427.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.18.45_996d71c4.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.18.44_272855c9.jpg"
    ]
  },
  {
    id: 2,
    title: "Модульный дом К-24",
    price: "4 761 000 ₸",
    area: "24 м²",
    length: "4.0 м",
    width: "6.0 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-10-at-18.52.38-e1688993618134.jpeg",
    description: "Просторный модульный дом с двумя спальнями и современной планировкой. Полностью готов к проживанию.",
    features: [
      "Премиум отделка",
      "Теплый пол",
      "Кондиционирование",
      "Современный дизайн",
      "Быстрый монтаж"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-10-at-18.52.38-e1688993618134.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/001-2048x1427.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.02.43_09b7364a.jpg"
    ]
  },
  {
    id: 3,
    title: "Модульный дом С-30",
    price: "6 541 000 ₸",
    area: "30 м²",
    length: "5 м",
    width: "6 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg",
    description: "Модульный дом для семьи. Спальня, гостиная и современная кухня.",
    features: [
      "Премиум отделка",
      "Умный дом",
      "Панорамные окна",
      "Современный дизайн",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-06-23-at-08.45.23-20-1536x1402.jpeg"
    ]
  },
  {
    id: 4,
    title: "Модульный дом К-30",
    price: "6 831 000 ₸",
    area: "30 м²",
    length: "5 м",
    width: "6 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.07.57_6cc90613.jpg",
    description: "Просторный модульный дом с двумя спальнями, кухней-гостиной и большими окнами. Идеален для постоянного проживания.",
    features: [
      "Две спальни",
      "Кухня-гостиная",
      "Панорамные окна",
      "Теплый пол",
      "Умный дом",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.07.57_6cc90613.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/30-889x800.jpg"
    ]
  },
  {
    id: 5,
    title: "Модульный дом М-30",
    price: "6 985 000 ₸",
    area: "30 м²",
    length: "5 м",
    width: "6 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-11.03.45_8f098dab.jpg",
    description: "Современный модульный дом с увеличенной площадью и продуманной планировкой. Подходит для большой семьи.",
    features: [
      "Просторная гостиная",
      "Две спальни",
      "Большая кухня",
      "Система умный дом",
      "Теплые полы",
      "Панорамные окна"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-11.03.45_8f098dab.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/Screenshot_1-907x800.jpg"
    ]
  },
  {
    id: 6,
    title: "Модульный дом С-40",
    price: "8 349 000 ₸",
    area: "40 м²",
    length: "8 м",
    width: "5 м",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-11.44.30_3017c4db.jpg",
    description: "Премиальный модульный дом с спальней и санузлом. Максимум комфорта для семьи.",
    features: [
      "Спальни",
      "Санузел",
      "Просторная гостиная",
      "Кухня-столовая",
      "Система умный дом",
      "Панорамное остекление",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-11.44.30_3017c4db.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/unnamed-file.jpg"
    ]
  },
  {
    id: 7,
    title: "Модульный дом С-40-2",
    price: "8 611 000 ₸",
    area: "40 м²",
    length: "7 м",
    width: "6 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.04_0201213e.jpg",
    description: "Просторный модульный дом с двумя спальнями и большой гостиной. Идеален для семьи из 4 человек.",
    features: [
      "Две спальни",
      "Большая гостиная",
      "Кухня-столовая",
      "Теплые полы",
      "Умный дом",
      "Панорамные окна",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.04_0201213e.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.04_36ca3610.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.04_9774412d.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.04_b44729c1.jpgн",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.04_c7359c66.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.12.05_964e14d3.jpg"
    ]
  },
  {
    id: 8,
    title: "Модульный дом К-40",
    price: "8 866 000 ₸",
    area: "40 м²",
    length: "7 м",
    width: "6 м",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.22.27-1067x800.jpeg",
    description: "Современный модульный дом с двумя спальнями и двумя санузлами. Идеальное решение для комфортной жизни.",
    features: [
      "Две спальни",
      "Два санузла",
      "Просторная гостиная",
      "Кухня-столовая",
      "Система умный дом",
      "Панорамные окна",
      "Большая терраса"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.22.27-1067x800.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/40.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.24.07-1067x800.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.24.01-1067x800.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.22.36-1067x800.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.22.35-1067x800.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.22.34-1067x800.jpeg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-08-at-22.22.34-1-1067x800.jpeg"
    ]
  },
  {
    id: 9,
    title: "Модульный дом М-30-2",
    price: "9 142 000 ₸",
    area: "30 м²",
    length: "7,5 м",
    width: "5 м",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.48_7ef96ae6.jpg",
    description: "Премиальный модульный дом с тремя спальнями и двумя санузлами. Максимум пространства и комфорта для большой семьи.",
    features: [
      "Три спальни",
      "Два санузла",
      "Большая гостиная",
      "Кухня-столовая",
      "Система умный дом",
      "Панорамные окна",
      "Просторная терраса",
      "Гардеробная"
    ],
    gallery: [
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.48_7ef96ae6.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%9C-30-2-1104x800.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.46_6449f8fd.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.46_24582371.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.47_7457fe82.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.47_c819dbc1.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.47_e515a602.jpg",
      "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-12.25.46_5c9998ee.jpg"
    ]
  }
];