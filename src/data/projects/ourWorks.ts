import { Project } from '../projectsSchema';

export const ourWorks: Project[] = [
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
    description: "Современный двухэтажный дом с продуманной планировкой и качественной отделкой.",
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
    ],
    typeId: 'premium',
    createdAt: new Date('2015-01-01')
  }
  // Добавьте остальные проекты из этой категории здесь
];