import { Project } from '../projectsSchema';

export const projects2012: Project[] = [
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
    description: "Дома из бруса в Алматы. Строительство дома из СИП панелей на 240 кв.м.",
    features: [
      "Площадь: 240 кв.м.",
      "Габариты: 10,4 х 10,7 м",
      "2 этажа",
      "Высота этажей: 2,9 м и 2,5 м"
    ],
    gallery: [
      "https://hotwell.kz/wp-content/uploads/2022/10/240.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/1.jpg",
      "https://hotwell.kz/wp-content/uploads/2022/10/2.jpg"
    ],
    typeId: 'premium',
    createdAt: new Date('2012-01-01')
  }
  // Добавьте остальные проекты из этой категории здесь
];