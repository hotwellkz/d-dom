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
    title: 'Скандинавское качество',
    description: 'Строим по финской технологии с использованием экологичных материалов'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Возведение дома за 45-60 дней благодаря готовым элементам'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Энергоэффективность',
    description: 'Экономия на отоплении до 40% благодаря финской технологии утепления'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Долговечность',
    description: 'Срок службы финского дома более 100 лет'
  }
];

const finnishHouseTypes = [
  {
    title: 'Каркасные финские дома',
    description: 'Классическая финская технология строительства с использованием деревянного каркаса и эффективного утепления.',
    price: 'от 180 000 тг/м²',
    features: [
      'Легкий вес конструкции',
      'Минимальная усадка',
      'Быстрый монтаж',
      'Доступная цена'
    ]
  },
  {
    title: 'Брусовые финские дома',
    description: 'Традиционные финские дома из клееного бруса с уникальной технологией соединения.',
    price: 'от 250 000 тг/м²',
    features: [
      'Высокая прочность',
      'Отличная теплоизоляция',
      'Экологичность',
      'Долговечность'
    ]
  },
  {
    title: 'Модульные финские дома',
    description: 'Современное решение для быстрого строительства с финским качеством и комфортом.',
    price: 'от 220 000 тг/м²',
    features: [
      'Готовые модули',
      'Быстрая установка',
      'Полная комплектация',
      'Возможность расширения'
    ]
  }
];

const faqItems = [
  {
    question: 'Что такое финский дом?',
    answer: 'Финский дом - это энергоэффективное строение, построенное по скандинавской технологии с использованием экологичных материалов. Основные особенности: качественное утепление, продуманная вентиляция и рациональная планировка.'
  },
  {
    question: 'Сколько стоит построить финский дом?',
    answer: 'Стоимость строительства финского дома начинается от 180 000 тг/м². Конечная цена зависит от выбранной технологии (каркасный, брусовый или модульный), площади и комплектации дома.'
  },
  {
    question: 'Какой срок службы у финского дома?',
    answer: 'При правильной эксплуатации срок службы финского дома составляет более 100 лет. Качественные материалы и технология строительства обеспечивают долговечность конструкции.'
  },
  {
    question: 'Можно ли строить финский дом зимой?',
    answer: 'Да, финская технология строительства позволяет вести работы круглый год. Отсутствие мокрых процессов и использование готовых элементов делает возможным монтаж при отрицательных температурах.'
  },
  {
    question: 'Какой фундамент нужен для финского дома?',
    answer: 'Для финского дома подходит облегченный фундамент - винтовые сваи или неглубокий ленточный фундамент. Выбор зависит от типа грунта и конструкции дома.'
  },
  {
    question: 'Насколько теплый финский дом?',
    answer: 'Финские дома отличаются высокой энергоэффективностью. Многослойные стены с качественным утеплением и герметичные окна обеспечивают комфортную температуру при минимальных затратах на отопление.'
  },
  {
    question: 'Какие материалы используются в строительстве?',
    answer: 'В строительстве финских домов используются экологичные материалы: северная древесина, минеральная вата высокой плотности, современные пароизоляционные материалы и качественная внешняя отделка.'
  },
  {
    question: 'Сколько времени занимает строительство?',
    answer: 'Строительство финского дома занимает 45-60 дней в зависимости от сложности проекта. Модульные финские дома можно установить за 14-20 дней.'
  },
  {
    question: 'Нужно ли разрешение на строительство?',
    answer: 'Да, для строительства финского дома требуется стандартный пакет разрешительной документации. Мы помогаем в оформлении всех необходимых документов.'
  },
  {
    question: 'Предоставляется ли гарантия?',
    answer: 'Да, мы предоставляем гарантию 5 лет на конструктив здания и 1 год на отделочные работы. Также доступно постгарантийное обслуживание.'
  }
];

export default function FinnishHousesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Финские дома под ключ в Алматы - Строительство финских домов"
          description="Строительство финских домов под ключ в Алматы ⭐ Каркасные, брусовые и модульные финские дома ⭐ Скандинавское качество ⭐ Энергоэффективность ⭐ Доступные цены"
          keywords="финские дома, финские дома алматы, строительство финских домов, каркасные финские дома, финские дома под ключ, цены на финские дома"
          ogImage="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Финские дома под ключ в Алматы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Строим современные финские дома с гарантией качества. Скандинавские технологии, энергоэффективность и комфорт по доступным ценам.
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
                const message = "Здравствуйте! Интересует строительство финского дома. Можно получить консультацию?";
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
              Преимущества финских домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Скандинавские технологии строительства, проверенные суровым климатом
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

        {/* Types of Finnish Houses */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Типы финских домов
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите подходящий тип финского дома под ваши потребности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {finnishHouseTypes.map((type, index) => (
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
              Ответы на популярные вопросы о финских домах
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
              to="/karkasnye-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Каркасные дома
              </h3>
              <p className="text-gray-600 mb-4">
                Все о строительстве каркасных домов
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>

            <Link
              to="/modular-homes"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Модульные дома
              </h3>
              <p className="text-gray-600 mb-4">
                Современные модульные дома под ключ
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
                Готовы построить финский дом?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего финского дома
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о строительстве финского дома.";
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
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80"
                alt="Финские дома в Алматы"
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