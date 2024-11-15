import React from 'react';
import { 
  Zap, 
  Clock, 
  ThermometerSun, 
  Banknote, 
  Home, 
  Shield, 
  Leaf, 
  Construction 
} from 'lucide-react';

const advantages = [
  {
    icon: <ThermometerSun className="h-12 w-12 text-primary-600" />,
    title: 'Высокая Теплоизоляция',
    description: 'Экономия на отоплении до 40% по сравнению с традиционными материалами. Комфортная температура в любое время года.'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Быстрое Строительство',
    description: 'Возведение дома за 18-45 дней в черновую благодаря готовым панелям и простой технологии сборки.'
  },
  {
    icon: <Banknote className="h-12 w-12 text-primary-600" />,
    title: 'Экономичность',
    description: 'Доступная стоимость строительства и минимальные затраты на фундамент благодаря легкому весу конструкции.'
  },
  {
    icon: <Construction className="h-12 w-12 text-primary-600" />,
    title: 'Прочность',
    description: 'Высокая устойчивость к механическим нагрузкам и сейсмическая стойкость до 9 баллов.'
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary-600" />,
    title: 'Экологичность',
    description: 'Использование безопасных материалов, соответствующих всем экологическим стандартам.'
  },
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Долговечность',
    description: 'Срок службы домов из СИП панелей составляет более 100 лет при правильной эксплуатации.'
  }
];

export default function SipAdvantages() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Преимущества СИП Панелей
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Технология строительства из СИП панелей сочетает в себе инновационные решения и проверенные временем преимущества
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary-50 rounded-full">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-secondary-600">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                Почему Выбирают СИП Технологию?
              </h3>
              <p className="text-secondary-600 mb-6">
                СИП панели становятся все более популярным выбором для строительства в Казахстане благодаря своим уникальным характеристикам и преимуществам перед традиционными материалами.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-secondary-600">
                  <Zap className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Экономия на отоплении до 40%</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <Home className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Возможность строительства в любое время года</span>
                </li>
                <li className="flex items-center text-secondary-600">
                  <Shield className="h-5 w-5 text-primary-600 mr-2" />
                  <span>Гарантия качества от производителя</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://hotwell.kz/wp-content/uploads/2022/10/240.jpg"
                alt="СИП панели в строительстве"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">100+ лет</p>
                <p className="text-sm">срок службы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}