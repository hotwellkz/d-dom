import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Shield, Clock, Ruler, Hammer, ArrowRight, Plus, Minus } from 'lucide-react';
import Projects from '../components/Projects';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';
import OurWorks from '../components/OurWorks';
import ModularHomes from '../components/ModularHomes';

const constructionSteps = [
  {
    icon: <Shield className="h-12 w-12 text-primary-600" />,
    title: 'Выбор материала',
    description: 'Подбор качественной древесины с учетом климатических условий и требований к теплоизоляции'
  },
  {
    icon: <Ruler className="h-12 w-12 text-primary-600" />,
    title: 'Проектирование',
    description: 'Разработка детального проекта с учетом особенностей деревянного строительства'
  },
  {
    icon: <Clock className="h-12 w-12 text-primary-600" />,
    title: 'Фундамент',
    description: 'Закладка прочного основания с учетом веса деревянной конструкции'
  },
  {
    icon: <Hammer className="h-12 w-12 text-primary-600" />,
    title: 'Строительство',
    description: 'Поэтапное возведение дома с соблюдением технологии деревянного домостроения'
  }
];

const faqItems = [
  {
    question: 'Какой материал лучше использовать для деревянного дома?',
    answer: 'Для строительства деревянного дома можно использовать различные материалы: клееный брус, профилированный брус, оцилиндрованное бревно. Каждый материал имеет свои преимущества. Клееный брус обеспечивает минимальную усадку и высокую прочность, профилированный брус более доступен по цене, а оцилиндрованное бревно создает классический вид деревянного дома.'
  },
  {
    question: 'Сколько времени занимает строительство деревянного дома?',
    answer: 'Строительство деревянного дома занимает от 3 до 6 месяцев в зависимости от сложности проекта, используемых материалов и размера дома. Важно учитывать время на усадку древесины, которое может составлять от 6 месяцев до года.'
  },
  {
    question: 'Какой фундамент нужен для деревянного дома?',
    answer: 'Для деревянного дома подходят различные типы фундаментов: ленточный, свайный, плитный. Выбор зависит от типа грунта, веса конструкции и климатических условий. Наиболее популярен ленточный фундамент, обеспечивающий оптимальное распределение нагрузки.'
  },
  {
    question: 'Как защитить деревянный дом от гниения и насекомых?',
    answer: 'Для защиты деревянного дома необходимо использовать специальные антисептические и противопожарные пропитки, обеспечить правильную вентиляцию конструкций, регулярно проводить обработку древесины защитными составами. Важно также правильно организовать отвод воды от фундамента.'
  },
  {
    question: 'Какая средняя стоимость строительства деревянного дома?',
    answer: 'Стоимость строительства деревянного дома зависит от выбранного материала, площади, сложности проекта и региона строительства. В среднем цена может варьироваться от 150 000 до 300 000 тенге за квадратный метр под ключ.'
  },
  {
    question: 'Нужно ли утеплять деревянный дом?',
    answer: 'Необходимость утепления зависит от толщины стен и климатических условий. Современные технологии позволяют строить теплые дома без дополнительного утепления, но в регионах с суровым климатом рекомендуется дополнительная теплоизоляция.'
  },
  {
    question: 'Какой срок службы у деревянного дома?',
    answer: 'При правильном уходе и соблюдении технологии строительства деревянный дом может служить более 100 лет. Важно регулярно проводить профилактические работы и своевременно устранять возникающие проблемы.'
  },
  {
    question: 'Можно ли строить деревянный дом зимой?',
    answer: 'Строительство деревянного дома возможно в любое время года, но зимой необходимо учитывать дополнительные факторы: температурный режим для работы с древесиной, особенности заливки фундамента в холодное время, условия хранения материалов.'
  },
  {
    question: 'Какие документы нужны для строительства деревянного дома?',
    answer: 'Для строительства необходимы: разрешение на строительство, проектная документация, документы на земельный участок. После завершения строительства потребуется получить акт ввода в эксплуатацию.'
  },
  {
    question: 'Как ухаживать за деревянным домом?',
    answer: 'Уход за деревянным домом включает регулярную обработку древесины защитными составами, проверку вентиляции, контроль влажности, своевременный ремонт кровли и отмостки. Рекомендуется проводить профилактический осмотр дома дважды в год.'
  }
];

export default function WoodenHousePage() {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Как построить деревянный дом - Пошаговое руководство 2024"
          description="Узнайте, как построить деревянный дом ⭐ Выбор материалов ⭐ Этапы строительства ⭐ Технологии возведения ⭐ Советы экспертов ⭐ Расчет стоимости строительства"
          keywords="как построить деревянный дом, строительство деревянного дома, деревянные дома под ключ, технология строительства деревянных домов, проекты деревянных домов"
          ogImage="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center px-4">
            Как построить деревянный дом: пошаговое руководство
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Полное руководство по строительству деревянного дома: от выбора материалов до финальной отделки. Профессиональные советы и проверенные технологии.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/calculator"
              className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Рассчитать стоимость
            </Link>
            <button
              onClick={() => {
                const phone = "77477434343";
                const message = "Здравствуйте! Хочу получить консультацию по строительству деревянного дома.";
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50 transition-colors border-2 border-primary-600"
            >
              Получить консультацию
            </button>
          </div>
        </div>

        {/* Construction Steps */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Этапы строительства деревянного дома
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Пошаговый процесс возведения деревянного дома с соблюдением всех технологий
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionSteps.map((step, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 bg-primary-50 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ответы на популярные вопросы о строительстве деревянных домов
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0"
              >
                <button
                  className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question}
                  </span>
                  {openFaqIndex === index ? (
                    <Minus className="h-5 w-5 text-primary-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary-600" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openFaqIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator Section with margin bottom */}
        <div className="mb-32">
          <HomeCalculatorSteps />
        </div>

        {/* Projects Section */}
        <div className="mb-20">
          <Projects />
        </div>

        {/* Our Works Section */}
        <OurWorks />

        {/* Modular Homes Section */}
        <ModularHomes />

        {/* CTA Section */}
        <div className="bg-primary-50 rounded-xl p-8 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Готовы начать строительство?
              </h2>
              <p className="text-gray-600 mb-6">
                Получите бесплатную консультацию и расчет стоимости строительства вашего будущего дома
              </p>
              <button
                onClick={() => {
                  const phone = "77477434343";
                  const message = "Здравствуйте! Хочу получить консультацию по строительству деревянного дома.";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center gap-2"
              >
                Получить консультацию
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
                alt="Строительство деревянных домов"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">построенных домов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}