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
    location: "Талгар, Алматинская область",
    coordinates: [43.3023, 77.2387], // Add coordinates for Talgar
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
    coordinates: [43.8839, 77.0644], // Add coordinates for Kapshagay
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
  // ... Update other projects with coordinates
];