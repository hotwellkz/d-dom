import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, ArrowRight, Plus, Minus, Package, Wrench, BadgeCheck, Home } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

const priceCategories = [
  {
    title: "Эконом",
    description: "Каркасные дома базовой комплектации",
    price: "от 120 000 тг/м²",
    area: "50-150 м²",
    features: [
      "Каркас из доски 50х150мм",
      "Базовое утепление 150мм",
      "Внешняя отделка сайдингом",
      "Внутренняя отделка ГКЛ",
      "Двухкамерные окна"
    ]
  },
  {
    title: "Стандарт",
    description: "Каркасные дома улучшенной комплектации",
    price: "от 150 000 тг/м²",
    area: "70-200 м²",
    features: [
      "Усиленный каркас",
      "Утепление 200мм",
      "Комбинированная отделка",
      "Энергосберегающие окна",
      "Металлочерепица"
    ]
  },
  {
    title: "Премиум",
    description: "Каркасные дома премиальной комплектации",
    price: "от 180 000 тг/м²",
    area: "100-300 м²",
    features: [
      "Двойной каркас",
      "Максимальное утепление",
      "Премиальная отделка",
      "Панорамные окна",
      "Сложная кровля"
    ]
  }
];

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Доступная цена',
    description: 'Стоимость от 120 000 тг/м² с учетом материалов и работы'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Возведение дома за 45-60 дней под ключ'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Разные комплектации',
    description: 'От эконом до премиум класса под любой бюджет'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Гарантия качества',
    description: 'Гарантия на конструктив 5 лет, на отделку 1 год'
  }
];

const faqItems = [
  {
    question: 'Сколько стоит каркасный дом под ключ?',
    answer: 'Стоимость каркасного дома под ключ начинается от 120 000 тг/м². Конечная цена зависит от выбранной комплектации, площади дома и типа отделки.'
  },
  {
    question: 'Из чего складывается цена каркасного дома?',
    answer: 'Цена включает: материалы для каркаса, утепление, внешнюю и внутреннюю отделку, кровлю, окна, двери, инженерные системы и работы по монтажу.'
  },
  {
    question: 'Какая комплектация каркасного дома самая выгодная?',
    answer: 'Эконом комплектация от 120 000 тг/м² наиболее выгодна. Она включает все необходимое для комфортного проживания при минимальных затратах.'
  },
  {
    question: 'Сколько времени занимает строительство?',
    answer: 'Строительство каркасного дома занимает 45-60 дней под ключ. Сроки зависят от площади, сложности проекта и выбранной комплектации.'
  },
  {
    question: 'Какой фундамент нужен для каркасного дома?',
    answer: 'Благодаря легкому весу подходит недорогой свайно-винтовой или облегченный ленточный фундамент, что снижает общую стоимость строительства.'
  },
  {
    question: 'Входит ли в стоимость внутренняя отделка?',
    answer: 'Да, базовая внутренняя отделка входит в стоимость. Премиальная отделка и дополнительные опции рассчитываются отдельно.'
  },
  {
    question: 'Можно ли сэкономить на строительстве каркасного дома?',
    answer: 'Да, можно выбрать эконом комплектацию, оптимизировать планировку, использовать недорогие отделочные материалы без потери качества конструктива.'
  },
  {
    question: 'Предоставляется ли рассрочка на строительство?',
    answer: 'Да, мы предлагаем рассрочку платежа: 30% предоплата, 40% после возведения каркаса, 30% после завершения работ.'
  },
  {
    question: 'Какие гарантии предоставляются?',
    answer: 'Предоставляется гарантия 5 лет на конструктив здания и 1 год на отделочные работы. Также доступно постгарантийное обслуживание.'
  },
  {
    question: 'Входят ли коммуникации в стоимость?',
    answer: 'Базовая разводка коммуникаций входит в стоимость. Подключение к внешним сетям и дополнительное оборудование оплачиваются отдельно.'
  }
];

export default function FrameHousesPricePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Каркасные дома цена - Стоимость строительства каркасных домов 2024"
          description="Цены на каркасные дома под ключ ⭐ От 120 000 тг/м² ⭐ Разные комплектации ⭐ Строительство за 45 дней ⭐ Рассрочка платежа ⭐ Гарантия качества"
          keywords="каркасные дома цена, стоимость каркасного дома, цены на каркасные дома, каркасные дома под ключ цена, каркасный дом стоимость строительства"
          ogImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Каркасные дома: цены на строительство под ключ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Строим современные каркасные дома по доступным ценам. Разные комплектации, быстрые сроки строительства, гарантия качества.
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
                const message = "Здравствуйте! Интересует стоимость строительства каркасного дома. Можно получить консультацию?";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Price Categories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Стоимость каркасных домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящую комплектацию под ваш бюджет
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {priceCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary-600">
                    {category.price}
                  </p>
                  <p className="text-gray-500">
                    Площадь: {category.area}
                  </p>
                </div>
                <div className="space-y-3">
                  {category.features.map((feature, idx) => (
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

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Преимущества каркасных домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Оптимальное соотношение цены и качества
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
              Ответы на популярные вопросы о ценах на каркасные дома
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
              to="/karkasnye-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Каркасные дома
              </h3>
              <p className="text-gray-600 mb-4">
                Все о технологии каркасного строительства
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
                Рассчитайте стоимость строительства вашего дома
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/stoimost-stroitelstva-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Стоимость строительства
              </h3>
              <p className="text-gray-600 mb-4">
                Подробный расчет стоимости строительства дома
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
                Готовы узнать точную стоимость?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего каркасного дома
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать стоимость строительства каркасного дома.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                Получить расчет стоимости
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80"
                alt="Каркасные дома цены"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary-600">45 дней</p>
                <p className="text-sm text-gray-600">срок строительства</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}