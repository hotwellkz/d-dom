import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { modularHomes } from '../data/modularHomes';

export default function ModularHomesPreview() {
  // Show only first 3 modular homes
  const previewHomes = modularHomes.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Мы также производим модульные дома под ключ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современные модульные дома с полной отделкой и коммуникациями. Производство и установка за 14 дней.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewHomes.map((home) => (
            <Link 
              key={home.id}
              to={`/modular-home/${home.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <img 
                    src={home.image} 
                    alt={home.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                        Модульный дом
                      </span>
                      <h3 className="text-xl font-bold text-white">{home.title}</h3>
                      <p className="text-2xl font-bold text-primary-300">{home.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-gray-600">
                      <span className="font-medium">Площадь:</span> {home.area}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Спальни:</span> {home.bedrooms}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Санузлы:</span> {home.bathrooms}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Размеры:</span> {home.length}×{home.width}
                    </div>
                  </div>
                  <div className="text-primary-600 group-hover:text-primary-700 font-medium flex items-center justify-center">
                    Подробнее <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/modular-homes"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Смотреть все модульные дома
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}