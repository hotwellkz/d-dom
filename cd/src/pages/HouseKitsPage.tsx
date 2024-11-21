import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Package, BadgeCheck, Search, Ruler, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { houseKits } from '../components/HouseKits';

export default function HouseKitsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredKits = houseKits.filter(kit => 
    kit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kit.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Домокомплекты из СИП панелей - Готовые решения"
          description="Готовые домокомплекты из СИП панелей от производителя. ✓ Полная комплектация ✓ Доставка по Казахстану ✓ Техническая поддержка ✓ Выгодные цены"
          keywords="домокомплекты, СИП домокомплект, купить домокомплект, цены на домокомплекты, строительство дома, готовые решения"
          ogImage={houseKits[0]?.image}
          h1="Домокомплекты из СИП панелей"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Выберите готовый домокомплект для быстрого и качественного строительства вашего дома
        </p>

        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск по названию или характеристикам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-600 focus:border-primary-600 sm:text-sm"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredKits.map((kit) => (
            <Link 
              key={kit.id}
              to={`/house-kit/${kit.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <img 
                  src={kit.image}
                  alt={kit.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white text-lg font-semibold">{kit.area}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{kit.title}</h3>
                <ul className="space-y-2 mb-6">
                  {kit.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-4">{kit.price}</p>
                  <div className="w-full bg-primary-600 text-white py-3 rounded-lg group-hover:bg-primary-700 transition-colors flex items-center justify-center">
                    <Package className="h-5 w-5 mr-2" />
                    Подробнее
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredKits.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Преимущества наших домокомплектов
              </h2>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Package className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Полная Комплектация</h4>
                    <p className="text-gray-600">Все необходимые материалы для строительства</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Ruler className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Точные Размеры</h4>
                    <p className="text-gray-600">Все элементы изготовлены с высокой точностью</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Home className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Готовые Проекты</h4>
                    <p className="text-gray-600">Проверенные архитектурные решения</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="bg-primary-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Нужна консультация?
                </h4>
                <p className="text-gray-600 mb-6">
                  Наши специалисты помогут выбрать оптимальный домокомплект под ваши потребности и бюджет
                </p>
                <button 
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  onClick={() => {
                    const phone = "77772282323";
                    const message = "Здравствуйте, я хотел бы получить консультацию по домокомплектам.";
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                >
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}