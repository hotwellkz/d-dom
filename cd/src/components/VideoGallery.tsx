import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  videoId: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "HotWell.kz: как мы работаем с заказчиками",
    description: "Экскурсия по нашему современному заводу в Алматы",
    videoId: "https://www.youtube.com/watch?v=Joi9zJZaWPU"
  },
  {
    id: 2,
    title: "Строительство дома за 45 дней",
    description: "Таймлапс строительства двухэтажного дома из СИП панелей",
    videoId: "db_zY2LIBSQ"
  },
  {
    id: 3,
    title: "Преимущества СИП технологии",
    description: "Подробный обзор преимуществ строительства из СИП панелей",
    videoId: "OmJGPk5FLoU"
  },
  {
    id: 4,
    title: "Отзыв клиента",
    description: "История строительства дома семьи из СИП панелей",
    videoId: "z1Fk3OL2YuM"
  },
  {
    id: 5,
    title: "Монтаж СИП панелей",
    description: "Технология правильного монтажа СИП конструкций",
    videoId: "4yW4ucRyDXA"
  },
  {
    id: 6,
    title: "Энергоэффективность СИП домов",
    description: "Тепловизионное исследование домов из СИП панелей",
    videoId: "Lo2aePquxtA"
  },
  {
    id: 7,
    title: "Модульные дома",
    description: "Процесс производства и установки модульных домов",
    videoId: "8Nk-swdzOSg"
  },
  {
    id: 8,
    title: "Интервью с директором",
    description: "О развитии СИП технологии в Казахстане",
    videoId: "KEJSwW8R5c4"
  },
  {
    id: 9,
    title: "Тест на прочность",
    description: "Испытания прочности СИП панелей в лаборатории",
    videoId: "6tcEfC9ymdw"
  },
  {
    id: 10,
    title: "Готовые проекты",
    description: "Обзор популярных проектов домов из СИП панелей",
    videoId: "e33Qr1x-ivM"
  },
  {
    id: 11,
    title: "Особенности монтажа",
    description: "Детальный разбор процесса монтажа СИП панелей",
    videoId: "Qz5u9sXBox0"
  },
  {
    id: 12,
    title: "Строительство под ключ",
    description: "Полный цикл строительства дома из СИП панелей",
    videoId: "zUvFYSwghdM"
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Видео о Компании</h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Узнайте больше о нашем производстве, технологиях и реализованных проектах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">{video.title}</h3>
                <p className="text-secondary-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}