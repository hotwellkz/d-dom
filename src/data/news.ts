export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  category: string;
}

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Новая линейка модульных домов 2024",
    date: "15 марта 2024",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg",
    summary: "Представляем новую серию модульных домов с улучшенной планировкой и премиальной отделкой. Инновационные решения для комфортной жизни.",
    category: "Новинки"
  },
  {
    id: 2,
    title: "Запуск программы Trade-in для модульных домов",
    date: "10 марта 2024",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-10-at-18.50.09-1067x800.jpeg",
    summary: "Теперь вы можете обменять свой старый дом на новый модульный дом с доплатой. Уникальное предложение для наших клиентов.",
    category: "Акции"
  },
  {
    id: 3,
    title: "Модульные дома для загородных участков",
    date: "5 марта 2024",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.02.43_09b7364a.jpg",
    summary: "Специальное предложение: модульный дом с участком в пригороде Алматы. Готовое решение для загородной жизни.",
    category: "Предложения"
  },
  {
    id: 4,
    title: "Открытие нового производства СИП панелей в Алматы",
    date: "15 марта 2024",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
    summary: "Мы расширяем производственные мощности! Новый завод позволит увеличить объемы производства СИП панелей на 200%.",
    category: "Производство"
  },
  {
    id: 5,
    title: "Запуск программы рассрочки на строительство домов",
    date: "10 марта 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    summary: "Теперь построить дом мечты стало еще доступнее! Рассрочка до 12 месяцев без переплат.",
    category: "Финансы"
  },
  {
    id: 6,
    title: "Новая линейка энергоэффективных домов",
    date: "5 марта 2024",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?auto=format&fit=crop&q=80",
    summary: "Представляем новую серию домов с улучшенной теплоизоляцией и солнечными панелями.",
    category: "Проекты"
  }
];