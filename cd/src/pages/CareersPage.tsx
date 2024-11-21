import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, Phone, Mail, MapPin, ArrowRight, Shield, Clock, Banknote } from 'lucide-react';

const positions = [
  {
    title: "Монтажник СИП панелей",
    experience: "от 1 года",
    salary: "от 300 000 тг",
    requirements: [
      "Опыт монтажа СИП панелей",
      "Знание технологии строительства",
      "Умение работать с инструментами",
      "Ответственность и пунктуальность"
    ]
  },
  {
    title: "Бригадир монтажников",
    experience: "от 3 лет",
    salary: "от 400 000 тг",
    requirements: [
      "Опыт руководства бригадой",
      "Знание СИП технологии",
      "Умение читать чертежи",
      "Организаторские способности"
    ]
  },
  {
    title: "Монтажник-универсал",
    experience: "от 2 лет",
    salary: "от 350 000 тг",
    requirements: [
      "Опыт общестроительных работ",
      "Навыки монтажа коммуникаций",
      "Знание современных технологий",
      "Готовность к командировкам"
    ]
  }
];

const benefits = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: "Официальное трудоустройство",
    description: "Оформление по ТК РК, полный соцпакет"
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: "Удобный график",
    description: "5/2, с 9:00 до 18:00, выходные - суббота и воскресенье"
  },
  {
    icon: <Banknote className="h-12 w-12 text-primary-600" />,
    title: "Достойная оплата",
    description: "Конкурентная зарплата, премии за качественную работу"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Вакансии строительной бригады в Алматы - Работа монтажником"
        description="Требуются монтажники в Алматы ✓ Официальное трудоустройство ✓ Достойная оплата ✓ Карьерный рост ✓ Обучение ✓ Работа в строительстве"
        keywords="вакансии строительной бригады алматы, работа монтажником алматы, требуются монтажники алматы, строительные работы алматы вакансии, монтажные работы вакансии алматы"
        ogImage="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Вакансии строительной бригады в Алматы
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Присоединяйтесь к команде профессионалов в сфере современного строительства
          </p>
          <button
            onClick={() => {
              const phone = "77772282323";
              const message = "Здравствуйте! Я хочу узнать подробнее о вакансиях.";
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors"
          >
            Откликнуться на вакансию
          </button>
        </div>
      </div>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Открытые вакансии</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы ищем опытных специалистов для работы на строительных объектах в Алматы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <Briefcase className="h-8 w-8 text-primary-600" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                    <p className="text-gray-600">Опыт работы: {position.experience}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <p className="text-2xl font-bold text-primary-600">{position.salary}</p>
                  <div className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const phone = "77772282323";
                    const message = `Здравствуйте! Я хочу откликнуться на вакансию "${position.title}"`;
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Откликнуться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Почему стоит работать с нами</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы предлагаем комфортные условия труда и возможности для профессионального роста
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary-50 rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Отправьте нам свое резюме или позвоните для получения дополнительной информации
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-600 mr-3" />
                  <a href="tel:+77772282323" className="text-gray-600 hover:text-primary-600">
                    +7 (777) 228-23-23
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-600 mr-3" />
                  <a href="mailto:info@dostupnydom.kz" className="text-gray-600 hover:text-primary-600">
                    info@dostupnydom.kz
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary-600 mr-3" />
                  <span className="text-gray-600">
                    г. Алматы, ул. Рыскулова, 232/3
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}