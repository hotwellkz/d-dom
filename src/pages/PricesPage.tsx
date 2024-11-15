import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Package, Home, Building2 } from 'lucide-react';

const priceCategories = [
  {
    title: "СИП Панели",
    description: "Производство и продажа высококачественных СИП панелей различных размеров",
    icon: <Package className="h-12 w-12 text-primary-600" />,
    link: "/sip-panels",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2022/08/001.jpg",
    price: "от 8 894 ₸/м²"
  },
  {
    title: "Домокомплекты",
    description: "Готовые комплекты для строительства домов с полной комплектацией",
    icon: <Building2 className="h-12 w-12 text-primary-600" />,
    link: "/house-kits",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2022/04/003-1536x811.jpg",
    price: "от 3 515 000 ₸"
  },
  {
    title: "Модульные Дома",
    description: "Современные модульные дома под ключ с быстрой установкой",
    icon: <Home className="h-12 w-12 text-primary-600" />,
    link: "/modular-homes",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg",
    price: "от 4 471 000 ₸"
  }
];

export default function PricesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Цены на СИП панели, домокомплекты и модульные дома"
          description="Актуальные цены на СИП панели, домокомплекты и модульные дома от производителя. ✓ Выгодные цены ✓ Высокое качество ✓ Быстрые сроки"
          keywords="цены на СИП панели, стоимость домокомплекта, цены на модульные дома, строительство домов цены"
          ogImage={priceCategories[0].image}
          h1="Цены на Продукцию и Услуги"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Выберите интересующую вас категорию для получения подробной информации о ценах
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {priceCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-lg font-semibold">{category.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-4">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                    Подробнее о ценах →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Нужна консультация по ценам?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Наши специалисты помогут подобрать оптимальное решение под ваш бюджет и ответят на все вопросы
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                const phone = "77477434343";
                const message = "Здравствуйте! Я хотел бы получить консультацию по ценам.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}