import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Banknote, ArrowRight } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';

const benefits = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Гарантия качества',
    description: 'Предоставляем гарантию на все выполненные работы и используемые материалы'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Строительство дома от 45 дней благодаря современным технологиям'
  },
  {
    icon: <Banknote className="h-12 w-12 text-primary-600" />,
    title: 'Доступные цены',
    description: 'Стоимость строительства от 75 000 тг/м² с учетом всех материалов'
  }
];

export default function BuildHouseAlmatyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Построить дом в Алматы под ключ - Цены на строительство 2024"
          description="Строительство домов в Алматы под ключ ⭐ СИП панели и модульные дома ⭐ Собственное производство ⭐ Гарантия качества ⭐ Строим от 45 дней ⭐ Выгодные цены от застройщика"
          keywords="построить дом в алматы, строительство домов алматы, дома под ключ алматы, сип дома алматы, модульные дома алматы, стоимость строительства дома"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Построить дом в Алматы под ключ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Строим современные, энергоэффективные дома из СИП панелей и модульные дома. Собственное производство в Алматы, гарантия качества, сжатые сроки строительства.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/calculator"
              className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Рассчитать стоимость
            </Link>
            <button
              onClick={() => {
                const phone = "77477434343";
                const message = "Здравствуйте! Я хочу построить дом в Алматы. Можно получить консультацию?";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary-50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Почему выбирают нас для строительства дома в Алматы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем полный цикл строительства: от проектирования до сдачи дома под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Собственное производство</h3>
                    <p className="text-gray-600">Производим СИП панели на современном оборудовании в Алматы</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Опытные специалисты</h3>
                    <p className="text-gray-600">Команда профессионалов с опытом более 10 лет</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Строительство под ключ</h3>
                    <p className="text-gray-600">От фундамента до внутренней отделки и коммуникаций</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
                alt="Строительство домов в Алматы"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Calculator Steps Section */}
        <HomeCalculatorSteps />

        {/* Our Projects Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наши проекты домов в Алматы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовые проекты домов с фиксированной стоимостью и сроками строительства
            </p>
          </div>
          <Projects />
        </div>

        {/* Our Works Section */}
        <OurWorks />

        {/* Modular Homes Section */}
        <ModularHomes />

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы построить дом своей мечты?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома в Алматы
              </p>
              <button
                onClick={() => {
                  const phone = "77477434343";
                  const message = "Здравствуйте! Я хочу построить дом в Алматы. Можно получить консультацию?";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg"
                alt="Построить дом в Алматы"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">построенных домов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}