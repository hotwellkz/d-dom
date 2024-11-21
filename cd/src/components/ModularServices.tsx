import React from 'react';
import { Truck, Clock, Wrench, Shield, Home, Settings } from 'lucide-react';

const services = [
  {
    icon: <Home className="h-12 w-12 text-primary-600" />,
    title: 'Производство модульных домов',
    description: 'Собственное производство модульных домов с использованием современных материалов и технологий.'
  },
  {
    icon: <Truck className="h-12 w-12 text-primary-600" />,
    title: 'Доставка и монтаж',
    description: 'Профессиональная доставка и установка модульного дома на вашем участке.'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрые сроки',
    description: 'Изготовление модульного дома за 30 дней, монтаж за 1-2 дня.'
  },
  {
    icon: <Settings className="h-12 w-12 text-primary-600" />,
    title: 'Отделка под ключ',
    description: 'Полная внутренняя отделка, установка сантехники и электрики.'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Подключение коммуникаций',
    description: 'Подведение и подключение всех необходимых коммуникаций.'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Гарантийное обслуживание',
    description: 'Гарантия на конструкцию и отделку. Техническая поддержка.'
  }
];

export default function ModularServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Наши Услуги</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Полный комплекс услуг по производству, доставке и установке модульных домов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary-50 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Готовы заказать модульный дом?
              </h3>
              <p className="text-secondary-600 mb-6">
                Свяжитесь с нами для получения подробной консультации и расчета стоимости вашего будущего дома.
              </p>
              <button 
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Я хотел бы получить консультацию по модульным домам.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Получить консультацию
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-10-at-18.50.09-1067x800.jpeg"
                alt="Модульный дом"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">14 дней</p>
                <p className="text-sm">срок установки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}