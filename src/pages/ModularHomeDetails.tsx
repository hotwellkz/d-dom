import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BedDouble, Bath, Ruler, MapPin, Check, Maximize2, Home, ZoomIn } from 'lucide-react';
import { modularHomes } from '../data/modularHomes';
import ImageModal from '../components/ImageModal';
import ModularHomeCard from '../components/ModularHomeCard';
import ModularFaq from '../components/ModularFaq';
import SEO from '../components/SEO';

export default function ModularHomeDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const home = modularHomes.find(h => h.id === Number(id));

  if (!home) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Модульный дом не найден</h2>
          <Link to="/modular-homes" className="text-primary-600 hover:text-primary-700">
            Вернуться к модульным домам
          </Link>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % home.gallery.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + home.gallery.length) % home.gallery.length);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/modular-homes" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Назад к модульным домам
        </Link>

        <SEO 
          title={`${home.title} - Модульный дом ${home.area}`}
          description={`${home.title} - ${home.description} ✓ Площадь ${home.area} ✓ ${home.bedrooms} спальни ✓ Современный дизайн ✓ Быстрая установка`}
          keywords={`${home.title}, модульный дом, ${home.area}, быстровозводимые дома, готовые дома`}
          ogImage={home.image}
          h1={home.title}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div 
              className="relative aspect-square mb-4 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={home.gallery[selectedImage]}
                alt={home.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {home.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden group ${
                    selectedImage === index 
                      ? 'ring-4 ring-primary-600 ring-offset-2' 
                      : 'hover:ring-4 hover:ring-primary-600/50 hover:ring-offset-2'
                  } transition-all duration-200`}
                >
                  <img
                    src={image}
                    alt={`${home.title} - Вид ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Home Details */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm mb-4">
                Модульный дом
              </span>
              <p className="text-4xl font-bold text-primary-600 mb-4">{home.price}</p>
              <p className="text-lg text-gray-600">{home.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-gray-700">
                <Ruler className="h-6 w-6 text-primary-600 mr-2" />
                <span>Площадь: {home.area}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BedDouble className="h-6 w-6 text-primary-600 mr-2" />
                <span>Спальни: {home.bedrooms}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Bath className="h-6 w-6 text-primary-600 mr-2" />
                <span>Санузлы: {home.bathrooms}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Maximize2 className="h-6 w-6 text-primary-600 mr-2" />
                <span>Размеры: {home.length} × {home.width}</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Особенности</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {home.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                const phone = "77477434343";
                const message = `Здравствуйте! Меня интересует модульный дом ${home.title}`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Заказать модульный дом
            </button>
          </div>
        </div>

        <ModularFaq />

        {/* Similar Homes */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Похожие модульные дома</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modularHomes
              .filter(h => h.id !== home.id)
              .slice(0, 3)
              .map(similarHome => (
                <ModularHomeCard 
                  key={similarHome.id} 
                  home={similarHome}
                  onClick={() => window.location.href = `/modular-home/${similarHome.id}`}
                />
              ))}
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        images={home.gallery}
        currentIndex={selectedImage}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}