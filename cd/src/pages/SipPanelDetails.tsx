import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Ruler, Shield, ZoomIn } from 'lucide-react';
import { sipPanels } from '../data/sipPanels';
import ImageModal from '../components/ImageModal';

export default function SipPanelDetails() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const panel = sipPanels.find(p => p.id === Number(id));
  
  if (!panel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Панель не найдена</h2>
          <Link to="/sip-panels" className="text-primary-600 hover:text-primary-700">
            Вернуться к СИП панелям
          </Link>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % panel.gallery.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + panel.gallery.length) % panel.gallery.length);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'Escape':
          setIsModalOpen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/sip-panels" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Назад к СИП панелям
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div 
              className="relative aspect-[16/9] mb-4 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={panel.gallery[selectedImage]}
                alt={panel.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {panel.gallery.map((image, index) => (
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
                    alt={`${panel.title} - Вид ${index + 1}`}
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
            <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm mb-4">
              {panel.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{panel.title}</h1>
            <p className="text-4xl font-bold text-primary-600 mb-8">{panel.price} ₸/м²</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center text-gray-700">
                <Package className="h-6 w-6 text-primary-600 mr-2" />
                <span>Состав: {panel.composition}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Ruler className="h-6 w-6 text-primary-600 mr-2" />
                <span>Размеры: {panel.width} × {panel.height}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Ruler className="h-6 w-6 text-primary-600 mr-2" />
                <span>Площадь: {(parseInt(panel.width) * parseInt(panel.height)) / 1000000} м²</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Shield className="h-6 w-6 text-primary-600 mr-2" />
                <span>Звукоизоляция: {panel.soundInsulation}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Описание</h2>
              <p className="text-gray-600 leading-relaxed">{panel.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Характеристики</h2>
              <div className="grid grid-cols-2 gap-4">
                {panel.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-gray-600">{spec.label}:</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Применение</h2>
              <div className="grid grid-cols-2 gap-4">
                {panel.applications.map((app, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Shield className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
              Заказать панель
            </button>
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        images={panel.gallery}
        currentIndex={selectedImage}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}