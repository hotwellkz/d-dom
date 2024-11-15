import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ImageModal({ 
  isOpen, 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        <X className="h-8 w-8" />
      </button>

      {/* Навигационные кнопки */}
      <button
        className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors rounded-full bg-black/50 hover:bg-black/70"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors rounded-full bg-black/50 hover:bg-black/70"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Индикатор страниц */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Изображение */}
      <img
        src={images[currentIndex]}
        alt={`Изображение ${currentIndex + 1} из ${images.length}`}
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}