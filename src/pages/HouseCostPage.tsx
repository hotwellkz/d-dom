import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Calculator, Home, Package, Ruler, Shield, Clock, Banknote, ArrowRight } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';

const costFactors = [
  {
    icon: <Package className="h-12 w-12 text-primary-600" />,
    title: 'Материалы',
    description: 'Стоимость СИП панелей, пиломатериалов и других строительных материалов составляет около 60% от общей стоимости.'
  },
  {
    icon: <Ruler className="h-12 w-12 text-primary-600" />,
    title: 'Площадь дома',
    description: 'Чем больше площадь дома, тем ниже стоимость за квадратный метр. Оптимальное соотношение цены и площади от 100 м².'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Тип фундамента',
    description: 'Стоимость фундамента составляет 15-20% от общей стоимости. Тип выбирается в зависимости от грунта и проекта.'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Сроки строительства',
    description: 'Быстрое строительство из СИП панелей позволяет сэкономить на накладных расходах и аренде техники.'
  }
];

const priceRanges = [
  {
    area: '50-100 м²',
    price: 'от 75 000 тг/м²',
    description: 'Оптимальное решение для небольшой семьи',
    features: ['1-2 спальни', 'Кухня-гостиная', 'Санузел', 'Терраса']
  },
  {
    area: '100-150 м²',
    price: 'от 70 000 тг/м²',
    description: 'Комфортный дом для семьи из 3-4 человек',
    features: ['2-3 спальни', 'Просторная гостиная', '2 санузла', 'Гараж']
  },
  {
    area: '150-200 м²',
    price: 'от 65 000 тг/м²',
    description: 'Просторный дом для большой семьи',
    features: ['3-4 спальни', 'Кабинет', 'Гардеробные', 'Зона отдыха']
  }
];

export default function HouseCostPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Сколько стоит построить дом в Казахстане 2024 - Цены на строительство"
          description="Актуальные цены на строительство дома в Казахстане ⭐ Стоимость за м² от 75 000 тг ⭐ Строительство под ключ ⭐ Типовые проекты домов с ценами ⭐ Онлайн калькулятор стоимости"
          keywords="сколько стоит построить дом, цена строительства дома, стоимость дома под ключ, построить дом в казахстане, цены на дома в казахстане, строительство домов стоимость"
        />

        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto px-4 leading-tight">
            Сколько стоит построить дом в Казахстане в 2024 году
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6 px-4">
            Узнайте актуальные цены на строительство дома в Казахстане. Рассчитайте стоимость вашего будущего дома с помощью онлайн калькулятора.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              to="/calculator"
              className="w-full sm:w-auto bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto bg-white text-primary-600 px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600 flex items-center justify-center"
            >
              <Home className="h-5 w-5 mr-2" />
              Готовые проекты с ценами
            </Link>
          </div>
        </div>

        {/* Cost Factors Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Из чего складывается стоимость строительства дома
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {costFactors.map((factor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="mb-4">{factor.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Steps Section */}
        <HomeCalculatorSteps />

        {/* Price Ranges Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Стоимость строительства дома под ключ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {priceRanges.map((range, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{range.area}</h3>
                  <p className="text-3xl font-bold text-primary-600">{range.price}</p>
                </div>
                <p className="text-gray-600 mb-4 text-center">{range.description}</p>
                <ul className="space-y-2">
                  {range.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <Shield className="h-5 w-5 text-primary-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Рассчитайте точную стоимость вашего дома
              </h2>
              <p className="text-gray-600 mb-6">
                Используйте наш онлайн калькулятор для расчета стоимости строительства дома с учетом всех параметров: площади, этажности, типа крыши и других характеристик.
              </p>
              <Link
                to="/calculator"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                <Calculator className="h-5 w-5 mr-2" />
                Перейти к калькулятору
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
                alt="Калькулятор стоимости дома"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Banknote className="h-6 w-6 text-primary-600" />
                  <span className="text-lg font-bold">Точный расчет</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Наши проекты домов с ценами
          </h2>
          <Projects />
        </div>
      </div>
    </div>
  );
}