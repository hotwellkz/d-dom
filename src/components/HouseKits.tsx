import React from 'react';
import { Home, Package, Truck, Wrench, ArrowRight, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface HouseKit {
  id: number;
  title: string;
  area: string;
  price: string;
  image: string;
  features: string[];
}

export const houseKits: HouseKit[] = [
  {
    id: 1,
    title: "Домкомплект А-61",
    area: "61 м²",
    price: "3 515 000 ₸",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/0001-1.jpg",
    features: [
      "СИП панели 163 мм",
      "Пиломатериалы",
      "Крепежные элементы",
      "Монтажная пена",
      "Проектная документация"
    ]
  },
  {
    id: 2,
    title: "Домкомплект И-58",
    area: "58 м²",
    price: "3 517 000 ₸",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/0002.jpg",
    features: [
      "СИП панели 163 мм",
      "Усиленные пиломатериалы",
      "Крепежные элементы",
      "Монтажная пена",
      "Проектная документация",
      "Техническое сопровождение"
    ]
  },
  {
    id: 3,
    title: "Домкомплект Ц-56",
    area: "56 м²",
    price: "3 860 000 ₸",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/003.jpg",
    features: [
      "СИП панели 163 мм",
      "Премиум пиломатериалы",
      "Усиленные крепежные элементы",
      "Монтажная пена",
      "Полная проектная документация",
      "Техническое сопровождение",
      "Шеф-монтаж"
    ]
  }
];

export default function HouseKits() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Готовые Домокомплекты</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Полные комплекты для строительства дома, произведенные на нашем заводе в Алматы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {houseKits.map((kit) => (
            <Link 
              key={kit.id} 
              to={`/house-kit/${kit.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
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
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{kit.title}</h3>
                <ul className="space-y-2 mb-6">
                  {kit.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-center text-secondary-600">
                      <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600 mb-4">{kit.price}</p>
                  <div className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
                    <Package className="h-5 w-5 mr-2" />
                    Подробнее
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Кнопка "Смотреть все" */}
        <div className="text-center mb-16">
          <Link
            to="/house-kits"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Смотреть все домокомплекты
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl p-8 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Преимущества наших домокомплектов
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Package className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-secondary-900">Полная Комплектация</h4>
                  <p className="text-secondary-600">Все необходимые материалы для строительства</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Truck className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-secondary-900">Доставка</h4>
                  <p className="text-secondary-600">Доставка по всему Казахстану</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Home className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-secondary-900">Готовые Проекты</h4>
                  <p className="text-secondary-600">Проверенные архитектурные решения</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Wrench className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-secondary-900">Техподдержка</h4>
                  <p className="text-secondary-600">Помощь на всех этапах строительства</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="bg-primary-50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-secondary-900 mb-4">
                Нужна консультация?
              </h4>
              <p className="text-secondary-600 mb-6">
                Наши специалисты помогут выбрать оптимальный домокомплект под ваши потребности и бюджет
              </p>
              <Link 
                to="/house-kits"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                Смотреть все домокомплекты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}