import React from 'react';
import { Package, BadgeCheck, Ruler, Truck, ArrowRight, Shield, Zap, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sipPanels } from '../data/sipPanels';

const benefits = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Высокое Качество',
    description: 'Сертифицированные материалы и строгий контроль производства'
  },
  {
    icon: <Zap className="h-12 w-12 text-primary-600" />,
    title: 'Энергоэффективность',
    description: 'Отличные показатели теплоизоляции и энергосбережения'
  },
  {
    icon: <Timer className="h-12 w-12 text-primary-600" />,
    title: 'Быстрый Монтаж',
    description: 'Легкость и скорость сборки конструкций'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Надежность',
    description: 'Высокая прочность и долговечность материалов'
  }
];

export default function SipPanels() {
  return (
    <section id="sip-panels" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">СИП Панели от Производителя</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Производим и продаем высококачественные СИП панели по выгодным ценам с доставкой по всему Казахстану
          </p>
        </div>

        {/* Преимущества */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">{benefit.title}</h3>
              <p className="text-secondary-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Каталог панелей */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sipPanels.map((panel) => (
            <Link 
              key={panel.id} 
              to={`/sip-panel/${panel.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-secondary-200 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="aspect-video relative overflow-hidden">
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
                <h3 className="text-xl font-bold text-secondary-900 mb-4">{panel.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-secondary-600">
                    <Ruler className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Размеры: {panel.width} × {panel.height}</span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <Package className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Состав: {panel.composition}</span>
                  </div>
                  <div className="flex items-center text-secondary-600">
                    <Ruler className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Площадь: {(parseInt(panel.width) * parseInt(panel.height)) / 1000000} м²</span>
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

        {/* Кнопка "Смотреть все" */}
        <div className="text-center mb-16">
          <Link
            to="/sip-panels"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Смотреть все СИП панели
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Информация о доставке */}
        <div className="bg-secondary-50 rounded-xl p-8">
          <div className="flex items-center gap-4 mb-4">
            <Truck className="h-8 w-8 text-primary-600" />
            <h3 className="text-xl font-bold text-secondary-900">Доставка по всему Казахстану</h3>
          </div>
          <p className="text-secondary-600 mb-4">
            Осуществляем доставку СИП панелей по всей территории Казахстана. Для крупных заказов действуют специальные условия доставки.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-secondary-600">
              <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
              <span>Бесплатная доставка по Алматы от 100 м²</span>
            </li>
            <li className="flex items-center text-secondary-600">
              <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
              <span>Доставка в регионы от 3 дней</span>
            </li>
            <li className="flex items-center text-secondary-600">
              <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
              <span>Возможность самовывоза со склада</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}