import React, { useState } from 'react';
import SEO from '../components/SEO';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BedDouble, Bath, Car, Ruler, MapPin, Check, Maximize2, Building2, ZoomIn } from 'lucide-react';
import { projects } from '../data/projects';
import ImageModal from '../components/ImageModal';
import ProjectCard from '../components/ProjectCard';
import ProjectFaq from '../components/ProjectFaq';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Проект не найден</h2>
          <Link to="/projects" className="text-primary-600 hover:text-primary-700">
            Вернуться к проектам
          </Link>
        </div>
      </div>
    );
  }

  const handleOrderClick = () => {
    const phone = "77772282323";
    const message = `Здравствуйте! Меня интересует проект ${project.title}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % project.gallery.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/projects" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Назад к проектам
        </Link>

        <SEO 
          title={`${project.title} - Проект дома ${project.area}`}
          description={`${project.title} - ${project.description} ✓ Площадь ${project.area} ✓ ${project.bedrooms} спальни ✓ ${project.floors} этажа ✓ Современный дизайн`}
          keywords={`${project.title}, проект дома, ${project.area}, ${project.category}, дом из СИП панелей, строительство дома, ${project.location}`}
          ogImage={project.image}
          h1={project.title}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div 
              className="relative aspect-square mb-4 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                src={project.gallery[selectedImage]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden group ${
                    selectedImage === index 
                      ? 'ring-4 ring-primary-600 ring-offset-2' 
                      : 'hover:ring-4 hover:ring-primary-600/50 hover:ring-offset-2'
                  } transition-all duration-200`}
                >
                  <img
                    src={image}
                    alt={`${project.title} - Вид ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <div className="mb-8">
              <span className="inline-block bg-primary-600 text-white px-4 py-1.5 rounded-full text-sm mb-4">
                {project.category}
              </span>
              <p className="text-4xl font-bold text-primary-600 mb-4">{project.price}</p>
              <p className="text-lg text-gray-600">{project.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-gray-700">
                <Ruler className="h-6 w-6 text-primary-600 mr-2" />
                <span>Площадь: {project.area}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Building2 className="h-6 w-6 text-primary-600 mr-2" />
                <span>Этажей: {project.floors}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <BedDouble className="h-6 w-6 text-primary-600 mr-2" />
                <span>Спален: {project.bedrooms}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Bath className="h-6 w-6 text-primary-600 mr-2" />
                <span>Санузлов: {project.bathrooms}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Car className="h-6 w-6 text-primary-600 mr-2" />
                <span>Гараж: {project.garages} машин</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Maximize2 className="h-6 w-6 text-primary-600 mr-2" />
                <span>Размеры: {project.length} × {project.width}</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Особенности проекта</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center text-gray-700 mb-4">
              <MapPin className="h-6 w-6 text-primary-600 mr-2" />
              <span>Расположение: {project.location}</span>
            </div>

            {project.coordinates && (
              <div className="flex items-center text-gray-700 mb-8">
                <MapPin className="h-6 w-6 text-primary-600 mr-2" />
                <span>Координаты: {project.coordinates[0]}, {project.coordinates[1]}</span>
              </div>
            )}

            <button 
              onClick={handleOrderClick}
              className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Заказать проект
            </button>
          </div>
        </div>

        <ProjectFaq />

        {/* Similar Projects */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Похожие проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map(similarProject => (
                <ProjectCard key={similarProject.id} project={similarProject} />
              ))}
          </div>
        </div>
      </div>

      <ImageModal 
        isOpen={isModalOpen}
        images={project.gallery}
        currentIndex={selectedImage}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
