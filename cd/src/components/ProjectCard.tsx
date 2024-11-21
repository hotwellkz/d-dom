import React from 'react';
import { Home, MapPin, Ruler, BedDouble, Maximize2, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/project/${project.id}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-sm mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-2xl font-bold text-primary-300">{project.price}</p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-secondary-600">
              <Building2 className="h-5 w-5 mr-2 text-primary-600" />
              <span>{project.floors} {project.floors === 1 ? 'этаж' : 'этажа'}</span>
            </div>
            <div className="flex items-center text-secondary-600">
              <Ruler className="h-5 w-5 mr-2 text-primary-600" />
              <span>{project.area}</span>
            </div>
            <div className="flex items-center text-secondary-600">
              <BedDouble className="h-5 w-5 mr-2 text-primary-600" />
              <span>{project.bedrooms} спальни</span>
            </div>
            <div className="flex items-center text-secondary-600">
              <Maximize2 className="h-5 w-5 mr-2 text-primary-600" />
              <span>{project.length} × {project.width}</span>
            </div>
          </div>
          <div className="mt-4 flex items-center text-secondary-600">
            <MapPin className="h-5 w-5 mr-2 text-primary-600" />
            <span>{project.location}</span>
          </div>
          <button className="w-full mt-6 bg-secondary-100 text-secondary-800 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-300 flex items-center justify-center font-medium">
            <Home className="h-5 w-5 mr-2" />
            Подробнее
          </button>
        </div>
      </div>
    </Link>
  );
}