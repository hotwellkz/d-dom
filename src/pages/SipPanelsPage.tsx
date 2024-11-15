import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Package, BadgeCheck, Ruler, ThermometerSun, Truck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sipPanels } from '../data/sipPanels';

export default function SipPanelsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(sipPanels.map(panel => panel.category))];

  const filteredPanels = sipPanels.filter(panel => {
    const matchesSearch = panel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      panel.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || panel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="СИП панели от производителя - Цены и характеристики"
          description="Производство и продажа СИП панелей в Казахстане. ✓ Высокое качество ✓ Доступные цены ✓ Быстрая доставка ✓ Сертифицированная продукция"
          keywords="СИП панели от производителя, производство СИП панелей, купить СИП панели, цены на СИП панели, характеристики СИП панелей, строительные материалы"
          ogImage={sipPanels[0]?.image}
          h1="СИП Панели от Производителя"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Производим и продаем высококачественные СИП панели по выгодным ценам с доставкой по всему Казахстану
        </p>

        <div className="mb-12">
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-600 focus:border-primary-600 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'Все' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPanels.map((panel) => (
            <Link 
              key={panel.id}
              to={`/sip-panel/${panel.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-video">
                <img 
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      {panel.thickness}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{panel.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Размеры: {panel.width} × {panel.height}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Package className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Состав: {panel.composition}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ThermometerSun className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Теплосопротивление: {panel.thermalResistance}</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-4">{panel.price} ₸/м²</p>
                  <div className="w-full bg-primary-600 text-white py-3 rounded-lg group-hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                    <Package className="h-5 w-5" />
                    Подробнее
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPanels.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Truck className="h-8 w-8 text-primary-600" />
            <h3 className="text-xl font-bold text-gray-900">Доставка по всему Казахстану</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Осуществляем доставку СИП панелей по всей территории Казахстана. Для крупных заказов действуют специальные условия доставки.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
              <span>Бесплатная доставка по Алматы от 100 м²</span>
            </li>
            <li className="flex items-center text-gray-600">
              <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
              <span>Доставка в регионы от 3 дней</span>
            </li>
            <li className="flex items-center text-gray-600">
              <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
              <span>Возможность самовывоза со склада</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}