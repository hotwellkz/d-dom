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
    title: 'Компактность',
    description: 'Оптимальные планировки для домов до 100м² с максимальным использованием пространства'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Возведение дома за 30-45 дней благодаря готовым СИП панелям'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Экономичность',
    description: 'Доступная стоимость строительства и низкие затраты на отопление'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Энергоэффективность',
    description: 'Отличная теплоизоляция благодаря СИП панелям'
  }
];

const smallHouseTypes = [
  {
    title: 'Дома 50-70 м²',
    description: 'Компактные одноэтажные дома для небольшой семьи.',
    price: 'от 7 500 000 ₸',
    features: [
      '2 спальни',
      'Кухня-гостиная',
      'Санузел',
      'Терраса'
    ]
  },
  {
    title: 'Дома 71-85 м²',
    description: 'Оптимальные по площади дома с удобной планировкой.',
    price: 'от 8 500 000 ₸',
    features: [
      '2-3 спальни',
      'Просторная гостиная',
      'Раздельный санузел',
      'Гардеробная'
    ]
  },
  {
    title: 'Дома 86-100 м²',
    description: 'Просторные дома с продуманной планировкой.',
    price: 'от 9 500 000 ₸',
    features: [
      '3 спальни',
      'Кухня-столовая',
      '2 санузла',
      'Терраса'
    ]
  }
];

const faqItems = [
  {
    question: 'Сколько стоит дом из СИП панелей до 100м²?',
    answer: 'Стоимость дома из СИП панелей площадью до 100м² начинается от 7 500 000 тенге. Конечная цена зависит от площади, планировки и комплектации дома.'
  },
  {
    question: 'Какая планировка оптимальна для дома до 100м²?',
    answer: 'Для домов до 100м² оптимальна планировка с 2-3 спальнями, кухней-гостиной, 1-2 санузлами и дополнительными помещениями. Мы предлагаем различные варианты планировок под ваши потребности.'
  },
  {
    question: 'Сколько времени занимает строительство?',
    answer: 'Строительство дома из СИП панелей площадью до 100м² занимает 30-45 дней. Это значительно быстрее традиционного строительства.'
  },
  {
    question: 'Какой фундамент нужен для дома из СИП панелей до 100м²?',
    answer: 'Для домов из СИП панелей до 100м² подходит облегченный фундамент - винтовые сваи или неглубокий ленточный фундамент, что снижает общую стоимость строительства.'
  },
  {
    question: 'Насколько теплым будет дом из СИП панелей?',
    answer: 'Дома из СИП панелей обладают отличной теплоизоляцией. Затраты на отопление дома площадью до 100м² в среднем на 40% ниже, чем у домов из традиционных материалов.'
  },
  {
    question: 'Можно ли построить двухэтажный дом до 100м²?',
    answer: 'Да, возможно строительство как одноэтажного, так и двухэтажного дома площадью до 100м². Двухэтажный вариант позволяет эффективнее использовать площадь участка.'
  },
  {
    question: 'Какие документы нужны для строительства?',
    answer: 'Требуется стандартный пакет документов: разрешение на строительство, проект дома, документы на участок. Мы помогаем в оформлении всей необходимой документации.'
  },
  {
    question: 'Предоставляется ли гарантия?',
    answer: 'Да, мы предоставляем гарантию 5 лет на конструктив здания и 1 год на отделочные работы. Также доступно постгарантийное обслуживание.'
  },
  {
    question: 'Можно ли построить дом зимой?',
    answer: 'Да, технология строительства из СИП панелей позволяет вести работы круглый год. Отсутствие мокрых процессов делает возможным монтаж при отрицательных температурах.'
  },
  {
    question: 'Какие преимущества у небольшого дома из СИП панелей?',
    answer: 'Основные преимущества: доступная стоимость строительства, быстрые сроки возведения, низкие затраты на отопление, возможность создания комфортной планировки даже на небольшой площади.'
  }
];

export default function SmallSipHousesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Проекты домов из СИП панелей до 100м2 - Готовые проекты с ценами"
          description="Готовые проекты домов из СИП панелей до 100м2 ⭐ Современные планировки ⭐ Строительство за 45 дней ⭐ Цены от 7 500 000 тенге ⭐ Энергоэффективные решения"
          keywords="проекты домов из сип панелей до 100м2, небольшие дома из сип панелей, сип дома до 100 квадратов, проекты небольших домов, маленькие дома из сип панелей"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Проекты домов из СИП панелей до 100м²
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Готовые проекты компактных и комфортных домов из СИП панелей. Оптимальные планировки, быстрое строительство, доступные цены.
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
                const message = "Здравствуйте! Интересуют проекты домов из СИП панелей до 100м2. Можно получить консультацию?";
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
              Преимущества небольших домов из СИП панелей
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Оптимальные решения для комфортной жизни на площади до 100м²
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
              Категории домов до 100м²
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Выберите оптимальную площадь для вашего будущего дома
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {smallHouseTypes.map((type, index) => (
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
              Ответы на популярные вопросы о домах из СИП панелей до 100м²
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
              to="/sip-panels"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                СИП панели
              </h3>
              <p className="text-gray-600 mb-4">
                Все о технологии строительства из СИП панелей
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
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы построить свой дом?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома из СИП панелей
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о проектах домов из СИП панелей до 100м2.";
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
                src="https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg"
                alt="Дома из СИП панелей до 100м2"
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