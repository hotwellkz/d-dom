import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Banknote, ArrowRight } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';

export default function BuildHouseAlmatyPage() {
  const handleConsultationClick = () => {
    const phone = "77772282323";
    const message = "Здравствуйте! Я хочу построить дом в Алматы. Можно получить консультацию?";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
              onClick={handleConsultationClick}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Rest of the component implementation */}
        {/* Include all sections like Benefits, Calculator Steps, Projects, etc. */}
        
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
                onClick={handleConsultationClick}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg"
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