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
    name: "Алексей Петров",
    location: "Алматы",
    rating: 5,
    text: "Очень доволен работой компании. Дом построили за 2 месяца, качество отличное. Особенно порадовала теплоизоляция - зимой дом прогревается очень быстро и держит тепло.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/WhatsApp-Image-2022-04-20-at-20.36.39.jpeg.webp",
    project: "Проект А-100",
    date: "15 марта 2024"
  },
  {
    id: 2,
    name: "Мария Иванова",
    location: "Талгар",
    rating: 5,
    text: "Спасибо команде за профессионализм! Все этапы строительства были выполнены точно в срок. Отдельная благодарность за помощь в оформлении документов.",
    image: "https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg",
    project: "Проект Б-157",
    date: "10 марта 2024"
  },
  {
    id: 3,
    name: "Дмитрий Ким",
    location: "Капчагай",
    rating: 5,
    text: "Выбрал эту компанию по рекомендации друзей и не пожалел. Отличное соотношение цены и качества. Дом получился именно таким, как мы хотели.",
    image: "https://hotwell.kz/wp-content/uploads/2022/10/123-2.jpeg",
    project: "Проект А-119",
    date: "5 марта 2024"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Отзывы Наших Клиентов</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Узнайте, что говорят о нас люди, которые уже построили свой дом с нашей помощью
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
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
                Мы ценим мнение каждого клиента и постоянно работаем над улучшением качества наших услуг
              </p>
              <button 
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Я хотел бы оставить отзыв о вашей компании.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Оставить отзыв
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <p className="text-gray-600">Довольных клиентов</p>
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