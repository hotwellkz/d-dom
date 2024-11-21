// Update the Project interface to include coordinates
export interface Project {
  id: number;
  title: string;
  price: string;
  area: string;
  length: string;
  width: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  location: string;
  coordinates?: [number, number]; // Add optional coordinates
  image: string;
  category: string;
  description: string;
  features: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Проект дома А-100",
    price: "7 780 000 ₸",
    area: "100 м²",
    length: "7,5 м",
    width: "6,6 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Проект СИП дома",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg",
    category: "СИП дом",
    description: "Современный дом из СИП панелей с улучшенной теплоизоляцией и энергоэффективностью. Идеально подходит для климата Казахстана. Дом с использованием высококачественных СИП панелей заводского производства.",
    features: [
      "Энергоэффективная конструкция",
      "Теплые полы",
      "Современная вентиляция",
      "Готовый проект"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/001-1267x1536-1.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/09/002-1267x1536-1.jpg.webp"
    ]
  },
  {
    id: 2,
    title: "Проект дома А-119",
    price: "8 795 000 ₸",
    area: "119 м²",
    length: "7,5 м",
    width: "7,9 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Проект СИП дома",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/A-119.jpg",
    category: "СИП дом",
    description: "Проект дома А-119 — это двухэтажный дом площадью 119 м², идеально подходящий для семьи. Компактные размеры (7,5 м х 7,9 м) позволяют разместить дом на небольшом участке. Внутри предусмотрены 3 спальни, 2 санузла и уютные жилые зоны. Практичный и функциональный выбор для комфортного проживания!",
    features: [
      "Быстрая сборка",
      "Современные коммуникации",
      "Экологичные материалы",
      "Сейсмоустойчивость"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/A-119.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/A-119-002.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/09/A-119-002-1.jpg.webp"
    ]
  },
  {
    id: 3,
    title: "Проект дома Б-157",
    price: "11 215 000 ₸",
    area: "157 м²",
    length: "10 м",
    width: "8,3 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Проект СИП дома",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg",
    category: "СИП дом",
    description: "Просторный двухэтажный дом для большой семьи. Современная планировка и качественные материалы обеспечивают максимальный комфорт проживания.",
    features: [
      "Просторная гостиная",
      "Четыре спальни",
      "Теплый пол"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/157-002.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/09/157-001.jpg.webp"
    ]
  },
  {
    id: 4,
    title: "Проект дома А-153",
    price: "11 859 000 ₸",
    area: "153 м²",
    length: "8,75 м",
    width: "8,75 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Проект СИП дома",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/Modify-The-House-Facade-Finish-Add-More-Plants-A.png",
    category: "СИП дом",
    description: "Дом с оптимальной планировкой. Идеально подходит для большой семьи.",
    features: [
      "Эргономичная планировка",
      "Светлые комнаты",
      "Теплые полы",
      "Мансардный",
      "Экономичное отопление"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/Modify-The-House-Facade-Finish-Add-More-Plants-A.png",
      "https://hotwell.kz/wp-content/uploads/2022/10/f0f1cb3f05f298cb7a3d32f2b9fea4dce2b5ca7328bdf1f66baea60990.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/931979850c9a02215332b25e0faf7d86c72547c7ed8e0cb8bec7e4a63a.jpg.webp"
    ]
  },
  {
    id: 5,
    title: "Проект дома Б-113",
    price: "8 351 000 ₸",
    area: "113 м²",
    length: "8,5 м",
    width: "7,5 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Проект СИП дома",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/113-L-1.jpg",
    category: "СИП дом",
    description: "Премиальный двухэтажный дом с просторными комнатами и современным дизайном. Идеальное решение для семьи.",
    features: [
      "Три спальни",
      "Два санузла",
      "Теплые полы"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/113-L-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/Plan-2-1536x1152-1.jpg.webp"
    ]
  },
  {
    id: 6,
    title: "Проект дома К-180",
    price: "12 108 000 ₸",
    area: "180 м²",
    length: "9 м",
    width: "10 м",
    floors: 2,
    bedrooms: 5,
    bathrooms: 2,
    garages: 0,
    location: "Проект СИП дома",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/002-1024x723-1.jpg",
    category: "СИП дом",
    description: "Современный двухэтажный дом с удобной планировкой. Оптимальное сочетание комфорта и функциональности.",
    features: [
      "Просторная гостиная",
      "Пять спален",
      "Теплые полы"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/002-1024x723-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/K-180-01.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/09/K-180-02.jpg.webp"
    ]
  },
  {
    id: 7,
    title: "Проект дома Б-193",
    price: "17 022 000 ₸",
    area: "193 м²",
    length: "11,8 м",
    width: "10 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область 2015 г. п.",
    coordinates: [43.288955, 77.037632],
    image: "https://hotwell.kz/wp-content/uploads/2022/10/014.jpeg",
    category: "Наши работы",
    description: "Современный двухэтажный дом с продуманной планировкой и качественной отделкой. Идеальное сочетание комфорта и функциональности.",
    features: [
      "Четыре спальни",
      "Два санузла",
      "Теплые полы",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/014.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-1.jpg.webp"
    ]
  },
  {
    id: 8,
    title: "Проект дома Б-173",
    price: "14 676 000 ₸",
    area: "173 м²",
    length: "9,6 м",
    width: "10 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область 2014 г. п.",
    coordinates: [43.290201, 77.041585],
    image: "https://hotwell.kz/wp-content/uploads/2022/10/0688.jpeg",
    category: "Наши работы",
    description: "Комфортный двухэтажный дом с современной планировкой и качественной отделкой. Оптимальное решение для семьи из 4-5 человек.",
    features: [
      "Три спальни",
      "Два санузла",
      "Теплые полы",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/0688.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-10.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-7.jpg.webp"
    ]
  },
  {
    id: 9,
    title: "Проект дома Б-173",
    price: "14 666 000 ₸",
    area: "173 м²",
    length: "10 м",
    width: "9,6 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 1,
    location: "Тастак, Алматы 2013 г. п.",
    coordinates: [43.245385, 76.886437],
    image: "https://hotwell.kz/wp-content/uploads/2022/10/173.jpeg.webp",
    category: "Наши работы",
    description: "Просторный двухэтажный дом с современным дизайном и качественной отделкой. Идеальное решение для большой семьи.",
    features: [
      "Четыре спальни",
      "Два санузла",
      "Теплые полы",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/173.jpeg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-9.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-9.jpg.webp"
    ]
  },
  {
    id: 10,
    title: "Проект дома Б-158",
    price: "11 921 000 ₸",
    area: "190 м²",
    length: "10,1 м",
    width: "7,4 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область",
    coordinates: [43.245385, 76.886437],
    image: "https://hotwell.kz/wp-content/uploads/2022/10/001-158.jpeg",
    category: "Наши работы",
    description: "Премиальный двухэтажный дом с просторными комнатами и современным дизайном. Идеальное решение для семьи.",
    features: [
      "Четыре спален",
      "Два санузла",
      "Теплые полы"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/001-158.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/Screenshot_1-9.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14-16.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-21.jpg.webp"
    ]
  },
  {
    id: 11,
    title: "Проект дома К-148",
    price: "14 679 000 ₸",
    area: "148 м²",
    length: "7,8 м",
    width: "9,5 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область",
    coordinates: [43.245385, 76.886437],
    image: "https://hotwell.kz/wp-content/uploads/2022/10/002-7.jpeg",
    category: "Наши работы",
    description: "Комфортный дом с современной планировкой и качественной отделкой. Оптимальное решение для семьи из 4-5 человек.",
    features: [
      "Четыре спальни",
      "Два санузла",
      "Теплые полы",
      "Балкон"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/002-7.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-15.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-16.jpg.webp"
    ]
  },
  {
    id: 12,
    title: "Проект дома Б-240",
    price: "21 429 197 ₸",
    area: "240 м²",
    length: "10,4 м",
    width: "10,7 м",
    floors: 2,
    bedrooms: 5,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область 2012 г. п.",
    coordinates: [43.289546, 77.036682],
    image: "https://hotwell.kz/wp-content/uploads/2022/10/240.jpg",
    category: "Объекты 2012г",
    description: "Дома из бруса в Алматы. Строительство дома из СИП панелей на 240 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году в Алматинской области поселок Бесагаш. Срок строительства составил 1,5 месеца. На первом этаже были смонтированы канализация, водопровод, теплый пол, второй этаж батареи. Спустя пол года сдачи объекта в черновую наша компания приступила к отделке данного дома под ключ.",
    features: [
      "Площадь: 240 кв.м.",
      "Габариты: 10,4 х 10,7 м",
      "2 этажа",
      "Высота этажей: 2,9 м и 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/240.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/4-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/6-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/7-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/9-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/12.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/16.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/17.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/18.jpg"
    ]
  },
  {
    id: 13,
    title: "Проект дома Б-205",
    price: "18 304 106 ₸",
    area: "205 м²",
    length: "10,6 м",
    width: "10,6 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область 2012 г. п.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/205.jpeg",
    category: "Объекты 2012г",
    description: "Дом из ЛСТК в Алматы. Строительство дома из СИП панелей на 205 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году в Алматинской области поселок Бесагаш. Срок строительства составил 1,5 месеца. На первом этаже были смонтированы канализация, водопровод, теплый пол, второй этаж батареи.",
    features: [
      "Площадь: 205 кв.м.",
      "Габариты: 10,6 х 10,6 м",
      "2 этажа",
      "Высота этажей: 2,8 м и 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/205.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/4-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/6-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/7-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/9-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/12-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/16-1.jpg"
    ]
  },
  {
    id: 14,
    title: "Проект дома А-100",
    price: "7 780 300 ₸",
    area: "100 м²",
    length: "7,5 м",
    width: "6,6 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 1,
    garages: 0,
    location: "Абай, Алматинская область 2012 г. п.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/100.jpg",
    category: "Объекты 2012г",
    description: "Бюджетные дома в Алматы. Строительство дома из СИП панелей на 100 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году в Алматинской области поселок Абай. Срок строительства в черновую составил 1 месяц. Сразу после черновой отделки наша компания приступила к отделки под ключ. Отделка под ключ составила 1,5 мес. В общей сложности наша компания построила данный объект под ключ за 2,5 мес.",
    features: [
      "Площадь: 100 кв.м.",
      "Габариты: 7,5 х 6,6 м",
      "2 этажа",
      "Высота этажей: 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/100.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/4-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/6-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/7-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/9-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/12-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/16-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/17-1.jpg"
    ]
  },
  {
    id: 15,
    title: "Проект дома А-100",
    price: "7 780 300 ₸",
    area: "100 м²",
    length: "7,5 м",
    width: "6,6 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 1,
    garages: 0,
    location: "Алматы, ниже Рыскулова 2012 г. п.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/a100.jpg",
    category: "Объекты 2012г",
    description: "СИП дама. Строительство дома из СИП панелей на 100 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году в городе Алматы Ниже Рыскулова. Срок строительства в черновую составил 18 дней.",
    features: [
      "Площадь: 100 кв.м.",
      "Габариты: 7,5 х 6,6 м",
      "2 этажа",
      "Высота этажей: 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/a100.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/4-6.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-6.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/6-6.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/7-6.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-6.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/9-6.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/12-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15-5.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/17-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/18-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/19-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/21.jpg"
    ]
  },
  {
    id: 16,
    title: "Проект дома А-100",
    price: "7 780 300 ₸",
    area: "100 м²",
    length: "7,5 м",
    width: "6,6 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 1,
    garages: 0,
    location: "Талгарские дачи, Талгарский район 2012 г. п.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/044-2.jpeg",
    category: "Объекты 2012г",
    description: "Современное строительство в Алматы. Строительство дома из СИП панелей на 100 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году в Талгарской области на талгарских Дачах. Данный объект наша компания строила под ключ. Срок строительства под ключ составил 2 месяца.",
    features: [
      "Площадь: 100 кв.м.",
      "Габариты: 7,5 х 6,6 м",
      "2 этажа",
      "Высота этажей: 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/044-2.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/037-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/036-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/035-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/034-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/028-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/027-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/024-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/020-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/019-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/014-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/013-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/012-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/006-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/003-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/002-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/001-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/066.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/054-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/058-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/052-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/005-4.jpg"
    ]
  },
  {
    id: 17,
    title: "Проект дома У-66",
    price: "6 732 597 ₸",
    area: "66 м²",
    length: "5 м",
    width: "6,6 м",
    floors: 2,
    bedrooms: 2,
    bathrooms: 1,
    garages: 0,
    location: "Узынагаш, Алматинская область 2012 г. п.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/ICVFYVSYaICU.jpeg",
    category: "Объекты 2012г",
    description: "Как построить дом по пенсионке в Алматы. Строительство дома из СИП панелей на 66 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году Алматинской области пос. Узынагаш. Рядом с этим домом на соседнем участке был построен еще один дом на 100м2.",
    features: [
      "Площадь: 66 кв.м.",
      "Габариты: 5 х 6,6 м",
      "2 этажа",
      "Высота этажей: 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/ICVFYVSYaICU.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15-11.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14-11.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-11.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/12-13.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-14.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10-16.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/9-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/7-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/6-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/4-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-17.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2-17.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-17.jpg"
    ]
  },
  {
    id: 18,
    title: "Проект дома Б-174",
    price: "15 345 220 ₸",
    area: "174 м²",
    length: "9,1 м",
    width: "9,4 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Бесагаш, Алматинская область 2012 г. п.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/aSasaSsaSASas.jpeg",
    category: "Объекты 2012г",
    description: "Бригада строителей строительство домов. Строительство дома из СИП панелей на 174 кв.м. Данный дом был построен компанией HotWell.KZ в 2012 году Алматинской области пос. Бесагаш.",
    features: [
      "Площадь: 173 кв.м.",
      "Габариты: 9,1 х 9,4 м",
      "2 этажа",
      "Высота этажей: 2,8 м и 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/aSasaSsaSASas.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/22.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/21-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/20-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/19-2.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/18-3.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/17-4.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15-12.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/14-12.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-12.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/12-14.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-15.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10-17.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/9-19.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-19.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/7-19.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/6-19.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/5-19.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/4-19.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2-18.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-18.jpg"
    ]
  }
];