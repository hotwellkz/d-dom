import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import SipPanels from '../components/SipPanels';
import SipAdvantages from '../components/SipAdvantages';
import News from '../components/News';
import HouseKits from '../components/HouseKits';
import OurWorks from '../components/OurWorks';
import HomeFaq from '../components/HomeFaq';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import SiteTour from '../components/SiteTour';
import HomeCalculator from '../components/HomeCalculator';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      <SEO 
        title="Производство СИП панелей и строительство домов в Казахстане"
        description="Производство и строительство энергоэффективных домов из СИП панелей. Собственное производство в Алматы, доставка по всему Казахстану. ✓ Гарантия качества ✓ Выгодные цены ✓ Быстрое строительство"
        keywords="СИП панели, строительство домов, дома из СИП панелей, производство СИП панелей, строительство в Казахстане, энергоэффективные дома"
        ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
      />
      <Hero />
      <Projects />
      <HomeCalculatorSteps />
      <OurWorks />
      <Services />
      <SipPanels />
      <HouseKits />
      <SipAdvantages />
      <SiteTour />
      <WhyChooseUs />
      <Testimonials />
      <About />
      <HomeFaq />
      <News />
      <HomeCalculator />

      {/* Useful Links Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Полезная информация
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Узнайте больше о строительстве домов и наших услугах
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/stoimost-stroitelstva-doma"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Сколько стоит построить дом в 2024 году
              </h3>
              <p className="text-gray-600 mb-4">
                Актуальные цены на строительство домов под ключ
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
              to="/projects"
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Проекты домов
              </h3>
              <p className="text-gray-600 mb-4">
                Каталог готовых проектов домов с ценами
              </p>
              <span className="text-primary-600 flex items-center">
                Подробнее <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Строительство домов из СИП панелей в Алматы
        </h1>
      </div>
      <Contact />
    </main>
  );
}