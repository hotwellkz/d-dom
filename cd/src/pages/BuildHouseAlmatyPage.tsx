import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Banknote, ArrowRight, Plus, Minus, Package, Wrench } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';
import News from '../components/News';

const features = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Собственное производство',
    description: 'Производим СИП панели на собственном заводе в Алматы'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое строительство',
    description: 'Возведение дома за 30-45 дней благодаря готовым элементам'
  },
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Полный цикл',
    description: 'От проектирования до сдачи дома под ключ'
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: 'Гарантия качества',
    description: 'Гарантия на все работы и материалы'
  }
];

const faqItems = [
  {
    question: 'Сколько стоит построить дом в Алматы?',
    answer: 'Стоимость строительства дома в Алматы зависит от площади, материалов и комплектации. Цены начинаются от 75 000 тг/м² при строительстве из СИП панелей. Для точного расчета используйте наш онлайн калькулятор.'
  },
  {
    question: 'Какие документы нужны для строительства дома в Алматы?',
    answer: 'Необходимы: документы на земельный участок, архитектурно-планировочное задание (АПЗ), проект дома, разрешение на строительство. Мы помогаем в оформлении всей необходимой документации.'
  },
  {
    question: 'Сколько времени занимает строительство дома?',
    answer: 'Строительство дома из СИП панелей занимает 30-45 дней. Модульный дом устанавливается за 14 дней. Сроки зависят от площади и сложности проекта.'
  },
  {
    question: 'Какие материалы лучше использовать для строительства?',
    answer: 'В Алматы популярны СИП панели благодаря их энергоэффективности и сейсмоустойчивости. Также востребованы модульные дома из-за быстроты монтажа и готовности к проживанию.'
  },
  {
    question: 'Можно ли строить зимой в Алматы?',
    answer: 'Да, технология СИП и модульное строительство позволяют вести работы круглый год. Отсутствие мокрых процессов делает возможным монтаж при отрицательных температурах.'
  },
  {
    question: 'Какой фундамент лучше для дома в Алматы?',
    answer: 'Учитывая сейсмическую активность региона, рекомендуется ленточный или свайно-ростверковый фундамент. Выбор зависит от грунта и конструкции дома.'
  },
  {
    question: 'Предоставляете ли вы гарантию?',
    answer: 'Да, мы предоставляем гарантию 1 год на все работы и 5 лет на конструктив здания. Также осуществляем постгарантийное обслуживание.'
  },
  {
    question: 'Как происходит оплата строительства?',
    answer: 'Оплата поэтапная: 30% предоплата, 40% после завершения основных работ, 30% после сдачи объекта. Возможна рассрочка и ипотека.'
  },
  {
    question: 'Выполняете ли вы отделочные работы?',
    answer: 'Да, мы предлагаем строительство как под черновую отделку, так и под ключ с полной внутренней отделкой и коммуникациями.'
  },
  {
    question: 'Есть ли у вас готовые проекты домов?',
    answer: 'Да, у нас большой каталог готовых проектов домов разной площади и планировки. Также выполняем индивидуальное проектирование.'
  }
];

export default function BuildHouseAlmatyPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
                const phone = "77772282323";
                const message = "Здравствуйте! Интересует строительство дома в Алматы. Можно получить консультацию?";
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
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем полный комплекс услуг по строительству домов в Алматы
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
              Ответы на популярные вопросы о строительстве домов в Алматы
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
                Готовы построить дом своей мечты?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома в Алматы
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Хочу узнать подробнее о строительстве дома в Алматы.";
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