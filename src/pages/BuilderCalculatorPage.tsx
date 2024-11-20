import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import { Calculator, Building2, Package, Wrench } from 'lucide-react';

interface CalculatorState {
  area: string;
  floors: string;
  wallsType: string;
  roofType: string;
  foundation: string;
}

// Базовые расценки за м²
const getBaseWorkPrice = (area: number): number => {
  if (area <= 50) return 12000;
  if (area <= 100) return 10000;
  if (area <= 150) return 9000;
  if (area <= 200) return 8500;
  return 8000;
};

// Коэффициенты сложности
const getFloorsCoefficient = (floors: string): number => {
  return floors === '2 этажа' ? 1.3 : 1;
};

const getWallsCoefficient = (type: string): number => {
  switch (type) {
    case 'Стандартные стены':
      return 1;
    case 'Сложные стены':
      return 1.2;
    case 'Премиум стены':
      return 1.4;
    default:
      return 1;
  }
};

const getRoofCoefficient = (type: string): number => {
  switch (type) {
    case '1-скатная':
      return 1;
    case '2-скатная':
      return 1.2;
    case '4-скатная':
      return 1.4;
    default:
      return 1;
  }
};

const getFoundationCoefficient = (type: string): number => {
  switch (type) {
    case 'Ленточный':
      return 1;
    case 'Плита':
      return 1.3;
    case 'Свайный':
      return 1.1;
    default:
      return 1;
  }
};

export default function BuilderCalculatorPage() {
  const [formData, setFormData] = useState<CalculatorState>({
    area: '',
    floors: '1 этаж',
    wallsType: 'Стандартные стены',
    roofType: '1-скатная',
    foundation: 'Ленточный'
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePerSqm, setPricePerSqm] = useState(0);

  const calculatePrice = () => {
    const area = parseFloat(formData.area) || 0;
    if (area < 10 || area > 1500) {
      setPricePerSqm(0);
      setTotalPrice(0);
      return;
    }

    let price = getBaseWorkPrice(area);
    price *= getFloorsCoefficient(formData.floors);
    price *= getWallsCoefficient(formData.wallsType);
    price *= getRoofCoefficient(formData.roofType);
    price *= getFoundationCoefficient(formData.foundation);

    setPricePerSqm(price);
    setTotalPrice(price * area);
  };

  useEffect(() => {
    calculatePrice();
  }, [formData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "77772282323";
    const message = `Здравствуйте! Меня интересует расчет стоимости работ:\n
Площадь: ${formData.area} м²\n
Этажность: ${formData.floors}\n
Тип стен: ${formData.wallsType}\n
Тип крыши: ${formData.roofType}\n
Тип фундамента: ${formData.foundation}\n
Стоимость за м²: ${pricePerSqm.toLocaleString()} тг\n
Общая стоимость: ${totalPrice.toLocaleString()} тг`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-64">
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Калькулятор работ строителей - Расчет стоимости"
              description="Калькулятор стоимости работ по строительству домов из СИП панелей"
              keywords="калькулятор строительных работ, стоимость работ, расценки строителей"
              h1="Калькулятор работ строителей"
            />

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <Calculator className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Расчет стоимости работ
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
                    value={formData.area}
                    onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
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
                    value={formData.floors}
                    onChange={(e) => setFormData(prev => ({ ...prev, floors: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="1 этаж">1 этаж</option>
                    <option value="2 этажа">2 этажа</option>
                  </select>
                </div>

                {/* Walls Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип стен
                  </label>
                  <select
                    value={formData.wallsType}
                    onChange={(e) => setFormData(prev => ({ ...prev, wallsType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Стандартные стены">Стандартные стены</option>
                    <option value="Сложные стены">Сложные стены</option>
                    <option value="Премиум стены">Премиум стены</option>
                  </select>
                </div>

                {/* Roof Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип крыши
                  </label>
                  <select
                    value={formData.roofType}
                    onChange={(e) => setFormData(prev => ({ ...prev, roofType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="1-скатная">1-скатная</option>
                    <option value="2-скатная">2-скатная</option>
                    <option value="4-скатная">4-скатная</option>
                  </select>
                </div>

                {/* Foundation Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип фундамента
                  </label>
                  <select
                    value={formData.foundation}
                    onChange={(e) => setFormData(prev => ({ ...prev, foundation: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Ленточный">Ленточный</option>
                    <option value="Плита">Плита</option>
                    <option value="Свайный">Свайный</option>
                  </select>
                </div>

                {/* Price Display */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="grid gap-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Стоимость за м²:</span>
                      <span className="font-semibold">{pricePerSqm.toLocaleString()} тг/м²</span>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="grid gap-3 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary-600" />
                          <span>Работы по фундаменту:</span>
                        </div>
                        <span>{Math.round(totalPrice * 0.3).toLocaleString()} тг</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-2">
                          <Package className="h-5 w-5 text-primary-600" />
                          <span>Монтаж стен и перекрытий:</span>
                        </div>
                        <span>{Math.round(totalPrice * 0.4).toLocaleString()} тг</span>
                      </div>
                      <div className="flex items-center justify-between text-gray-600">
                        <div className="flex items-center gap-2">
                          <Wrench className="h-5 w-5 text-primary-600" />
                          <span>Кровельные работы:</span>
                        </div>
                        <span>{Math.round(totalPrice * 0.3).toLocaleString()} тг</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-lg font-bold text-gray-900">Итого:</span>
                      <span className="text-lg font-bold text-primary-600">
                        {totalPrice.toLocaleString()} тг
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
      </div>
    </div>
  );
}
