import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ModularHomeCard from './ModularHomeCard';
import { modularHomes } from '../data/modularHomes';

export default function ModularHomes() {
  const navigate = useNavigate();

  const handleHomeClick = (id: number) => {
    navigate(`/modular-home/${id}`);
  };

  // Show first 9 homes
  const displayedHomes = modularHomes.slice(0, 9);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Модульные дома под ключ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные модульные дома с полной отделкой и коммуникациями. Установка за 14 дней.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedHomes.map((home) => (
            <ModularHomeCard 
              key={home.id} 
              home={home}
              onClick={() => handleHomeClick(home.id)}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const phone = "77477434343";
              const message = "Здравствуйте! Я хотел бы узнать подробнее о модульных домах.";
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Получить консультацию
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}