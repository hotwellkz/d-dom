import React, { useState } from 'react';
import SEO from '../components/SEO';
import AccountingSidebar from '../components/AccountingSidebar';
import { Building2, Package, Wrench } from 'lucide-react';

interface CalculatorState {
  area: string;
  wallsType: string;
  foundationType: string;
  roofType: string;
  finishType: string;
}

const getBasePricePerSqm = (area: number): number => {
  if (area <= 50) return 25000;
  if (area <= 100) return 22000;
  if (area <= 150) return 20000;
  if (area <= 200) return 18000;
  return 16000;
};

export default function BuilderCalculatorPage() {
  const [formData, setFormData] = useState<CalculatorState>({
    area: '',
    wallsType: 'sip',
    foundationType: 'strip',
    roofType: 'single',
    finishType: 'standard'
  });

  const calculatePrice = () => {
    const area = parseFloat(formData.area) || 0;
    if (area <= 0) return 0;

    let basePrice = getBasePricePerSqm(area);

    // Коэффициенты для разных типов стен
    const wallsCoefficient = {
      sip: 1,
      brick: 1.4,
      block: 1.2
    }[formData.wallsType];

    // Коэффициенты для разных типов фундамента
    const foundationCoefficient = {
      strip: 1,
      pile: 0.9,
      slab: 1.3
    }[formData.foundationType];

    // Коэффициенты для разных типов крыши
    const roofCoefficient = {
      single: 1,
      double: 1.2,
      complex: 1.4
    }[formData.roofType];

    // Коэффициенты для разных типов отделки
    const finishCoefficient = {
      standard: 1,
      improved: 1.3,
      premium: 1.6
    }[formData.finishType];

    return basePrice * area * wallsCoefficient * foundationCoefficient * roofCoefficient * finishCoefficient;
  };

  const totalPrice = calculatePrice();

  return (
    <div className="min-h-screen">
      <AccountingSidebar />
      <div className="pl-0 md:pl-64 transition-all duration-300">
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SEO 
              title="Калькулятор работ - Бухгалтерия компании"
              description="Расчет стоимости строительных работ"
              keywords="калькулятор работ, расчет стоимости, строительство"
              h1="Калькулятор строительных работ"
            />

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-8">
                <Building2 className="h-8 w-8 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Расчет стоимости работ
                </h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Площадь объекта (м²)
                  </label>
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => setFormData(prev => ({ ...prev, area: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип стен
                  </label>
                  <select
                    value={formData.wallsType}
                    onChange={(e) => setFormData(prev => ({ ...prev, wallsType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="sip">СИП панели</option>
                    <option value="brick">Кирпич</option>
                    <option value="block">Блоки</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип фундамента
                  </label>
                  <select
                    value={formData.foundationType}
                    onChange={(e) => setFormData(prev => ({ ...prev, foundationType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="strip">Ленточный</option>
                    <option value="pile">Свайный</option>
                    <option value="slab">Плита</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип крыши
                  </label>
                  <select
                    value={formData.roofType}
                    onChange={(e) => setFormData(prev => ({ ...prev, roofType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="single">Односкатная</option>
                    <option value="double">Двускатная</option>
                    <option value="complex">Сложная</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип отделки
                  </label>
                  <select
                    value={formData.finishType}
                    onChange={(e) => setFormData(prev => ({ ...prev, finishType: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="standard">Стандарт</option>
                    <option value="improved">Улучшенная</option>
                    <option value="premium">Премиум</option>
                  </select>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary-600" />
                        <span>Стоимость работ:</span>
                      </div>
                      <span>{Math.round(totalPrice * 0.3).toLocaleString()} ₸</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <div className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary-600" />
                        <span>Стоимость материалов:</span>
                      </div>
                      <span>{Math.round(totalPrice * 0.7).toLocaleString()} ₸</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4">
                    <span className="text-lg font-bold text-gray-900">Итого:</span>
                    <span className="text-lg font-bold text-primary-600">
                      {totalPrice.toLocaleString()} ₸
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const phone = "77772282323";
                    const message = `Здравствуйте! Меня интересует расчет стоимости работ:\n
Площадь: ${formData.area} м²\n
Тип стен: ${formData.wallsType}\n
Тип фундамента: ${formData.foundationType}\n
Тип крыши: ${formData.roofType}\n
Тип отделки: ${formData.finishType}\n
Общая стоимость: ${totalPrice.toLocaleString()} ₸`;
                    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
                >
                  Получить точный расчет
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
