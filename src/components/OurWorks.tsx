import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function OurWorks() {
  // Filter projects to show only those with category "Наши работы"
  const ourWorks = projects.filter(project => project.category === "Наши работы");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Часть Наших Работ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Реализованные проекты домов, которые мы построили для наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ourWorks.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
          >
            Смотреть все проекты
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}