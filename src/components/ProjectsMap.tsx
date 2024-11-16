import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../data/projects';

interface ProjectsMapProps {
  projects: Project[];
}

declare global {
  interface Window {
    ymaps?: any;
  }
}

const YANDEX_MAPS_API_KEY = '4ee30b76-cf1e-4f42-98a3-49c6421c8fba';

let scriptPromise: Promise<void> | null = null;

const loadYandexMapsScript = () => {
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    if (window.ymaps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAPS_API_KEY}&lang=ru_RU`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return scriptPromise;
};

export default function ProjectsMap({ projects }: ProjectsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    const initMap = async () => {
      try {
        setIsLoading(true);
        await loadYandexMapsScript();
        await window.ymaps.ready();

        if (!isSubscribed || !mapRef.current) return;

        // Очищаем предыдущую карту
        if (mapInstanceRef.current) {
          mapInstanceRef.current.destroy();
        }

        // Инициализируем карту
        const map = new window.ymaps.Map(mapRef.current, {
          center: [43.2567, 76.9286], // Центр Алматы
          zoom: 9,
          controls: ['zoomControl', 'fullscreenControl']
        });

        mapInstanceRef.current = map;

        // Фильтруем проекты с координатами
        const projectsWithCoordinates = projects.filter(project => project.coordinates);
        console.log('Projects with coordinates:', projectsWithCoordinates); // Для отладки

        // Добавляем метки на карту
        projectsWithCoordinates.forEach(project => {
          if (project.coordinates) {
            const placemark = new window.ymaps.Placemark(
              project.coordinates,
              {
                balloonContentHeader: project.title,
                balloonContentBody: `
                  <div style="padding: 10px;">
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                    <p style="color: #666; margin-bottom: 8px;">${project.location}</p>
                    <p style="font-weight: bold; color: #8C271E; margin-bottom: 8px;">${project.price}</p>
                    <a href="/project/${project.id}" style="color: #8C271E; text-decoration: none;">Подробнее</a>
                  </div>
                `
              },
              {
                preset: 'islands#redHomeIcon',
                iconColor: '#8C271E'
              }
            );

            map.geoObjects.add(placemark);
          }
        });

        // Устанавливаем границы карты, чтобы показать все метки
        if (map.geoObjects.getLength() > 0) {
          map.setBounds(map.geoObjects.getBounds(), {
            checkZoomRange: true,
            zoomMargin: 30
          }).then(() => {
            // Если зум слишком большой, уменьшаем его
            if (map.getZoom() > 15) {
              map.setZoom(15);
            }
          });
        }

        setError(null);
      } catch (err) {
        console.error('Ошибка инициализации карты:', err);
        setError('Не удалось загрузить карту. Пожалуйста, попробуйте позже.');
      } finally {
        if (isSubscribed) {
          setIsLoading(false);
        }
      }
    };

    initMap();

    return () => {
      isSubscribed = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, [projects]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Наши построенные объекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Карта реализованных проектов в Алматы и Алматинской области
          </p>
        </div>

        <div className="relative">
          <div 
            ref={mapRef}
            className="w-full h-[600px] rounded-xl shadow-lg"
            style={{ background: '#f5f5f5' }}
          />
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
              <div className="text-lg font-medium text-gray-600">
                Загрузка карты...
              </div>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
              <div className="text-lg font-medium text-red-600">
                {error}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
