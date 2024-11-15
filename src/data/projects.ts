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
    location: "Талгар, Алматинская область",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg",
    category: "СИП дом",
    description: "Современный дом из СИП панелей с улучшенной теплоизоляцией и энергоэффективностью. Идеально подходит для климата Казахстана. Дом построен с использованием высококачественных СИП панелей собственного производства.",
    features: [
      "Усиленная теплоизоляция",
      "Энергоэффективная конструкция",
      "Теплые полы",
      "Современная вентиляция",
      "Умный дом",
      "Гараж",
      "Терраса",
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
    location: "Капшагай, Алматинская область",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/A-119.jpg",
    category: "СИП дом",
    description: "Готовый модульный дом с современной планировкой и качественной отделкой. Быстрое возведение и доступная цена. Идеальное решение для тех, кто ценит комфорт и практичность.",
    features: [
      "Быстрая сборка",
      "Готовая отделка",
      "Современные коммуникации",
      "Экологичные материалы",
      "Сейсмоустойчивость",
      "Утепленный фасад",
      "Кондиционирование",
      "Встроенная мебель"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/A-119.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/A-119-002.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/09/A-119-002-1.jpg.webp"
    ]
  },
  {
    id: 3,
    title: "Проект дома А-153",
    price: "11 859 000 ₸",
    area: "153 м²",
    length: "8,75 м",
    width: "8,75 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/Modify-The-House-Facade-Finish-Add-More-Plants-A.png",
    category: "СИП дом",
    description: "Просторный двухэтажный дом для большой семьи. Современная планировка, высокое качество материалов и премиальная отделка.",
    features: [
      "Премиум отделка",
      "Просторные комнаты",
      "Панорамные окна",
      "Теплый гараж",
      "Система умный дом",
      "Теплые полы",
      "Кондиционирование",
      "Терраса"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/Modify-The-House-Facade-Finish-Add-More-Plants-A.png",
      "https://hotwell.kz/wp-content/uploads/2022/10/f0f1cb3f05f298cb7a3d32f2b9fea4dce2b5ca7328bdf1f66baea60990.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/931979850c9a02215332b25e0faf7d86c72547c7ed8e0cb8bec7e4a63a.jpg.webp"
    ]
  },
  {
    id: 4,
    title: "Проект Б-173",
    price: "14 666 000 ₸",
    area: "173 м²",
    length: "10 м",
    width: "9,6 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/173.jpeg.webp",
    category: "Наши работы",
    description: "Просторный двухэтажный дом премиум-класса с современным дизайном и продуманной планировкой.",
    features: [
      "Премиум отделка",
      "Панорамные окна",
      "Теплый гараж",
      "Система умный дом",
      "Теплые полы",
      "Кондиционирование",
      "Терраса",
      "Ландшафтный дизайн"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/173.jpeg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/1-9.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/3-9.jpg.webp"
    ]
  },
  {
    id: 5,
    title: "Проект Б-158",
    price: "11 921 000 ₸",
    area: "158 м²",
    length: "7,4 м",
    width: "10 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/001-158.jpeg",
    category: "Наши работы",
    description: "Современный двухэтажный дом с просторной террасой и панорамными окнами.",
    features: [
      "Современный дизайн",
      "Просторная терраса",
      "Панорамные окна",
      "Теплые полы",
      "Умный дом",
      "Кондиционирование",
      "Гараж",
      "Зона барбекю"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/001-158.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/Screenshot_1-9.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/13-17.jpg.webp"
    ]
  },
  {
    id: 6,
    title: "Проект Б-193",
    price: "17 022 000 ₸",
    area: "193 м²",
    length: "11,8 м",
    width: "10 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/014.jpeg",
    category: "Наши работы",
    description: "Комфортный двухэтажный дом с оптимальной планировкой и современным дизайном.",
    features: [
      "Оптимальная планировка",
      "Современный дизайн",
      "Теплые полы",
      "Кондиционирование",
      "Гараж",
      "Терраса",
      "Качественная отделка",
      "Умный дом"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/014.jpeg",
      "https://hotwell.kz/wp-content/uploads/2022/10/8-2.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/10/11-1.jpg.webp"
    ]
  },
  {
    id: 7,
    title: "Проект дома “Б-113”",
    price: "8 351 000 ₸",
    area: "113 м²",
    length: "7,5 м",
    width: "8,4 м",
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/113-L-1.jpg",
    category: "СИП дом",
    description: "Элегантный двухэтажный дом и просторной террасой. Современная архитектура и функциональная планировка.",
    features: [
      "Встроенный гараж",
      "Просторная терраса",
      "Высокие потолки",
      "Панорамное остекление",
      "Умный дом",
      "Теплые полы",
      "Кондиционирование",
      "Ландшафтный дизайн"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/113-L-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/Plan-2-1536x1152-1.jpg.webp"
    ]
  },
  {
    id: 8,
    title: "Проект дома “Ц-56”",
    price: "5 998 000 ₸",
    area: "56 м²",
    length: "6 м",
    width: "9 м",
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/sip-doma.jpg",
    category: "СИП дом",
    description: "Одноэтажный дом с современным дизайном и удобной планировкой. Идеально подходит для семьи из 4-5 человек.",
    features: [
      "Одноэтажная планировка",
      "Большая кухня-гостиная",
      "Теплый гараж",
      "Система умный дом",
      "Теплые полы",
      "Высокие потолки",
      "Панорамные окна",
      "Зона отдыха"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/sip-doma.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/004-5.jpg.webp"
    ]
  },
  {
    id: 9,
    title: "Проект дома “Б-157”",
    price: "11 215 000 ₸",
    area: "157 м²",
    length: "8,2 м",
    width: "9,9 м",
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    garages: 0,
    location: "Алматы",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg",
    category: "СИП дом",
    description: "Просторный двухэтажный дом премиум-класса. Идеальное решение для большой семьи.",
    features: [
      "Два гаража",
      "Кабинет",
      "Игровая комната",
      "Просторная терраса",
      "Система умный дом",
      "Теплые полы",
      "Кондиционирование",
      "Панорамные окна"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/09/157-002.jpg.webp",
      "https://hotwell.kz/wp-content/uploads/2022/09/157-001.jpg.webp"
    ]
  }
];