import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { ArrowRight, Calculator, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: "Строительство домов из СИП панелей в Алматы",
    description: "Производство и строительство энергоэффективных домов из СИП панелей. Собственное производство в Алматы, строим по всему Казахстану.",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/205.jpg",
    buttonText: "Наши Проекты",
    buttonLink: "/projects"
  },
  {
    id: 2,
    title: "Современные технологии строительства",
    description: "Используем инновационные материалы и передовые технологии для создания комфортного и энергоэффективного жилья.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/240.jpg",
    buttonText: "Проекты Домов",
    buttonLink: "/projects"
  },
  {
    id: 3,
    title: "Готовые проекты домов",
    description: "Выберите готовый проект или закажите индивидуальное проектирование. Реализуем ваши мечты о идеальном доме.",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg",
    buttonText: "Смотреть проекты",
    buttonLink: "/projects"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleWhatsAppClick = () => {
    const phone = "77772282323";
    const message = "Здравствуйте, я хотел бы получить консультацию.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
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
    <div id="home" className="relative pt-24 h-[90vh] overflow-hidden">
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
            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 to-secondary-800/90" />
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex items-center h-full">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-neutral-100 mb-8">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link 
                        to={slide.buttonLink}
                        className="bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center shadow-lg shadow-primary-900/30"
                      >
                        {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <Link
                        to="/calculator"
                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors border border-white/30 flex items-center gap-2"
                      >
                        <Calculator className="h-5 w-5" />
                        Рассчитать стоимость
                      </Link>
                      <button
                        onClick={handleWhatsAppClick}
                        className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg shadow-green-900/30"
                      >
                        <Phone className="h-5 w-5" />
                        Напишите нам в WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
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