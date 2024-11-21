import { Project } from '../projectsSchema';
import { sipProjects } from './sipProjects';
import { ourWorks } from './ourWorks';
import { projects2012 } from './projects2012';
import { projects2022 } from './projects2022';

// Объединяем все проекты
export const projects: Project[] = [
  ...sipProjects,
  ...ourWorks,
  ...projects2012,
  ...projects2022
];

// Функции для фильтрации проектов
export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category);
}

export function getProjectsByType(typeId: string): Project[] {
  return projects.filter(project => project.typeId === typeId);
}

export function getProjectsByPriceRange(min: number, max: number): Project[] {
  return projects.filter(project => {
    const price = parseInt(project.price.replace(/\D/g, ''));
    return price >= min && price <= max;
  });
}

export function getProjectsByAreaRange(min: number, max: number): Project[] {
  return projects.filter(project => {
    const area = parseInt(project.area);
    return area >= min && area <= max;
  });
}

// Функция для поиска проектов
export function searchProjects(query: string): Project[] {
  const searchTerm = query.toLowerCase();
  return projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.location.toLowerCase().includes(searchTerm)
  );
}

// Функция для получения похожих проектов
export function getSimilarProjects(project: Project, limit: number = 3): Project[] {
  return projects
    .filter(p => 
      p.id !== project.id && 
      p.category === project.category &&
      Math.abs(parseInt(p.area) - parseInt(project.area)) <= 30
    )
    .slice(0, limit);
}

// Функция для получения проектов с координатами
export function getProjectsWithCoordinates(): Project[] {
  return projects.filter(project => project.coordinates);
}

// Экспортируем все категории проектов отдельно для удобства
export { sipProjects } from './sipProjects';
export { ourWorks } from './ourWorks';
export { projects2012 } from './projects2012';
export { projects2022 } from './projects2022';