import React from 'react';
import SEO from '../components/SEO';
import { Shield, Users, Trophy, Target, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="О компании Хотвелл - Ведущий производитель СИП панелей"
          description="Узнайте больше о компании Хотвелл - лидере в производстве СИП панелей в Казахстане. ✓ 10+ лет опыта ✓ 500+ построенных домов ✓ Собственное производство"
          keywords="о компании Хотвелл, производитель СИП панелей, строительная компания Казахстан, опыт строительства, качество СИП панелей"
          ogImage="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&q=80"
          h1="О Компании Хотвелл"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
          Мы являемся ведущим производителем СИП панелей в Казахстане, предоставляя инновационные решения для современного строительства.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&q=80"
              alt="Наша команда"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша История</h2>
            <p className="text-gray-600 mb-6">
              С момента основания в 2012 году, компания Доступный Дом постоянно развивается и совершенствует технологии производства СИП панелей. За это время мы реализовали более 500 проектов и заслужили доверие клиентов по всему Казахстану.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600">Построенных домов</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Shield className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Качество</h3>
            <p className="text-gray-600">
              Все наши материалы сертифицированы и соответствуют международным стандартам качества.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Команда</h3>
            <p className="text-gray-600">
              Наши специалисты имеют многолетний опыт в производстве и строительстве.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Trophy className="h-12 w-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Достижения</h3>
            <p className="text-gray-600">
              Многочисленные награды и благодарности от клиентов подтверждают наш профессионализм.
            </p>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши Ценности</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Target className="h-8 w-8 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Миссия</h3>
                <p className="text-gray-600">
                  Обеспечить каждую семью доступным, качественным и энергоэффективным жильем.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-8 w-8 text-primary-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Видение</h3>
                <p className="text-gray-600">
                  Стать лидером в производстве современных строительных материалов в Центральной Азии.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}