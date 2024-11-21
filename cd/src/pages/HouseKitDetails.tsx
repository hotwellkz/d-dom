import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Ruler, Home, ZoomIn, Shield } from 'lucide-react';
import { houseKits } from '../components/HouseKits';
import ImageModal from '../components/ImageModal';

export default function HouseKitDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const kit = houseKits.find(k => k.id === Number(id));

  const handleOrderClick = () => {
    const phone = "77772282323";
    const message = `Здравствуйте! Меня интересует домокомплект ${kit?.title}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % (kit?.gallery?.length || 1));
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + (kit?.gallery?.length || 1)) % (kit?.gallery?.length || 1));
  };

  if (!kit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Домокомплект не найден</h2>
          <Link to="/house-kits" className="text-primary-600 hover:text-primary-700">
            Вернуться к домокомплектам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/house-kits" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Назад к домокомплектам
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div 
              className="relative aspect-[16/9] mb-4 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={kit.gallery[selectedImage]}
                alt={kit.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {kit.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-[16/9] rounded-xl overflow-hidden group ${
                    selectedImage === index 
                      ? 'ring-4 ring-primary-600 ring-offset-2' 
                      : 'hover:ring-4 hover:ring-primary-600/50 hover:ring-offset-2'
                  } transition-all duration-200`}
                >
                  <img
                    src={image}
                    alt={`${kit.title} - Вид ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{kit.title}</h1>
            <p className="text-4xl font-bold text-primary-600 mb-8">{kit.price}</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center text-gray-700">
                <Home className="h-6 w-6 text-primary-600 mr-2" />
                <span>Площадь: {kit.area}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Package className="h-6 w-6 text-primary-600 mr-2" />
                <span>Тип: Домокомплект</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Ruler className="h-6 w-6 text-primary-600 mr-2" />
                <span>Размеры: 2500 × 1250 мм</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Комплектация</h2>
              <div className="grid gap-4">
                {kit.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handleOrderClick}
              className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Заказать домокомплект
            </button>
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        images={kit.gallery}
        currentIndex={selectedImage}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}