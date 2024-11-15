import React from 'react';
import { Home, MapPin, Ruler, BedDouble, Bath, Maximize2 } from 'lucide-react';
import { ModularHome } from '../data/modularHomes';

interface ModularHomeCardProps {
  home: ModularHome;
  onClick: () => void;
}

export default function ModularHomeCard({ home, onClick }: ModularHomeCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <div className="relative">
        <img 
          src={home.image} 
          alt={home.title}
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm mb-2">
              Модульный дом
            </span>
            <h3 className="text-xl font-bold text-white mb-1">{home.title}</h3>
            <p className="text-2xl font-bold text-primary-300">{home.price}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-secondary-600">
            <Ruler className="h-5 w-5 mr-2 text-primary-600" />
            <span>{home.area}</span>
          </div>
          <div className="flex items-center text-secondary-600">
            <BedDouble className="h-5 w-5 mr-2 text-primary-600" />
            <span>{home.bedrooms} спальни</span>
          </div>
          <div className="flex items-center text-secondary-600">
            <Bath className="h-5 w-5 mr-2 text-primary-600" />
            <span>{home.bathrooms} с/у</span>
          </div>
          <div className="flex items-center text-secondary-600">
            <Maximize2 className="h-5 w-5 mr-2 text-primary-600" />
            <span>{home.length} × {home.width}</span>
          </div>
        </div>
        <button className="w-full mt-6 bg-secondary-100 text-secondary-800 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300 flex items-center justify-center font-medium">
          <Home className="h-5 w-5 mr-2" />
          Подробнее
        </button>
      </div>
    </div>
  );
}