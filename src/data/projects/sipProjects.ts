import { Project } from '../projectsSchema';

export const sipProjects: Project[] = [
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
    description: "Современный дом из СИП панелей с улучшенной теплоизоляцией и энергоэффективностью. Идеально подходит для климата Казахстана.",
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
    ],
    typeId: 'economy',
    createdAt: new Date('2024-01-01')
  }
  // Добавьте остальные проекты из этой категории здесь
];