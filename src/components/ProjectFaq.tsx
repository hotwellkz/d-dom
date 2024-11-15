import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'ГАРАНТИЯ',
    answer: 'Мы даем 1 год гарантии на все наши выполненные работы.'
  },
  {
    question: 'ПРОЕКТИРОВАНИЕ',
    answer: 'В стоимость входит индивидуальный архитектурный проект, рабочее проектирование.'
  },
  {
    question: 'ФУНДАМЕНТ',
    answer: 'Фундамент свайно-ленточный, железобетонный. Наполнение ПГС, поверх стяжка 80 мм.'
  },
  {
    question: 'ОБВЯЗКА ФУНДАМЕНТА',
    answer: 'Брус обвязки фундамента 45х140 мм'
  },
  {
    question: 'СТЕНЫ',
    answer: 'Внешние + внутренние несущие стены из СИП панелей HotWell.KZ 163 мм (OSB-3 Толщина 9 мм, Пенополистирол ПСБ-С-20Ф). Ненесущие перегородки - металлический профиль 50х75 мм, обшитый гипсокартоном. Наполнение минвата.'
  },
  {
    question: 'МЕЖЭТАЖНОЕ ПЕРЕКРЫТИЕ',
    answer: 'Межэтажное перекрытие - балочное (45x190 мм), с устройством пола из ОСБ 18 мм. Утепление пенополистиролом 140 мм по периметру межэтажного перекрытия (для двухэтажных домов)'
  },
  {
    question: 'ЧЕРДАЧНОЕ ПЕРЕКРЫТИЕ И КРЫША',
    answer: 'Чердачное перекрытие из деревянных балок. Стропильная система крыши. Утепление чердачного перекрытия. Пароизоляция чердачного перекрытия или крыши'
  },
  {
    question: 'КРОВЛЯ И ОБРЕШЕТКА',
    answer: 'Металлочерепица. Утепление чердачного перекрытия или крыши (Пенополистирол ПСБ-С-20Ф) слоем 140 мм'
  },
  {
    question: 'ДОСТАВКА И МОНТАЖ',
    answer: 'Монтаж штатными мастерами HotWell.kz. Фотоотчеты со стройки. Сроки сборки - 30 дней. Доставка комплекта дома и всех необходимых материалов. Организация проживания бригады'
  }
];

export default function ProjectFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-24">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Что входит в стоимость
        </h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0"
            >
              <button
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {item.question}
                </span>
                <Plus 
                  className={`h-5 w-5 text-primary-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}