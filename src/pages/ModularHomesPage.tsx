import React from 'react';
import SEO from '../components/SEO';
import ModularHeroSlider from '../components/ModularHeroSlider';
import ModularHomes from '../components/ModularHomes';
import ModularServices from '../components/ModularServices';
import ModularAdvantages from '../components/ModularAdvantages';
import ModularWhyChooseUs from '../components/ModularWhyChooseUs';
import ModularTour from '../components/ModularTour';
import ModularTestimonials from '../components/ModularTestimonials';
import ModularFaq from '../components/ModularFaq';
import ModularNews from '../components/ModularNews';
import Contact from '../components/Contact';

export default function ModularHomesPage() {
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Модульные дома под ключ в Алматы - Быстровозводимые дома"
        description="Производство и установка современных модульных домов под ключ. ✓ Быстрое строительство ✓ Доступные цены ✓ Высокое качество ✓ Готовые решения"
        keywords="модульные дома, быстровозводимые дома, готовые дома, модульные здания, строительство модульных домов"
        ogImage="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80"
      />
      <ModularHeroSlider />
      <ModularHomes />
      <ModularAdvantages />
      <ModularServices />
      <ModularWhyChooseUs />
      <ModularTour />
      <ModularTestimonials />
      <ModularNews />
      <ModularFaq />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          Модульные Дома в Алматы
        </h1>
      </div>
      <Contact />
    </div>
  );
}