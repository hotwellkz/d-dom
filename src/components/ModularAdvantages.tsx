import React from 'react';
import { 
  Clock, 
  ThermometerSun, 
  Banknote, 
  Home, 
  Shield, 
  Truck,
  Wrench,
  Zap
} from 'lucide-react';

const advantages = [
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое Строительство',
    description: 'Установка модульного дома занимает всего 1-2 дня, а полная готовность к проживанию - 14 дней.'
  },
  {
    icon: <ThermometerSun className="h-12 w-12 text-primary-600" />,
    title: 'Всесезонность',
    description: 'Возможность установки в любое время года благодаря готовым модулям и быстрому монтажу.'
  },
  {
    icon: <Banknote className="h-12 w-12 text-primary-600" />,
    title: 'Экономичность',
    description: 'Фиксированная стоимость и отсутствие дополнительных расходов на строительство и отделку.'
  },
  {
    icon: <Truck className="h-12 w-12 text-primary-600" />,
    title: 'Мобильность',
    description: 'Возможность перемещения дома на новое место при необходимости без потери качества.'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Полная Готовность',
    description: 'Дом поставляется с полной внутренней отделкой, мебелью и всеми коммуникациями.'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Надежность',
    description: 'Высокое качество материалов и сборки, гарантия на конструкцию и отделку.'
  }
];

export default function ModularAdvantages() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Преимущества Модульных Домов
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Модульные дома сочетают в себе комфорт классического жилья и современные технологии строительства
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary-50 rounded-full">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Почему Выбирают Модульные Дома?
              </h3>
              <p className="text-secondary-600 mb-6">
                Модульные дома становятся все более популярным выбором благодаря своей практичности, скорости установки и современным технологиям строительства.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-secondary-600">
                  <Zap className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Экономия времени на строительстве до 70%</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <Home className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Готовность к проживанию сразу после установки</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <Shield className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Гарантия качества от производителя</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.07.57_6cc90613.jpg"
                alt="Модульный дом изнутри"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">1-2 дня</p>
                <p className="text-sm">установка дома</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}