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
    title: "Проект дома Б-240",
    price: "21 429 000 ₸",
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
    category: "Наши работы",
    description: "Роскошный двухэтажный дом с современным дизайном и премиальной отделкой. Идеальное решение для тех, кто ценит комфорт и стиль.",
    features: [
      "Пять просторных спален",
      "Два санузла",
      "Теплые полы",
      "Большая терраса"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/240.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/15.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/10.jpg"
    ]
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
  }
];