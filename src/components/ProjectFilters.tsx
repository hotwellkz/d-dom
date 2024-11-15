import React, { useState } from 'react';
import { Sliders, Search, Home, BedDouble, Building2, ArrowUpDown } from 'lucide-react';
import FilterModal from './FilterModal';

interface FilterProps {
  filters: {
    floors: number[];
    bedrooms: number[];
    categories: string[];
    priceRange: [number, number];
    area: [number, number];
  };
  selectedFilters: {
    floors: number | null;
    bedrooms: number | null;
    category: string | null;
    priceRange: [number, number];
    area: [number, number];
  };
  onFilterChange: (filterType: string, value: any) => void;
  onSearch: (term: string) => void;
}

type SortOption = {
  label: string;
  value: string;
  order: 'asc' | 'desc';
};

const sortOptions: SortOption[] = [
  { label: 'Цена (по возрастанию)', value: 'price', order: 'asc' },
  { label: 'Цена (по убыванию)', value: 'price', order: 'desc' },
  { label: 'Площадь (по возрастанию)', value: 'area', order: 'asc' },
  { label: 'Площадь (по убыванию)', value: 'area', order: 'desc' },
  { label: 'Этажность (по возрастанию)', value: 'floors', order: 'asc' },
  { label: 'Этажность (по убыванию)', value: 'floors', order: 'desc' }
];

export default function ProjectFilters({ filters, selectedFilters, onFilterChange, onSearch }: FilterProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortOption>(sortOptions[1]);

  const handleSortChange = (option: SortOption) => {
    setSelectedSort(option);
    setIsDropdownOpen(false);
    onFilterChange('sort', option);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Top Row - Search, Sort, and Price/Area Filters */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Поиск проекта..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 focus:border-primary-500 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 truncate">
                <ArrowUpDown className="h-5 w-5 flex-shrink-0 text-primary-600" />
                <span className="truncate">{selectedSort.label}</span>
              </div>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                {sortOptions.map((option) => (
                  <button
                    key={`${option.value}-${option.order}`}
                    onClick={() => handleSortChange(option)}
                    className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                      selectedSort.value === option.value && selectedSort.order === option.order
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Area and Price Filters Button */}
          <div className="sm:col-span-2">
            <button 
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              <Sliders className="h-5 w-5" />
              <span>Площадь и цена</span>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-5 w-5 text-primary-600" />
            <span className="font-semibold text-gray-900">Категория</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onFilterChange('category', null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedFilters.category === null
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Все
            </button>
            {filters.categories.map((category) => (
              <button
                key={category}
                onClick={() => onFilterChange('category', category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedFilters.category === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Row - Floors and Bedrooms */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Floors */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Home className="h-5 w-5 text-primary-600" />
              <span className="font-semibold text-gray-900">Этажность</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onFilterChange('floors', null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedFilters.floors === null
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Все
              </button>
              {filters.floors.map((floor) => (
                <button
                  key={floor}
                  onClick={() => onFilterChange('floors', floor)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedFilters.floors === floor
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BedDouble className="h-5 w-5 text-primary-600" />
              <span className="font-semibold text-gray-900">Спальни</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => onFilterChange('bedrooms', null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedFilters.bedrooms === null
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                Все
              </button>
              {filters.bedrooms.map((bedroom) => (
                <button
                  key={bedroom}
                  onClick={() => onFilterChange('bedrooms', bedroom)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedFilters.bedrooms === bedroom
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {bedroom}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={onFilterChange}
      />
    </>
  );
}