import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://hotwell.kz/wp-content/uploads/2020/03/Kontakty-hotvell-2048x605.jpg.webp"
              alt="Наша команда"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary-800 mb-6 font-montserrat">О Нас</h2>
            <p className="text-xl text-secondary-600 mb-8 font-inter">
              С более чем десятилетним опытом работы мы помогли сотням клиентов воплотить в жизнь их мечты о идеальном доме.
            </p>
            <div className="space-y-4">
              {[
                'Ведущие эксперты отрасли',
                'Команда профессионалов',
                'Проверенная репутация',
                'Инновационные решения'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary-600 mr-2" />
                  <span className="text-secondary-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}