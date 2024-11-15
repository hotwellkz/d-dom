import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, ArrowRight, Plus, Minus, Package, Wrench } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';

export default function WoodenHousePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleConsultationClick = () => {
    const phone = "77772282323";
    const message = "Здравствуйте! Хочу получить консультацию по строительству деревянного дома.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Как построить деревянный дом - Пошаговое руководство 2024"
          description="Узнайте, как построить деревянный дом ⭐ Выбор материалов ⭐ Этапы строительства ⭐ Технологии возведения ⭐ Советы экспертов ⭐ Расчет стоимости строительства"
          keywords="как построить деревянный дом, строительство деревянного дома, деревянные дома под ключ, технология строительства деревянных домов, проекты деревянных домов"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Как построить деревянный дом: пошаговое руководство
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полное руководство по строительству деревянного дома: от выбора материалов до финальной отделки. Профессиональные советы и проверенные технологии.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/calculator"
              className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Рассчитать стоимость
            </Link>
            <button
              onClick={handleConsultationClick}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Rest of the component implementation */}
        {/* Include all sections like Construction Steps, FAQ, Calculator Steps, etc. */}
        
        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы начать строительство?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома
              </p>
              <button
                onClick={handleConsultationClick}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
                alt="Строительство деревянных домов"
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