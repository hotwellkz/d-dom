import React from 'react';
import { Shield, Users, Trophy, Clock, Banknote, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: "Гарантия Качества",
    description: "Предоставляем гарантию на все выполненные работы. Используем только сертифицированные материалы."
  },
  {
    icon: <Users className="h-12 w-12 text-primary-600" />,
    title: "Опытная Команда",
    description: "Наши специалисты имеют более 10 лет опыта в строительстве домов из СИП панелей."
  },
  {
    icon: <Trophy className="h-12 w-12 text-primary-600" />,
    title: "Лидеры Рынка",
    description: "Более 500 успешно реализованных проектов. Собственное производство СИП панелей."
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: "Быстрое Строительство",
    description: "Строительство дома в черновую за 18-45 дней благодаря современным технологиям."
  },
  {
    icon: <Banknote className="h-12 w-12 text-primary-600" />,
    title: "Доступные Цены",
    description: "Прозрачное ценообразование и возможность строительства в рассрочку."
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: "Полный Сервис",
    description: "От проектирования до сдачи объекта. Помощь в оформлении документов."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Почему Выбирают Нас</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Мы создаем комфортные и энергоэффективные дома, которые будут радовать вас долгие годы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary-50 rounded-full">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-secondary-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Начните Строительство Своего Дома
              </h3>
              <p className="text-secondary-600 mb-8">
                Получите бесплатную консультацию и расчет стоимости вашего будущего дома. Наши специалисты помогут подобрать оптимальное решение под ваш бюджет.
              </p>
              <button 
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Я хотел бы получить консультацию по строительству дома.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Получить Консультацию
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://hotwell.kz/wp-content/uploads/2022/09/010101.jpeg.webp"
                alt="Строительство домов из СИП панелей"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm">построенных домов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}