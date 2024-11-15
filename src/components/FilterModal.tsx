import React from 'react';
import { X, Ruler, Banknote } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    priceRange: [number, number];
    area: [number, number];
  };
  selectedFilters: {
    priceRange: [number, number];
    area: [number, number];
  };
  onFilterChange: (filterType: string, value: any) => void;
}

export default function FilterModal({ 
  isOpen, 
  onClose, 
  filters, 
  selectedFilters, 
  onFilterChange 
}: FilterModalProps) {
  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    const formatted = new Intl.NumberFormat('ru-RU').format(price);
    // For mobile, abbreviate millions as "млн"
    if (window.innerWidth < 768 && price >= 1000000) {
      return `${(price / 1000000).toFixed(1)} млн ₸`;
    }
    return formatted + ' ₸';
  };

  const formatArea = (area: number) => {
    return `${area} м²`;
  };

  const handleAreaChange = (value: number, isMin: boolean) => {
    if (isMin) {
      if (value <= selectedFilters.area[1]) {
        onFilterChange('area', [value, selectedFilters.area[1]]);
      }
    } else {
      if (value >= selectedFilters.area[0]) {
        onFilterChange('area', [selectedFilters.area[0], value]);
      }
    }
  };

  const handlePriceChange = (value: number, isMin: boolean) => {
    if (isMin) {
      if (value <= selectedFilters.priceRange[1]) {
        onFilterChange('priceRange', [value, selectedFilters.priceRange[1]]);
      }
    } else {
      if (value >= selectedFilters.priceRange[0]) {
        onFilterChange('priceRange', [selectedFilters.priceRange[0], value]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Дополнительные фильтры</h3>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Area Range */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-primary-600" />
                <span className="font-semibold text-gray-900">Площадь</span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <div className="px-3 py-1 bg-gray-100 rounded-lg min-w-[80px] text-center">
                  {formatArea(selectedFilters.area[0])}
                </div>
                <span className="text-gray-400">—</span>
                <div className="px-3 py-1 bg-gray-100 rounded-lg min-w-[80px] text-center">
                  {formatArea(selectedFilters.area[1])}
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div className="relative">
                {/* Track Background */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-gray-100 rounded-full" />
                
                {/* Active Track */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-2 bg-primary-600 rounded-full"
                  style={{
                    left: `${((selectedFilters.area[0] - filters.area[0]) / (filters.area[1] - filters.area[0])) * 100}%`,
                    right: `${100 - ((selectedFilters.area[1] - filters.area[0]) / (filters.area[1] - filters.area[0])) * 100}%`
                  }}
                />

                {/* Min Thumb */}
                <input
                  type="range"
                  min={filters.area[0]}
                  max={filters.area[1]}
                  value={selectedFilters.area[0]}
                  onChange={(e) => handleAreaChange(Number(e.target.value), true)}
                  className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none appearance-none bg-transparent 
                    [&::-webkit-slider-thumb]:pointer-events-auto 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:ring-2 
                    [&::-webkit-slider-thumb]:ring-primary-600 
                    [&::-webkit-slider-thumb]:ring-offset-2 
                    [&::-webkit-slider-thumb]:cursor-pointer 
                    [&::-webkit-slider-thumb]:shadow-md 
                    [&::-webkit-slider-thumb]:transition-all 
                    [&::-webkit-slider-thumb]:duration-150 
                    [&::-webkit-slider-thumb]:hover:ring-primary-700
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-webkit-slider-thumb]:active:scale-95"
                />

                {/* Max Thumb */}
                <input
                  type="range"
                  min={filters.area[0]}
                  max={filters.area[1]}
                  value={selectedFilters.area[1]}
                  onChange={(e) => handleAreaChange(Number(e.target.value), false)}
                  className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none appearance-none bg-transparent 
                    [&::-webkit-slider-thumb]:pointer-events-auto 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:ring-2 
                    [&::-webkit-slider-thumb]:ring-primary-600 
                    [&::-webkit-slider-thumb]:ring-offset-2 
                    [&::-webkit-slider-thumb]:cursor-pointer 
                    [&::-webkit-slider-thumb]:shadow-md 
                    [&::-webkit-slider-thumb]:transition-all 
                    [&::-webkit-slider-thumb]:duration-150 
                    [&::-webkit-slider-thumb]:hover:ring-primary-700
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-webkit-slider-thumb]:active:scale-95"
                />
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Banknote className="h-5 w-5 text-primary-600" />
                <span className="font-semibold text-gray-900">Стоим.</span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <div className="px-3 py-1 bg-gray-100 rounded-lg min-w-[90px] text-center">
                  {formatPrice(selectedFilters.priceRange[0])}
                </div>
                <span className="text-gray-400">—</span>
                <div className="px-3 py-1 bg-gray-100 rounded-lg min-w-[90px] text-center">
                  {formatPrice(selectedFilters.priceRange[1])}
                </div>
              </div>
            </div>
            <div className="px-3 py-4">
              <div className="relative">
                {/* Track Background */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-gray-100 rounded-full" />
                
                {/* Active Track */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-2 bg-primary-600 rounded-full"
                  style={{
                    left: `${((selectedFilters.priceRange[0] - filters.priceRange[0]) / (filters.priceRange[1] - filters.priceRange[0])) * 100}%`,
                    right: `${100 - ((selectedFilters.priceRange[1] - filters.priceRange[0]) / (filters.priceRange[1] - filters.priceRange[0])) * 100}%`
                  }}
                />

                {/* Min Thumb */}
                <input
                  type="range"
                  min={filters.priceRange[0]}
                  max={filters.priceRange[1]}
                  value={selectedFilters.priceRange[0]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), true)}
                  className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none appearance-none bg-transparent 
                    [&::-webkit-slider-thumb]:pointer-events-auto 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:ring-2 
                    [&::-webkit-slider-thumb]:ring-primary-600 
                    [&::-webkit-slider-thumb]:ring-offset-2 
                    [&::-webkit-slider-thumb]:cursor-pointer 
                    [&::-webkit-slider-thumb]:shadow-md 
                    [&::-webkit-slider-thumb]:transition-all 
                    [&::-webkit-slider-thumb]:duration-150 
                    [&::-webkit-slider-thumb]:hover:ring-primary-700
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-webkit-slider-thumb]:active:scale-95"
                />

                {/* Max Thumb */}
                <input
                  type="range"
                  min={filters.priceRange[0]}
                  max={filters.priceRange[1]}
                  value={selectedFilters.priceRange[1]}
                  onChange={(e) => handlePriceChange(Number(e.target.value), false)}
                  className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none appearance-none bg-transparent 
                    [&::-webkit-slider-thumb]:pointer-events-auto 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-5 
                    [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:ring-2 
                    [&::-webkit-slider-thumb]:ring-primary-600 
                    [&::-webkit-slider-thumb]:ring-offset-2 
                    [&::-webkit-slider-thumb]:cursor-pointer 
                    [&::-webkit-slider-thumb]:shadow-md 
                    [&::-webkit-slider-thumb]:transition-all 
                    [&::-webkit-slider-thumb]:duration-150 
                    [&::-webkit-slider-thumb]:hover:ring-primary-700
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-webkit-slider-thumb]:active:scale-95"
                />
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={onClose}
            className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors"
          >
            Применить фильтры
          </button>
        </div>
      </div>
    </div>
  );
}