import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ModularNewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  category: string;
}

const modularNews: ModularNewsItem[] = [
  {
    id: 1,
    title: "Новая линейка модульных домов 2024",
    date: "15 марта 2024",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg",
    summary: "Представляем новую серию модульных домов с улучшенной планировкой и премиальной отделкой.",
    category: "Новинки"
  },
  {
    id: 2,
    title: "Запуск программы Trade-in для модульных домов",
    date: "10 марта 2024",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-10-at-18.50.09-1067x800.jpeg",
    summary: "Теперь вы можете обменять свой старый дом на новый модульный дом с доплатой.",
    category: "Акции"
  },
  {
    id: 3,
    title: "Модульные дома для загородных участков",
    date: "5 марта 2024",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.02.43_09b7364a.jpg",
    summary: "Специальное предложение: модульный дом с участком в пригороде Алматы.",
    category: "Предложения"
  }
];

export default function ModularNews() {
  const navigate = useNavigate();

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Новости и Акции</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Актуальные новости и специальные предложения по модульным домам
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modularNews.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => handleNewsClick(item.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-secondary-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {item.summary}
                </p>
                
                <span className="inline-flex items-center text-primary-600 group-hover:text-primary-700 font-medium transition-colors">
                  Читать далее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            Все новости
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}