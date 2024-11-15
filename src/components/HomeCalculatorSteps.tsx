import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Building2, Package, Wrench } from 'lucide-react';

interface CalculatorState {
  area: string;
  floors: string;
  firstFloorHeight: string;
  secondFloorHeight: string;
  roofType: string;
  houseShape: string;
}

export default function HomeCalculatorSteps() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<CalculatorState>({
    area: '',
    floors: '1 этаж',
    firstFloorHeight: '2,5 метра',
    secondFloorHeight: '2,5 метра',
    roofType: '1-скатная',
    houseShape: 'Простая форма'
  });

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Введите площадь дома (м²)
            </h3>
            <input
              type="number"
              value={formData.area}
              onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 mb-6"
              placeholder="Введите площадь"
              min="10"
              max="1500"
            />
            <button
              onClick={handleNext}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
            >
              Далее
            </button>
          </div>
        );

      case 1:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Выберите количество этажей
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, floors: '1 этаж' }));
                  handleNext();
                }}
                className="aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600"
              >
                <img
                  src="https://hotwell.kz/wp-content/uploads/2022/09/sip-doma.jpg"
                  alt="1 этаж"
                  className="w-full h-full object-cover rounded-lg mb-2"
                />
                <span className="text-lg font-medium">1 этаж</span>
              </button>
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, floors: '2 этажа' }));
                  handleNext();
                }}
                className="aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600"
              >
                <img
                  src="https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg"
                  alt="2 этажа"
                  className="w-full h-full object-cover rounded-lg mb-2"
                />
                <span className="text-lg font-medium">2 этажа</span>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Выберите высоту {formData.floors === '2 этажа' ? 'первого этажа' : 'этажа'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {['2,5 метра', '2,8 метра', '3 метра'].map((height) => (
                <button
                  key={height}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, firstFloorHeight: height }));
                    handleNext();
                  }}
                  className="p-4 border-2 rounded-xl transition-colors hover:border-primary-600 sm:aspect-square flex sm:block items-center justify-between sm:justify-start"
                >
                  <img
                    src="https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp"
                    alt={height}
                    className="hidden sm:block w-full h-full object-cover rounded-lg mb-2"
                  />
                  <span className="text-lg font-medium">{height}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return formData.floors === '2 этажа' ? (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Выберите высоту второго этажа
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {['2,5 метра', '2,8 метра', '3 метра'].map((height) => (
                <button
                  key={height}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, secondFloorHeight: height }));
                    handleNext();
                  }}
                  className="p-4 border-2 rounded-xl transition-colors hover:border-primary-600 sm:aspect-square flex sm:block items-center justify-between sm:justify-start"
                >
                  <img
                    src="https://hotwell.kz/wp-content/uploads/2022/09/001-1.jpg.webp"
                    alt={height}
                    className="hidden sm:block w-full h-full object-cover rounded-lg mb-2"
                  />
                  <span className="text-lg font-medium">{height}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Выберите тип крыши
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {['1-скатная', '2-скатная', '4-скатная'].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, roofType: type }));
                    handleNext();
                  }}
                  className="aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600"
                >
                  <img
                    src={
                      type === '1-скатная'
                        ? 'https://hotwell.kz/kz/wp-content/uploads/sites/8/2023/07/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-WhatsApp-2024-11-04-%D0%B2-02.07.54_4f51f039.jpg'
                        : type === '2-скатная'
                        ? 'https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg'
                        : 'https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg'
                    }
                    alt={type}
                    className="w-full h-full object-cover rounded-lg mb-2"
                  />
                  <span className="text-lg font-medium">{type}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Выберите форму дома
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {['Простая форма', 'Сложная форма'].map((shape) => (
                <button
                  key={shape}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, houseShape: shape }));
                    handleNext();
                  }}
                  className="aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600"
                >
                  <img
                    src={
                      shape === 'Простая форма'
                        ? 'https://hotwell.kz/wp-content/uploads/2022/09/001-Novinka-Ekonom-3.jpg'
                        : 'https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg'
                    }
                    alt={shape}
                    className="w-full h-full object-cover rounded-lg mb-2"
                  />
                  <span className="text-lg font-medium">{shape}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        const calculatePrice = () => {
          // Add your price calculation logic here
          return 8238500;
        };

        const totalPrice = calculatePrice();
        const foundation = Math.round(totalPrice * 0.14);
        const houseKit = Math.round(totalPrice * 0.71);
        const assembly = Math.round(totalPrice * 0.15);

        return (
          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary-600" />
                  <span>Стоимость фундамента:</span>
                </div>
                <span>{foundation.toLocaleString()} тг</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary-600" />
                  <span>Стоимость домокомплекта:</span>
                </div>
                <span>{houseKit.toLocaleString()} тг</span>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary-600" />
                  <span>Стоимость монтажа:</span>
                </div>
                <span>{assembly.toLocaleString()} тг</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Итого:</span>
                <span className="text-lg font-bold text-primary-600">
                  {totalPrice.toLocaleString()} тг
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                const phone = "77772282323";
                const message = `Здравствуйте! Меня интересует строительство дома:\n
Площадь: ${formData.area} м²\n
Этажность: ${formData.floors}\n
Высота 1-го этажа: ${formData.firstFloorHeight}\n
${formData.floors === '2 этажа' ? `Высота 2-го этажа: ${formData.secondFloorHeight}\n` : ''}
Тип крыши: ${formData.roofType}\n
Форма дома: ${formData.houseShape}\n
Общая стоимость: ${totalPrice.toLocaleString()} тг`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
            >
              Получить точный расчет
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-4">
            Рассчитайте стоимость строительства Вашего дома
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
            Пройдите все шаги для получения точного расчета
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Калькулятор стоимости
              </h2>
              <span className="text-sm text-gray-600">
                Шаг {currentStep + 1} из 6
              </span>
            </div>
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="text-primary-600 hover:text-primary-700 mb-4"
              >
                Назад
              </button>
            )}
            <div className="h-2 bg-gray-100 rounded-full">
              <div 
                className="h-full bg-primary-600 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / 6) * 100}%` }}
              />
            </div>
          </div>

          {renderStepContent()}
        </div>
      </div>
    </section>
  );
}