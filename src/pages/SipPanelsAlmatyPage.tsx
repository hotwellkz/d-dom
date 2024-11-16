import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Clock, 
  Ruler, 
  ArrowRight, 
  Plus, 
  Minus, 
  Package, 
  Wrench, 
  BadgeCheck, 
  Truck, 
  ThermometerSun, 
  Zap,
  Banknote 
} from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

// Rest of the file remains exactly the same
const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Собственное производство',
    description: 'Производим СИП панели на собственном заводе в Алматы с контролем качества на всех этапах'
  },
  {
    icon: <ThermometerSun className="h-12 w-12 text-primary-600" />,
    title: 'Высокая теплоизоляция',
    description: 'СИП панели обеспечивают отличную теплоизоляцию, экономя до 40% на отоплении'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Сертифицированные материалы',
    description: 'Используем только качественные материалы с сертификатами соответствия'
  },
  {
    icon: <Truck className="h-12 w-12 text-primary-600" />,
    title: 'Доставка по Казахстану',
    description: 'Доставляем СИП панели по Алматы и всему Казахстану'
  }
];

const specifications = [
  {
    title: 'Стандартная СИП панель',
    thickness: '163 мм',
    composition: 'ОСП-3 9мм + ПСБ-С25 145мм + ОСП-3 9мм',
    price: '8 894 тг/м²',
    features: [
      'Высокая прочность',
      'Отличная теплоизоляция',
      'Легкий монтаж',
      'Долговечность'
    ]
  },
  {
    title: 'Усиленная СИП панель',
    thickness: '168 мм',
    composition: 'ОСП-3 10мм + ПСБ-С25 148мм + ОСП-3 10мм',
    price: '9 500 тг/м²',
    features: [
      'Повышенная прочность',
      'Улучшенная теплоизоляция',
      'Звукоизоляция',
      'Сейсмоустойчивость'
    ]
  }
];

const faqItems = [
  {
    question: 'Где купить СИП панели в Алматы?',
    answer: 'Вы можете купить СИП панели напрямую от производителя в нашей компании. У нас собственное производство в Алматы, сертифицированные материалы и гарантия качества.'
  },
  {
    question: 'Сколько стоят СИП панели в Алматы?',
    answer: 'Стоимость СИП панелей начинается от 8 894 тг/м². Цена зависит от толщины панели и комплектации. Мы предлагаем конкурентные цены благодаря собственному производству.'
  },
  {
    question: 'Какие размеры СИП панелей доступны в Алматы?',
    answer: 'Стандартный размер СИП панелей: 2500х1250 мм. Толщина варьируется от 163 до 168 мм. Возможно изготовление панелей по индивидуальным размерам.'
  },
  {
    question: 'Как долго служат СИП панели в климате Алматы?',
    answer: 'При правильном монтаже и эксплуатации срок службы СИП панелей составляет более 100 лет. Материалы устойчивы к климатическим условиям Алматы.'
  },
  {
    question: 'Есть ли сертификаты на СИП панели?',
    answer: 'Да, все наши СИП панели сертифицированы и соответствуют строительным нормам РК. Мы предоставляем полный пакет документов на продукцию.'
  },
  {
    question: 'Как осуществляется доставка СИП панелей в Алматы?',
    answer: 'Мы организуем доставку СИП панелей по Алматы и области собственным транспортом. Доставка от 100 м² по городу бесплатная.'
  },
  {
    question: 'Какие преимущества у СИП панелей в Алматы?',
    answer: 'СИП панели обеспечивают отличную теплоизоляцию, сейсмоустойчивость до 9 баллов, быстрый монтаж и экономию на фундаменте благодаря легкому весу.'
  },
  {
    question: 'Можно ли строить из СИП панелей зимой в Алматы?',
    answer: 'Да, строительство из СИП панелей возможно круглый год. Технология не требует мокрых процессов и подходит для зимнего монтажа.'
  },
  {
    question: 'Как проверить качество СИП панелей?',
    answer: 'Мы проводим контроль качества на всех этапах производства. Клиенты могут посетить наше производство в Алматы и лично убедиться в качестве продукции.'
  },
  {
    question: 'Предоставляете ли вы гарантию на СИП панели?',
    answer: 'Да, мы предоставляем гарантию на СИП панели 5 лет. При правильной эксплуатации срок службы значительно превышает гарантийный период.'
  }
];

export default function SipPanelsAlmatyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="СИП панели Алматы - Производство и продажа от завода"
          description="Купить СИП панели в Алматы от производителя ⭐ Цена от 8 894 тг/м² ⭐ Собственное производство ⭐ Сертифицированные материалы ⭐ Доставка ⭐ Гарантия качества"
          keywords="сип панели алматы, купить сип панели алматы, производство сип панелей алматы, цена сип панелей алматы, сип панели цена алматы"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/0707.jpeg.webp"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            СИП панели в Алматы от производителя
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Производим и продаем высококачественные СИП панели в Алматы. Собственное производство, сертифицированные материалы, доставка по всему Казахстану.
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
                const message = "Здравствуйте! Интересует покупка СИП панелей в Алматы. Можно узнать подробнее?";
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
              Преимущества СИП панелей от производителя в Алматы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Производим СИП панели на современном оборудовании с контролем качества
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

        {/* Specifications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Виды СИП панелей в Алматы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Производим СИП панели различной толщины и комплектации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {spec.title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Толщина: {spec.thickness}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Package className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Состав: {spec.composition}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Banknote className="h-5 w-5 mr-2 text-primary-600" />
                    <span>Цена: {spec.price}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {spec.features.map((feature, idx) => (
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
              Часто задаваемые вопросы о СИП панелях в Алматы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о производстве и применении СИП панелей
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
              Дополнительная информация о строительстве из СИП панелей
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
                Подробный расчет стоимости строительства дома из СИП панелей
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
              to="/karkasnye-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Каркасные дома
              </h3>
              <p className="text-gray-600 mb-4">
                Строительство каркасных домов из СИП панелей
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
                Нужна консультация?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости СИП панелей для вашего проекта
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о СИП панелях в Алматы.";
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
                src="https://hotwell.kz/wp-content/uploads/2022/09/0707.jpeg.webp"
                alt="СИП панели Алматы"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary-600">5+ лет</p>
                <p className="text-sm text-gray-600">гарантии</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}