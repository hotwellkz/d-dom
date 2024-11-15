import React from 'react';
import { Calendar, MapPin, Clock, Camera } from 'lucide-react';

export default function ModularTour() {
  const handleBookTour = () => {
    const phone = "77772282323";
    const message = "Здравствуйте! Я хотел бы записаться на экскурсию по модульным домам.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-10.38.35_c020c6d4.jpg"
                alt="Экскурсия по модульным домам"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-2 text-primary-600">
                <Camera className="h-6 w-6" />
                <span className="text-lg font-bold">5+ объектов</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Запишитесь на Экскурсию
            </h2>
            <p className="text-xl text-secondary-600 mb-8">
              Посетите наши готовые модульные дома и убедитесь в их качестве. Покажем дома в разной комплектации и ответим на все ваши вопросы.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    Удобное расположение
                  </h3>
                  <p className="text-secondary-600">
                    Выставочная площадка в Алматы с готовыми модульными домами
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    Гибкий график
                  </h3>
                  <p className="text-secondary-600">
                    Выберите удобное для вас время посещения
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    Персональный осмотр
                  </h3>
                  <p className="text-secondary-600">
                    Индивидуальная экскурсия с нашим специалистом
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleBookTour}
              className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Записаться на экскурсию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}