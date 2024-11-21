import React from 'react';
import { Home, Factory, Truck, Building2 } from 'lucide-react';

const services = [
  {
    icon: <Factory className="h-8 w-8 text-primary-600" />,
    title: 'Производство СИП панелей',
    description: 'Собственное производство высококачественных СИП панелей в Алматы с доставкой по всему Казахстану.'
  },
  {
    icon: <Home className="h-8 w-8 text-primary-600" />,
    title: 'Строительство домов',
    description: 'Полный цикл строительства домов из СИП панелей с гарантией качества.'
  },
  {
    icon: <Truck className="h-8 w-8 text-primary-600" />,
    title: 'Домокомплекты',
    description: 'Продажа домокомплектов из СИП панелей с доставкой и возможностью самостоятельной сборки.'
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary-600" />,
    title: 'Модульные дома под ключ',
    description: 'Производство и монтаж современных модульных домов с полной отделкой и коммуникациями.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Наши Услуги</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Полный спектр услуг от производства СИП панелей до строительства домов под ключ
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">{service.title}</h3>
              <p className="text-secondary-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}