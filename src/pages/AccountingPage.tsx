import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  CreditCard, 
  DollarSign, 
  FileCheck, 
  Building2, 
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const services = [
  {
    icon: <Calculator className="h-12 w-12 text-primary-600" />,
    title: 'Бухгалтерский учет',
    description: 'Полное ведение бухгалтерского учета для строительных компаний'
  },
  {
    icon: <FileText className="h-12 w-12 text-primary-600" />,
    title: 'Налоговая отчетность',
    description: 'Подготовка и сдача налоговой отчетности в установленные сроки'
  },
  {
    icon: <CreditCard className="h-12 w-12 text-primary-600" />,
    title: 'Зарплата и кадры',
    description: 'Расчет заработной платы и кадровое делопроизводство'
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary-600" />,
    title: 'Финансовый анализ',
    description: 'Анализ финансовой деятельности и подготовка отчетов'
  },
  {
    icon: <FileCheck className="h-12 w-12 text-primary-600" />,
    title: 'Оптимизация налогов',
    description: 'Законные способы оптимизации налогообложения'
  },
  {
    icon: <Building2 className="h-12 w-12 text-primary-600" />,
    title: 'Консультации',
    description: 'Профессиональные консультации по бухгалтерским вопросам'
  }
];

const packages = [
  {
    title: 'Базовый',
    price: '50 000 ₸/мес',
    features: [
      'Бухгалтерский учет',
      'Налоговая отчетность',
      'Расчет зарплаты до 10 сотрудников',
      'Консультации по телефону'
    ]
  },
  {
    title: 'Стандарт',
    price: '100 000 ₸/мес',
    features: [
      'Все услуги пакета "Базовый"',
      'Расчет зарплаты до 30 сотрудников',
      'Кадровое делопроизводство',
      'Оптимизация налогообложения',
      'Выделенный бухгалтер'
    ]
  },
  {
    title: 'Премиум',
    price: '150 000 ₸/мес',
    features: [
      'Все услуги пакета "Стандарт"',
      'Расчет зарплаты без ограничений',
      'Финансовый анализ',
      'Управленческий учет',
      'Приоритетная поддержка 24/7',
      'Ежемесячные отчеты руководителю'
    ]
  }
];

export default function AccountingPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Бухгалтерия компании - Профессиональные бухгалтерские услуги"
          description="Профессиональные бухгалтерские услуги для строительных компаний ⭐ Полное ведение учета ⭐ Налоговая отчетность ⭐ Расчет зарплаты ⭐ Консультации"
          keywords="бухгалтерские услуги, бухгалтерский учет, налоговая отчетность, расчет зарплаты, бухгалтерия строительной компании"
          h1="Бухгалтерия компании"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Профессиональные бухгалтерские услуги для вашего бизнеса
        </p>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Тарифные планы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {pkg.title}
                </h3>
                <p className="text-3xl font-bold text-primary-600 mb-6 text-center">
                  {pkg.price}
                </p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ArrowRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    const phone = "77772282323";
                    const message = `Здравствуйте! Меня интересует тариф "${pkg.title}" для бухгалтерского обслуживания.`;
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Выбрать тариф
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-primary-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 text-primary-600 mr-3" />
                  <a href="tel:+77772282323">+7 (777) 228-23-23</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 text-primary-600 mr-3" />
                  <a href="mailto:info@dostupnydom.kz">info@dostupnydom.kz</a>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 text-primary-600 mr-3" />
                  <span>г. Алматы, ул. Рыскулова, 232/3</span>
                </div>
              </div>
              <button
                onClick={() => {
                  const phone = "77772282323";
                  const message = "Здравствуйте! Я хотел бы получить консультацию по бухгалтерским услугам.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                Получить консультацию
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Оставить заявку
              </h3>
              <form className="space-y-4">
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
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
