import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, ArrowRight, Plus, Minus, Package, Wrench, BadgeCheck } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Экологичность',
    description: 'Используем только натуральную древесину высшего качества из северных регионов'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Возведение деревянного дома за 2-3 месяца под ключ'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Долговечность',
    description: 'Срок службы деревянного дома более 100 лет при правильном уходе'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Комфортный микроклимат',
    description: 'Дерево естественно регулирует влажность и создает здоровый микроклимат'
  }
];

const woodenHouseTypes = [
  {
    title: 'Дома из бруса',
    description: 'Классические деревянные дома из массива древесины с отличной теплоизоляцией.',
    price: 'от 220 000 тг/м²',
    features: [
      'Натуральный материал',
      'Отличная теплоизоляция',
      'Долговечность',
      'Экологичность'
    ]
  },
  {
    title: 'Дома из клееного бруса',
    description: 'Премиальные деревянные дома с минимальной усадкой и высокой прочностью.',
    price: 'от 280 000 тг/м²',
    features: [
      'Минимальная усадка',
      'Высокая прочность',
      'Идеальная геометрия',
      'Премиум качество'
    ]
  },
  {
    title: 'Каркасные деревянные дома',
    description: 'Современные деревянные дома с эффективным утеплением и быстрым монтажом.',
    price: 'от 180 000 тг/м²',
    features: [
      'Быстрый монтаж',
      'Легкий фундамент',
      'Доступная цена',
      'Энергоэффективность'
    ]
  }
];

const faqItems = [
  {
    question: 'Сколько стоит построить деревянный дом в Алматы?',
    answer: 'Стоимость строительства деревянного дома в Алматы начинается от 180 000 тг/м². Конечная цена зависит от выбранного материала (брус, клееный брус, каркасная технология), площади дома и уровня отделки.'
  },
  {
    question: 'Какой срок строительства деревянного дома в Алматы?',
    answer: 'Строительство деревянного дома занимает от 2 до 3 месяцев под ключ. Сроки зависят от сложности проекта и выбранной технологии строительства.'
  },
  {
    question: 'Какие виды деревянных домов строят в Алматы?',
    answer: 'В Алматы строят дома из массива бруса, клееного бруса и по каркасной технологии. Каждый тип имеет свои преимущества и особенности.'
  },
  {
    question: 'Подходят ли деревянные дома для климата Алматы?',
    answer: 'Да, деревянные дома отлично подходят для климата Алматы. Они хорошо сохраняют тепло зимой и прохладу летом, устойчивы к сейсмической активности.'
  },
  {
    question: 'Какой фундамент нужен для деревянного дома в Алматы?',
    answer: 'Для деревянного дома в Алматы чаще всего используют ленточный или свайно-ростверковый фундамент. Выбор зависит от типа грунта и конструкции дома.'
  },
  {
    question: 'Нужно ли разрешение на строительство деревянного дома в Алматы?',
    answer: 'Да, для строительства деревянного дома требуется получить разрешительную документацию. Мы помогаем в оформлении всех необходимых документов.'
  },
  {
    question: 'Как ухаживать за деревянным домом в Алматы?',
    answer: 'Деревянный дом требует периодической обработки защитными составами (каждые 3-5 лет), проверки вентиляции и своевременного устранения возможных проблем.'
  },
  {
    question: 'Какая гарантия на деревянные дома в Алматы?',
    answer: 'Мы предоставляем гарантию 5 лет на конструктив здания и 1 год на отделочные работы. Также доступно постгарантийное обслуживание.'
  },
  {
    question: 'Можно ли строить деревянный дом зимой в Алматы?',
    answer: 'Да, строительство деревянного дома возможно круглый год. Однако некоторые виды работ лучше проводить при положительных температурах.'
  },
  {
    question: 'Какое отопление лучше для деревянного дома в Алматы?',
    answer: 'Для деревянных домов в Алматы подходят все современные системы отопления: газовое, электрическое, твердотопливное. Выбор зависит от доступных коммуникаций и предпочтений владельца.'
  }
];

export default function WoodenHousesAlmatyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Деревянные дома в Алматы под ключ - Строительство деревянных домов"
          description="Строительство деревянных домов в Алматы под ключ ⭐ Дома из бруса ⭐ Клееный брус ⭐ Каркасные деревянные дома ⭐ Гарантия качества ⭐ Доступные цены"
          keywords="деревянные дома в алматы, строительство деревянных домов алматы, дома из бруса алматы, деревянные дома под ключ алматы, цены на деревянные дома"
          ogImage="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Деревянные дома в Алматы под ключ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Строим современные деревянные дома с гарантией качества. Экологичные материалы, профессиональный монтаж, доступные цены.
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
                const message = "Здравствуйте! Интересует строительство деревянного дома в Алматы. Можно получить консультацию?";
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
              Преимущества деревянных домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Натуральные материалы и современные технологии строительства
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

        {/* Types of Wooden Houses */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Типы деревянных домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий тип деревянного дома под ваши потребности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {woodenHouseTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <p className="text-3xl font-bold text-primary-600 mb-6">
                  {type.price}
                </p>
                <div className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <BadgeCheck className="h-5 w-5 mr-2 text-primary-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Section */}
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
              Ответы на популярные вопросы о деревянных домах в Алматы
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

            <Link
              to="/finskie-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Финские дома
              </h3>
              <p className="text-gray-600 mb-4">
                Строительство финских домов под ключ
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
                Готовы построить деревянный дом?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего деревянного дома в Алматы
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о строительстве деревянного дома в Алматы.";
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
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80"
                alt="Деревянные дома в Алматы"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary-600">100+ лет</p>
                <p className="text-sm text-gray-600">срок службы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}