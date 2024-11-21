import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, ArrowRight, Plus, Minus, Package, Wrench, CheckCircle } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

const buildingSteps = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Проектирование',
    description: 'Разработка проекта дома с учетом всех требований и пожеланий'
  },
  {
    icon: <Ruler className="h-12 w-12 text-primary-600" />,
    title: 'Фундамент',
    description: 'Закладка прочного основания для будущего дома'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Стены и перекрытия',
    description: 'Возведение стен и монтаж перекрытий из качественных материалов'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Отделка',
    description: 'Внутренняя и внешняя отделка дома под ключ'
  }
];

const faqItems = [
  {
    question: 'Сколько времени занимает строительство деревянного дома?',
    answer: 'Строительство деревянного дома занимает от 3 до 6 месяцев в зависимости от сложности проекта, площади и выбранной технологии строительства.'
  },
  {
    question: 'Какой фундамент лучше для деревянного дома?',
    answer: 'Для деревянного дома подходят ленточный, свайный или плитный фундамент. Выбор зависит от типа грунта, веса конструкции и климатических условий.'
  },
  {
    question: 'Какие материалы используются для строительства?',
    answer: 'Основные материалы: профилированный брус, клееный брус, оцилиндрованное бревно. Каждый материал имеет свои преимущества и особенности.'
  },
  {
    question: 'Нужно ли утеплять деревянный дом?',
    answer: 'Да, утепление рекомендуется для повышения энергоэффективности. Особенно важно утеплить кровлю, пол и, при необходимости, стены.'
  },
  {
    question: 'Какой срок службы у деревянного дома?',
    answer: 'При правильном уходе и обработке древесины срок службы деревянного дома может составлять 100 и более лет.'
  },
  {
    question: 'Можно ли строить деревянный дом зимой?',
    answer: 'Строительство возможно круглый год, но лучше планировать основные работы на теплый сезон для комфортного монтажа и усадки древесины.'
  },
  {
    question: 'Как защитить деревянный дом от гниения и вредителей?',
    answer: 'Используются специальные защитные составы: антисептики, антипирены, влагозащитные пропитки. Важна также правильная вентиляция.'
  },
  {
    question: 'Сколько стоит построить деревянный дом?',
    answer: 'Стоимость зависит от площади, материалов и комплектации. В среднем от 150 000 тг/м² под ключ. Для точного расчета используйте наш калькулятор.'
  },
  {
    question: 'Какие документы нужны для строительства?',
    answer: 'Необходимы: документы на участок, проект дома, разрешение на строительство. Мы помогаем в оформлении всей документации.'
  },
  {
    question: 'Как ухаживать за деревянным домом?',
    answer: 'Требуется регулярный осмотр, обработка защитными составами каждые 3-5 лет, контроль вентиляции и своевременный ремонт при необходимости.'
  }
];

export default function WoodenHousePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Как построить деревянный дом - Пошаговое руководство 2024"
          description="Узнайте, как построить деревянный дом ⭐ Выбор материалов ⭐ Этапы строительства ⭐ Технологии возведения ⭐ Советы экспертов ⭐ Расчет стоимости строительства"
          keywords="как построить деревянный дом, строительство деревянного дома, деревянные дома под ключ, технология строительства деревянных домов, проекты деревянных домов"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Как построить деревянный дом: пошаговое руководство
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полное руководство по строительству деревянного дома: от выбора материалов до финальной отделки. Профессиональные советы и проверенные технологии.
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
                const message = "Здравствуйте! Хочу получить консультацию по строительству деревянного дома.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Building Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Этапы строительства деревянного дома
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Основные этапы строительства деревянного дома от проекта до готового жилья
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buildingSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary-50 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
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

        {/* Modular Homes Section */}
        <ModularHomes />

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о строительстве деревянных домов
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

        {/* News Section */}
        <News />

        {/* Related Links */}
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
              to="/skolko-stoit-postroit-dom-samomu"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Сколько стоит построить дом самому
              </h3>
              <p className="text-gray-600 mb-4">
                Расчет стоимости самостоятельного строительства
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
                Готовы начать строительство?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о строительстве деревянного дома.";
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
                alt="Строительство деревянных домов"
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