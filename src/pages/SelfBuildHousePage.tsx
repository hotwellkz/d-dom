import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Calculator, Building2, Package, Wrench, ArrowRight, Plus, Minus, Ruler, Banknote, Shield, Settings } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';

const costBreakdown = [
  {
    icon: <Building2 className="h-12 w-12 text-primary-600" />,
    title: 'Фундамент',
    description: 'От 12 000 до 25 000 тг/м²',
    details: 'Включает материалы и работы по устройству фундамента'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Стены и перекрытия',
    description: 'От 35 000 до 50 000 тг/м²',
    details: 'Материалы для стен, перекрытий и кровли'
  },
  {
    icon: <Settings className="h-12 w-12 text-primary-600" />,
    title: 'Инженерные системы',
    description: 'От 15 000 до 25 000 тг/м²',
    details: 'Электрика, водоснабжение, отопление'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Отделка',
    description: 'От 20 000 до 40 000 тг/м²',
    details: 'Внутренняя и внешняя отделка'
  }
];

const buildingSteps = [
  {
    icon: <Ruler className="h-12 w-12 text-primary-600" />,
    title: 'Проектирование',
    description: 'Разработка проекта и получение разрешений'
  },
  {
    icon: <Building2 className="h-12 w-12 text-primary-600" />,
    title: 'Подготовка участка',
    description: 'Расчистка и разметка территории'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Закупка материалов',
    description: 'Выбор и приобретение стройматериалов'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Строительство',
    description: 'Поэтапное возведение дома'
  }
];

const faqItems = [
  {
    question: 'Сколько стоит построить дом самому?',
    answer: 'Стоимость самостоятельного строительства дома зависит от многих факторов: площади, материалов, региона. В среднем, при самостоятельном строительстве можно сэкономить 30-40% от стоимости строительства под ключ.'
  },
  {
    question: 'С чего начать строительство дома?',
    answer: 'Начните с проектирования и получения необходимых разрешений. Затем подготовьте участок, заложите фундамент и приступайте к возведению стен.'
  },
  {
    question: 'Какие материалы лучше использовать?',
    answer: 'Выбор материалов зависит от бюджета и климатических условий. Популярные варианты: кирпич, газоблок, СИП панели. Каждый материал имеет свои преимущества.'
  },
  {
    question: 'Сколько времени займет строительство?',
    answer: 'При самостоятельном строительстве сроки могут составлять от 6 месяцев до 1,5 лет, в зависимости от сложности проекта и вашего опыта.'
  },
  {
    question: 'Какой фундамент выбрать?',
    answer: 'Тип фундамента зависит от грунта и конструкции дома. Наиболее распространены ленточный, свайный и плитный фундаменты.'
  }
];

export default function SelfBuildHousePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Сколько стоит построить дом самому - Расчет стоимости 2024"
          description="Узнайте, сколько стоит построить дом самому ⭐ Расчет стоимости материалов и работ ⭐ Этапы строительства ⭐ Советы по экономии ⭐ Онлайн калькулятор"
          keywords="построить дом самому, стоимость строительства дома, самостоятельное строительство, расчет стоимости дома, цены на строительство"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Сколько стоит построить дом самому в 2024 году
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Подробный расчет стоимости самостоятельного строительства дома: от фундамента до отделки. Советы по экономии и выбору материалов.
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
                const message = "Здравствуйте! Хочу узнать подробнее о стоимости строительства дома.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Из чего складывается стоимость строительства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Основные статьи расходов при самостоятельном строительстве дома
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costBreakdown.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary-50 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 font-bold mb-2">
                    {item.description}
                  </p>
                  <p className="text-gray-600">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Building Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Этапы самостоятельного строительства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Основные этапы строительства дома своими руками
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

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о самостоятельном строительстве
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

        {/* Modular Homes Section */}
        <ModularHomes />

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
                Нужна помощь в строительстве?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома
              </p>
              <button
                onClick={() => {
                  const phone = "77477434343";
                  const message = "Здравствуйте! Хочу узнать подробнее о стоимости строительства дома.";
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
                alt="Строительство домов"
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