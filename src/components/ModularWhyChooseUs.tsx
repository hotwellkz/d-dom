import React from 'react';
import { Shield, Users, Trophy, Clock, Banknote, Wrench } from 'lucide-react';

const reasons = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: "Гарантия Качества",
    description: "Предоставляем гарантию на конструкцию, отделку и все инженерные системы модульного дома."
  },
  {
    icon: <Users className="h-12 w-12 text-primary-600" />,
    title: "Опытная Команда",
    description: "Наши специалисты имеют более 10 лет опыта в производстве и установке модульных домов."
  },
  {
    icon: <Trophy className="h-12 w-12 text-primary-600" />,
    title: "Собственное Производство",
    description: "Производим модульные дома на собственной фабрике в Алматы с контролем качества на всех этапах."
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: "Быстрые Сроки",
    description: "Изготовление модульного дома за 30 дней, монтаж за 1-2 дня, полная готовность через 14 дней."
  },
  {
    icon: <Banknote className="h-12 w-12 text-primary-600" />,
    title: "Доступные Цены",
    description: "Фиксированная стоимость без скрытых платежей. Возможность покупки в рассрочку."
  },
  {
    icon: <Wrench className="h-12 w-12 text-primary-600" />,
    title: "Полный Сервис",
    description: "От проектирования до сдачи под ключ. Помощь в оформлении документов и подключении коммуникаций."
  }
];

export default function ModularWhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Почему Выбирают Нас</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Мы создаем современные модульные дома с продуманными решениями для комфортной жизни
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
                Начните Строительство Своего Модульного Дома
              </h3>
              <p className="text-secondary-600 mb-8">
                Получите бесплатную консультацию и расчет стоимости вашего будущего модульного дома. Наши специалисты помогут подобрать оптимальное решение под ваш бюджет.
              </p>
              <button 
                onClick={() => {
                  const phone = "77477434343";
                  const message = "Здравствуйте! Я хотел бы получить консультацию по модульным домам.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Получить Консультацию
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.40.08_f41a806b.jpg"
                alt="Модульный дом"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">14 дней</p>
                <p className="text-sm">до новоселья</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}