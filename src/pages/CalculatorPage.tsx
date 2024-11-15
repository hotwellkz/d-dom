import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Calculator, Building2, Package, Wrench } from 'lucide-react';
import HomeCalculatorSteps from '../components/HomeCalculatorSteps';

interface CalculatorState {
  area: string;
  floors: string;
  firstFloorHeight: string;
  secondFloorHeight: string;
  roofType: string;
  houseShape: string;
}

interface CostBreakdown {
  foundation: number;
  houseKit: number;
  assembly: number;
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

const getFloorPrice = (floors: string): number => {
  return floors === '1 этаж' ? 7295 : 1619;
};

const getFirstFloorHeightPrice = (height: string): number => {
  switch (height) {
    case '2,8 метра': return 3798;
    case '3 метра': return 5290;
    default: return 0;
  }
};

const getSecondFloorHeightPrice = (height: string): number => {
  switch (height) {
    case '2,8 метра': return 3798;
    case '3 метра': return 5290;
    default: return 0;
  }
};

const getRoofTypePrice = (type: string, floors: string): number => {
  if (type === '2-скатная') return 1616;
  if (type === '4-скатная') {
    return floors === '1 этаж' ? 7085 : 4723;
  }
  return 0;
};

const getHouseShapePrice = (shape: string): number => {
  return shape === 'Сложная форма' ? 4676 : 0;
};

const calculateCostBreakdown = (totalPrice: number): CostBreakdown => {
  return {
    foundation: Math.round(totalPrice * 0.14), // 14% of total
    houseKit: Math.round(totalPrice * 0.71), // 71% of total
    assembly: Math.round(totalPrice * 0.15), // 15% of total
  };
};

export default function CalculatorPage() {
  const [formData, setFormData] = useState<CalculatorState>({
    area: '',
    floors: '1 этаж',
    firstFloorHeight: '2,5 метра',
    secondFloorHeight: '2,5 метра',
    roofType: '1-скатная',
    houseShape: 'Простая форма'
  });

  const [pricePerSqm, setPricePerSqm] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [costBreakdown, setCostBreakdown] = useState<CostBreakdown>({
    foundation: 0,
    houseKit: 0,
    assembly: 0
  });

  const calculatePrice = () => {
    const area = parseFloat(formData.area) || 0;
    if (area < 10 || area > 1500) {
      setPricePerSqm(0);
      setTotalPrice(0);
      setCostBreakdown({ foundation: 0, houseKit: 0, assembly: 0 });
      return;
    }

    let price = getBasePricePerSqm(area);

    // Add floor price
    price += getFloorPrice(formData.floors);

    // Add height prices
    price += getFirstFloorHeightPrice(formData.firstFloorHeight);
    if (formData.floors === '2 этажа') {
      price += getSecondFloorHeightPrice(formData.secondFloorHeight);
    }

    // Add roof and shape prices
    price += getRoofTypePrice(formData.roofType, formData.floors);
    price += getHouseShapePrice(formData.houseShape);

    const total = price * area;
    setPricePerSqm(price);
    setTotalPrice(total);
    setCostBreakdown(calculateCostBreakdown(total));
  };

  useEffect(() => {
    calculatePrice();
  }, [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "77772282323";
    const message = `Здравствуйте! Меня интересует строительство дома:\n
Площадь: ${formData.area} м²\n
Этажность: ${formData.floors}\n
Высота 1-го этажа: ${formData.firstFloorHeight}\n
${formData.floors === '2 этажа' ? `Высота 2-го этажа: ${formData.secondFloorHeight}\n` : ''}
Тип крыши: ${formData.roofType}\n
Форма дома: ${formData.houseShape}\n
Стоимость за м²: ${pricePerSqm.toLocaleString()} тг\n
Общая стоимость: ${totalPrice.toLocaleString()} тг\n
Стоимость фундамента: ${costBreakdown.foundation.toLocaleString()} тг\n
Стоимость домокомплекта: ${costBreakdown.houseKit.toLocaleString()} тг\n
Стоимость монтажа: ${costBreakdown.assembly.toLocaleString()} тг`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString() + ' тг';
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Калькулятор стоимости строительства дома из СИП панелей"
          description="Рассчитайте стоимость строительства дома из СИП панелей онлайн. ✓ Точный расчет ✓ Учет всех параметров ✓ Мгновенный результат"
          keywords="калькулятор строительства, расчет стоимости дома, СИП панели калькулятор, цена дома из СИП панелей"
        />

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">
            Калькулятор стоимости строительства
          </h1>
        </div>

        <HomeCalculatorSteps />

        <div className="text-center my-20">
          <h2 className="text-3xl font-bold text-gray-900">
            Более подробный калькулятор
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <Calculator className="h-8 w-8 text-primary-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              Расчет стоимости строительства
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Area Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Площадь застройки (10-1500 м²) *
              </label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                min="10"
                max="1500"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            {/* Floors Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Количество этажей
              </label>
              <select
                name="floors"
                value={formData.floors}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="1 этаж">1 этаж</option>
                <option value="2 этажа">2 этажа</option>
              </select>
            </div>

            {/* First Floor Height */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Высота первого этажа
              </label>
              <select
                name="firstFloorHeight"
                value={formData.firstFloorHeight}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="2,5 метра">2,5 метра</option>
                <option value="2,8 метра">2,8 метра</option>
                <option value="3 метра">3 метра</option>
              </select>
            </div>

            {/* Second Floor Height (only if 2 floors selected) */}
            {formData.floors === '2 этажа' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Высота второго этажа
                </label>
                <select
                  name="secondFloorHeight"
                  value={formData.secondFloorHeight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="2,5 метра">2,5 метра</option>
                  <option value="2,8 метра">2,8 метра</option>
                  <option value="3 метра">3 метра</option>
                </select>
              </div>
            )}

            {/* Roof Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Тип крыши
              </label>
              <select
                name="roofType"
                value={formData.roofType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="1-скатная">1-скатная</option>
                <option value="2-скатная">2-скатная</option>
                <option value="4-скатная">4-скатная</option>
              </select>
            </div>

            {/* House Shape */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Форма дома
              </label>
              <select
                name="houseShape"
                value={formData.houseShape}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="Простая форма">Простая форма</option>
                <option value="Сложная форма">Сложная форма</option>
              </select>
            </div>

            {/* Price Display */}
            <div className="pt-8 border-t border-gray-200">
              <div className="grid gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Стоимость за м²:</span>
                  <span className="font-semibold">{formatPrice(pricePerSqm)}</span>
                </div>

                {/* Cost Breakdown */}
                <div className="grid gap-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary-600" />
                      <span>Стоимость фундамента:</span>
                    </div>
                    <span>{formatPrice(costBreakdown.foundation)}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary-600" />
                      <span>Стоимость домокомплекта:</span>
                    </div>
                    <span>{formatPrice(costBreakdown.houseKit)}</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary-600" />
                      <span>Стоимость монтажа:</span>
                    </div>
                    <span>{formatPrice(costBreakdown.assembly)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">Итого:</span>
                  <span className="text-lg font-bold text-primary-600">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
            >
              Получить точный расчет
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500 text-center">
            * Расчет является предварительным. Для получения точной стоимости свяжитесь с нашими специалистами.
          </p>
        </div>
      </div>
    </div>
  );
}