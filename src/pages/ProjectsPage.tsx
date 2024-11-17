import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import ProjectsMap from '../components/ProjectsMap';
import { projects } from '../data/projects';
import { ArrowRight, Building2, Calculator, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    priceRange: [3000000, 25000000],
    area: [50, 250]
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
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());

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

        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите готовый проект дома или закажите индивидуальное проектирование
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              to="/calculator"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Рассчитать стоимость
            </Link>
            <button
              onClick={() => {
                const phone = "77772282323";
                const message = "Здравствуйте! Я хотел бы узнать подробнее о проектах домов.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              <Home className="h-5 w-5 mr-2" />
              Получить консультацию
            </button>
          </div>
        </div>

        <div className="mb-8">
          <ProjectFilters
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onSearch={handleSearch}
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl mb-16">
            <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Проекты не найдены
            </h3>
            <p className="text-gray-600 mb-6">
              По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска или свяжитесь с нами для индивидуального проектирования.
            </p>
            <button
              onClick={() => {
                const phone = "77772282323";
                const message = "Здравствуйте! Я не нашел подходящий проект. Можно получить консультацию?";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              Получить консультацию
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}

        {/* Custom Project CTA */}
        <div className="bg-primary-50 rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Не нашли подходящий проект?
              </h2>
              <p className="text-gray-600 mb-6">
                Мы можем разработать индивидуальный проект дома по вашим пожеланиям или адаптировать любой готовый проект под ваши требования.
              </p>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Я хотел бы узнать больше об индивидуальном проектировании дома.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Заказать индивидуальный проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
                alt="Индивидуальное проектирование"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">построенных домов</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Наши реализованные проекты на карте
          </h2>
          <ProjectsMap projects={filteredProjects.filter(p => p.coordinates)} />
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <button
            onClick={() => {
              const phone = "77772282323";
              const message = "Здравствуйте! Я хотел бы получить консультацию по проектам домов.";
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Получить консультацию
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}