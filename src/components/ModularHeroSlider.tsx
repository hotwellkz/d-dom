import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Модульные дома под ключ в Алматы",
    description: "Современные модульные дома с полной отделкой и коммуникациями. Установка за 14 дней.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80",
    buttonText: "Заказать консультацию"
  },
  {
    id: 2,
    title: "Готовые модульные решения",
    description: "Выберите готовый проект модульного дома с установкой за 1 день.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    buttonText: "Смотреть проекты"
  },
  {
    id: 3,
    title: "Быстровозводимые модульные дома",
    description: "Качественное жилье за короткий срок. Полная готовность к проживанию сразу после установки.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80",
    buttonText: "Узнать стоимость"
  }
];

export default function ModularHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleWhatsAppClick = () => {
    const phone = "77477434343";
    const message = "Здравствуйте, я хотел бы узнать подробнее о модульных домах.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-800/90" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center h-full">
                  <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-neutral-100 mb-8">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button 
                        onClick={handleWhatsAppClick}
                        className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center shadow-lg shadow-primary-900/30"
                      >
                        {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-primary-600' 
                : 'w-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
}