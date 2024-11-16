import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import { projects } from '../data/projects';
import { ArrowRight } from 'lucide-react';

type SortOption = {
  label: string;
  value: string;
  order: 'asc' | 'desc';
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    floors: null,
    bedrooms: null,
    category: null,
    priceRange: [3000000, 20000000],
    area: [50, 200]
  });
  const [sortOption, setSortOption] = useState<SortOption>({
    label: 'Цена (по убыванию)',
    value: 'price',
    order: 'desc'
  });

  const filters = useMemo(() => ({
    floors: [...new Set(projects.map(p => p.floors))].sort(),
    bedrooms: [...new Set(projects.map(p => p.bedrooms))].sort(),
    categories: [...new Set(projects.map(p => p.category))],
    priceRange: [
      Math.min(...projects.map(p => parseInt(p.price.replace(/\D/g, '')))),
      Math.max(...projects.map(p => parseInt(p.price.replace(/\D/g, ''))))
    ],
    area: [
      Math.min(...projects.map(p => parseInt(p.area))),
      Math.max(...projects.map(p => parseInt(p.area)))
    ]
  }), []);

  const handleFilterChange = (filterType: string, value: any) => {
    if (filterType === 'sort') {
      setSortOption(value);
    } else {
      setSelectedFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFloors = selectedFilters.floors === null || 
        project.floors === selectedFilters.floors;

      const matchesBedrooms = selectedFilters.bedrooms === null || 
        project.bedrooms === selectedFilters.bedrooms;

      const matchesCategory = selectedFilters.category === null ||
        project.category === selectedFilters.category;

      const projectPrice = parseInt(project.price.replace(/\D/g, ''));
      const matchesPrice = projectPrice >= selectedFilters.priceRange[0] && 
        projectPrice <= selectedFilters.priceRange[1];

      const projectArea = parseInt(project.area);
      const matchesArea = projectArea >= selectedFilters.area[0] && 
        projectArea <= selectedFilters.area[1];

      return matchesSearch && matchesFloors && matchesBedrooms && matchesCategory && matchesPrice && matchesArea;
    });

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: number, bValue: number;

      switch (sortOption.value) {
        case 'price':
          aValue = parseInt(a.price.replace(/\D/g, ''));
          bValue = parseInt(b.price.replace(/\D/g, ''));
          break;
        case 'area':
          aValue = parseInt(a.area);
          bValue = parseInt(b.area);
          break;
        case 'floors':
          aValue = a.floors;
          bValue = b.floors;
          break;
        default:
          return 0;
      }

      return sortOption.order === 'asc' ? aValue - bValue : bValue - aValue;
    });

    return filtered;
  }, [searchTerm, selectedFilters, projects, sortOption]);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Проекты домов из СИП панелей - Готовые решения"
          description="Каталог готовых проектов домов из СИП панелей от компании Хотвелл. ✓ Современные проекты ✓ Доступные цены ✓ Быстрое строительство ✓ Индивидуальный подход"
          keywords="проекты домов, СИП дома, готовые проекты, строительство дома, проекты домов Казахстан, цены на дома"
          ogImage={projects[0]?.image}
          h1="Проекты Домов"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Выберите готовый проект дома или закажите индивидуальное проектирование
        </p>

        <div className="mb-8">
          <ProjectFilters
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.
            </p>
          </div>
        )}

        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://hotwell.kz/product-category/proekty/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Смотреть больше проектов
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}