import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, ArrowRight, Plus, Minus, Package, Wrench, BadgeCheck, Home } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Экологичность',
    description: 'Используем только северную древесину высшего сорта для производства клееного бруса'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Минимальная усадка',
    description: 'Клееный брус не дает усадки, что позволяет начать отделку сразу после строительства'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Долговечность',
    description: 'Срок службы домов из клееного бруса более 100 лет при правильном уходе'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Энергоэффективность',
    description: 'Отличные теплоизоляционные свойства и низкие затраты на отопление'
  }
];

const houseTypes = [
  {
    title: 'Классический стиль',
    description: 'Традиционные дома из клееного бруса с элегантным дизайном',
    price: 'от 280 000 тг/м²',
    features: [
      'Сечение бруса 200х180 мм',
      'Классическая планировка',
      'Традиционная кровля',
      'Панорамные окна'
    ]
  },
  {
    title: 'Современный стиль',
    description: 'Современные дома с инновационными решениями',
    price: 'от 320 000 тг/м²',
    features: [
      'Сечение бруса 240х200 мм',
      'Свободная планировка',
      'Плоская кровля',
      'Витражное остекление'
    ]
  },
  {
    title: 'Премиум класс',
    description: 'Эксклюзивные проекты с премиальной отделкой',
    price: 'от 380 000 тг/м²',
    features: [
      'Сечение бруса 280х240 мм',
      'Индивидуальный проект',
      'Сложная кровля',
      'Премиум комплектация'
    ]
  }
];

const faqItems = [
  {
    question: 'Сколько стоит дом из клееного бруса?',
    answer: 'Стоимость дома из клееного бруса начинается от 280 000 тг/м². Конечная цена зависит от сечения бруса, площади дома, сложности проекта и уровня отделки.'
  },
  {
    question: 'Какие преимущества у клееного бруса?',
    answer: 'Основные преимущества: минимальная усадка, высокая прочность, отличная теплоизоляция, геометрическая точность, отсутствие трещин и деформаций, экологичность.'
  },
  {
    question: 'Сколько времени занимает строительство?',
    answer: 'Строительство дома из клееного бруса занимает 3-4 месяца под ключ. Отделочные работы можно начинать сразу после возведения стен.'
  },
  {
    question: 'Какой фундамент нужен для дома из клееного бруса?',
    answer: 'Рекомендуется ленточный или свайно-ростверковый фундамент. Выбор зависит от грунта, рельефа участка и проекта дома.'
  },
  {
    question: 'Нужно ли ждать усадки дома?',
    answer: 'Нет, дома из клееного бруса практически не дают усадки благодаря особой технологии производства. Можно сразу приступать к внутренней отделке.'
  },
  {
    question: 'Как ухаживать за домом из клееного бруса?',
    answer: 'Требуется обработка защитными составами каждые 3-5 лет, проверка вентиляции и своевременное устранение возможных проблем.'
  },
  {
    question: 'Какая гарантия предоставляется?',
    answer: 'Мы предоставляем гарантию 5 лет на конструктив здания и 1 год на отделочные работы. Также доступно постгарантийное обслуживание.'
  },
  {
    question: 'Можно ли строить зимой?',
    answer: 'Да, строительство из клееного бруса возможно круглый год. Материал устойчив к перепадам температур и не требует особых условий монтажа.'
  },
  {
    question: 'Какое отопление лучше использовать?',
    answer: 'Подходят все современные системы отопления: газовое, электрическое, твердотопливное. Выбор зависит от доступных коммуникаций и предпочтений владельца.'
  },
  {
    question: 'Предоставляется ли рассрочка?',
    answer: 'Да, мы предлагаем гибкие условия оплаты: 30% предоплата, 40% после поставки материалов, 30% после завершения строительства.'
  }
];

export default function LaminatedTimberHousesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Строительство домов из клееного бруса под ключ - Цены 2024"
          description="Строительство домов из клееного бруса под ключ ⭐ Собственное производство ⭐ Проекты любой сложности ⭐ Гарантия качества ⭐ Строим за 3-4 месяца"
          keywords="строительство домов из клееного бруса, дома из клееного бруса, клееный брус строительство, дома из клееного бруса под ключ, цены на дома из клееного бруса"
          ogImage="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Строительство домов из клееного бруса под ключ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Строим современные дома из клееного бруса с гарантией качества. Собственное производство, профессиональный монтаж, доступные цены.
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
                const message = "Здравствуйте! Интересует строительство дома из клееного бруса. Можно получить консультацию?";
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
              Преимущества домов из клееного бруса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные технологии производства и строительства
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

        {/* House Types Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Типы домов из клееного бруса
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий стиль дома под ваши потребности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {houseTypes.map((type, index) => (
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
              Ответы на популярные вопросы о домах из клееного бруса
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
              to="/derevyannye-doma-almaty"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Деревянные дома в Алматы
              </h3>
              <p className="text-gray-600 mb-4">
                Все о строительстве деревянных домов
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/doma-iz-brusa-almaty"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Дома из бруса в Алматы
              </h3>
              <p className="text-gray-600 mb-4">
                Строительство домов из бруса
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/calculator"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Калькулятор стоимости
              </h3>
              <p className="text-gray-600 mb-4">
                Рассчитайте стоимость строительства дома
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
                Готовы построить дом из клееного бруса?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о строительстве дома из клееного бруса.";
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
                alt="Дома из клееного бруса"
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