import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, ArrowRight, Plus, Minus, Package, Wrench } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Надежность',
    description: 'Прочная конструкция с использованием качественных материалов'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Возведение дома за 30-45 дней благодаря готовым элементам'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Экономичность',
    description: 'Доступная стоимость строительства и низкие эксплуатационные расходы'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Простой монтаж',
    description: 'Технологичность сборки и минимум мокрых процессов'
  }
];

const faqItems = [
  {
    question: 'Что такое каркасный дом?',
    answer: 'Каркасный дом - это строение, основой которого является деревянный или металлический каркас, заполненный утеплителем и обшитый различными материалами. Технология позволяет быстро возводить энергоэффективные дома.'
  },
  {
    question: 'Сколько служит каркасный дом?',
    answer: 'При правильном строительстве и обслуживании каркасный дом может служить 50-100 лет. Важно использовать качественные материалы и соблюдать технологию строительства.'
  },
  {
    question: 'Какой фундамент нужен для каркасного дома?',
    answer: 'Благодаря легкому весу конструкции, для каркасного дома подходит облегченный фундамент - ленточный или свайный. Выбор зависит от грунта и особенностей участка.'
  },
  {
    question: 'Можно ли строить каркасный дом зимой?',
    answer: 'Да, каркасные дома можно строить круглый год. Технология не требует мокрых процессов, что позволяет вести строительство при отрицательных температурах.'
  },
  {
    question: 'Теплый ли каркасный дом?',
    answer: 'Каркасные дома обладают отличной теплоизоляцией благодаря многослойной конструкции стен с эффективным утеплителем. Расходы на отопление обычно ниже, чем в домах из традиционных материалов.'
  }
];

export default function FrameHousesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Каркасные дома под ключ в Алматы - Строительство каркасных домов"
          description="Строительство каркасных домов в Алматы ⭐ Современные технологии ⭐ Быстрые сроки ⭐ Доступные цены ⭐ Собственное производство ⭐ Гарантия качества"
          keywords="каркасные дома, строительство каркасных домов, каркасные дома алматы, каркасные дома под ключ, цены на каркасные дома"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Каркасные дома под ключ в Алматы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Строим современные каркасные дома с гарантией качества. Собственное производство, профессиональный монтаж, доступные цены.
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
                const phone = "77772282323";
                const message = "Здравствуйте! Интересует строительство каркасного дома. Можно получить консультацию?";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Преимущества каркасных домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современная технология строительства с проверенными решениями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о каркасных домах
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  {openFaqIndex === index ? (
                    <Minus className="h-5 w-5 text-primary-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary-600" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaqIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Section with margin bottom */}
        <div className="mb-32">
          <HomeCalculatorSteps />
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <Projects />
        </div>

        {/* Our Works Section */}
        <OurWorks />

        {/* News Section */}
        <News />

        {/* Modular Homes Section */}
        <ModularHomes />

        {/* Related Links Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Полезные ссылки
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Дополнительная информация о строительстве домов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/stoimost-stroitelstva-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Стоимость строительства дома
              </h3>
              <p className="text-gray-600 mb-4">
                Подробный расчет стоимости строительства дома под ключ
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/postroit-dom-almaty"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Построить дом в Алматы
              </h3>
              <p className="text-gray-600 mb-4">
                Все о строительстве домов в Алматы и области
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/kak-postroit-derevyannyj-dom"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Как построить деревянный дом
              </h3>
              <p className="text-gray-600 mb-4">
                Руководство по строительству деревянных домов
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы построить каркасный дом?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома
              </p>
              <button
                onClick={() => {
                  const phone = "77477434343";
                  const message = "Здравствуйте! Интересует строительство каркасного дома. Можно получить консультацию?";
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
                src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
                alt="Каркасные дома в Алматы"
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