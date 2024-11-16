import React, { useState } from 'react';
import { Calculator, Building2, Package, Wrench } from 'lucide-react';

interface CalculatorState {
  area: string;
  floors: string;
  firstFloorHeight: string;
  secondFloorHeight: string;
  roofType: string;
  houseShape: string;
}

const getBasePricePerSqm = (area: number): number => {
  if (area >= 10 && area <= 24) return 131772;
  if (area >= 25 && area <= 49) return 109586;
  if (area >= 50 && area <= 74) return 89981;
  if (area >= 75 && area <= 99) return 86163;
  if (area >= 100 && area <= 149) return 75352;
  if (area >= 150 && area <= 199) return 65361;
  if (area >= 200 && area <= 249) return 61000;
  if (area >= 250 && area <= 299) return 56641;
  if (area >= 300 && area <= 349) return 56091;
  if (area >= 350 && area <= 399) return 54991;
  if (area >= 400 && area <= 499) return 53891;
  if (area >= 500 && area <= 1500) return 52791;
  return 0;
};

const calculatePrice = (formData: CalculatorState): number => {
  const area = parseFloat(formData.area) || 0;
  if (area < 10 || area > 1500) return 0;

  let pricePerSqm = getBasePricePerSqm(area);

  // Add floor price
  if (formData.floors === '1 этаж') {
    pricePerSqm += 7295;
  } else if (formData.floors === '2 этажа') {
    pricePerSqm += 1619;
  }

  // Add first floor height price
  if (formData.firstFloorHeight === '2,8 метра') {
    pricePerSqm += 3798;
  } else if (formData.firstFloorHeight === '3 метра') {
    pricePerSqm += 5290;
  }

  // Add second floor height price for 2-story buildings
  if (formData.floors === '2 этажа') {
    if (formData.secondFloorHeight === '2,8 метра') {
      pricePerSqm += 3798;
    } else if (formData.secondFloorHeight === '3 метра') {
      pricePerSqm += 5290;
    }
  }

  // Add roof price
  if (formData.roofType === '2-скатная') {
    pricePerSqm += 1616;
  } else if (formData.roofType === '4-скатная') {
    pricePerSqm += formData.floors === '1 этаж' ? 7085 : 4723;
  }

  // Add house shape price
  if (formData.houseShape === 'Сложная форма') {
    pricePerSqm += 4676;
  }

  return pricePerSqm * area;
};

const calculateCostBreakdown = (totalPrice: number) => {
  return {
    foundation: Math.round(totalPrice * 0.14),
    houseKit: Math.round(totalPrice * 0.71),
    assembly: Math.round(totalPrice * 0.15)
  };
};

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
              {['1 этаж', '2 этажа'].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, floors: option }));
                    handleNext();
                  }}
                  className="aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600"
                >
                  <img
                    src={option === '1 этаж' 
                      ? 'https://hotwell.kz/wp-content/uploads/2022/09/sip-doma.jpg'
                      : 'https://hotwell.kz/wp-content/uploads/2022/09/B-157-1.jpg'
                    }
                    alt={option}
                    className="w-full h-full object-cover rounded-lg mb-2"
                  />
                  <span className="text-lg font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        if (formData.floors === '2 этажа') {
          return (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Выберите высоту этажей
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-3">Высота первого этажа:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['2,5 метра', '2,8 метра', '3 метра'].map((height) => (
                      <button
                        key={height}
                        onClick={() => setFormData(prev => ({ ...prev, firstFloorHeight: height }))}
                        className={`p-4 border-2 rounded-xl transition-colors hover:border-primary-600 ${
                          formData.firstFloorHeight === height ? 'border-primary-600 bg-primary-50' : ''
                        }`}
                      >
                        <span className="text-lg font-medium">{height}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-700 mb-3">Высота второго этажа:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {['2,5 метра', '2,8 метра', '3 метра'].map((height) => (
                      <button
                        key={height}
                        onClick={() => setFormData(prev => ({ ...prev, secondFloorHeight: height }))}
                        className={`p-4 border-2 rounded-xl transition-colors hover:border-primary-600 ${
                          formData.secondFloorHeight === height ? 'border-primary-600 bg-primary-50' : ''
                        }`}
                      >
                        <span className="text-lg font-medium">{height}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={handleNext}
                disabled={!formData.firstFloorHeight || !formData.secondFloorHeight}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Далее
              </button>
            </div>
          );
        } else {
          return (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Выберите высоту этажа
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['2,5 метра', '2,8 метра', '3 метра'].map((height) => (
                  <button
                    key={height}
                    onClick={() => setFormData(prev => ({ ...prev, firstFloorHeight: height }))}
                    className={`p-4 border-2 rounded-xl transition-colors hover:border-primary-600 ${
                      formData.firstFloorHeight === height ? 'border-primary-600 bg-primary-50' : ''
                    }`}
                  >
                    <span className="text-lg font-medium">{height}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={handleNext}
                disabled={!formData.firstFloorHeight}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Далее
              </button>
            </div>
          );
        }

      case 3:
        return (
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Выберите тип крыши
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {['1-скатная', '2-скатная', '4-скатная'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData(prev => ({ ...prev, roofType: type }))}
                  className={`aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600 ${
                    formData.roofType === type ? 'border-primary-600' : ''
                  }`}
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
            <button
              onClick={handleNext}
              disabled={!formData.roofType}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Далее
            </button>
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
                  onClick={() => setFormData(prev => ({ ...prev, houseShape: shape }))}
                  className={`aspect-square p-4 border-2 rounded-xl transition-colors hover:border-primary-600 ${
                    formData.houseShape === shape ? 'border-primary-600' : ''
                  }`}
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
            <button
              onClick={handleNext}
              disabled={!formData.houseShape}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Далее
            </button>
          </div>
        );

      case 5:
        const totalPrice = calculatePrice(formData);
        const area = parseFloat(formData.area) || 0;
        const pricePerSqm = area > 0 ? totalPrice / area : 0;
        const { foundation, houseKit, assembly } = calculateCostBreakdown(totalPrice);

        return (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-gray-900 mb-3">Выбранные параметры:</h4>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Площадь:</span>
                  <span className="font-medium">{formData.area} м²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Этажность:</span>
                  <span className="font-medium">{formData.floors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Высота 1-го этажа:</span>
                  <span className="font-medium">{formData.firstFloorHeight}</span>
                </div>
                {formData.floors === '2 этажа' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Высота 2-го этажа:</span>
                    <span className="font-medium">{formData.secondFloorHeight}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Тип крыши:</span>
                  <span className="font-medium">{formData.roofType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Форма дома:</span>
                  <span className="font-medium">{formData.houseShape}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-gray-900 font-medium">Стоимость за м²:</span>
                  <span className="font-bold text-primary-600">{pricePerSqm.toLocaleString()} тг/м²</span>
                </div>
              </div>
            </div>

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
Стоимость за м²: ${pricePerSqm.toLocaleString()} тг/м²\n
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