import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
  project: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Марат Сагинтаев",
    location: "Алматы",
    rating: 5,
    text: "Выбрали модульный дом для загородного участка. Установили за 2 дня, все коммуникации подключили быстро. Качество отделки и материалов на высоте. Очень довольны результатом!",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg",
    project: "Модульный дом С-24",
    date: "15 марта 2024"
  },
  {
    id: 2,
    name: "Айгуль Нурланова",
    location: "Капчагай",
    rating: 5,
    text: "Заказали модульный дом для родителей. Порадовала скорость установки и полная готовность к проживанию. Все продумано до мелочей, от розеток до освещения.",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/WhatsApp-Image-2023-07-10-at-18.50.09-1067x800.jpeg",
    project: "Модульный дом К-24",
    date: "10 марта 2024"
  },
  {
    id: 3,
    name: "Виктор Ким",
    location: "Талгар",
    rating: 5,
    text: "Отличное решение для быстрого переезда за город. Дом полностью меблирован, есть все необходимое. Зимой тепло, летом прохладно. Рекомендую!",
    image: "https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.02.43_09b7364a.jpg",
    project: "Модульный дом С-30",
    date: "5 марта 2024"
  }
];

export default function ModularTestimonials() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Отзывы Владельцев Модульных Домов</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Узнайте, что говорят люди, которые уже живут в наших модульных домах
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star 
                    key={index}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="h-8 w-8 text-primary-200 absolute -top-4 -left-2 -z-10" />
                <p className="text-gray-600 relative z-10">
                  {testimonial.text}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  {testimonial.project} • {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Хотите оставить отзыв?
              </h3>
              <p className="text-gray-600 mb-6">
                Мы ценим мнение каждого клиента и постоянно работаем над улучшением качества наших модульных домов
              </p>
              <button 
                onClick={() => {
                  const phone = "77477434343";
                  const message = "Здравствуйте! Я хотел бы оставить отзыв о модульном доме.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Оставить отзыв
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <p className="text-gray-600">Модульных домов</p>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.9</div>
                <p className="text-gray-600">Средняя оценка</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}