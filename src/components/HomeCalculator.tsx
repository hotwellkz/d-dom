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

export default function HomeCalculator() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">Рассчитайте стоимость дома</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Используйте наш онлайн калькулятор для расчета стоимости строительства дома из СИП панелей
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://hotwell.kz/wp-content/uploads/2022/09/205.jpg"
              alt="Калькулятор стоимости"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-2 text-primary-600">
                <Calculator className="h-6 w-6" />
                <span className="text-lg font-bold">Точный расчет</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    Учет всех параметров
                  </h3>
                  <p className="text-secondary-600">
                    Площадь, этажность, тип крыши и другие характеристики
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Package className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    Детальная смета
                  </h3>
                  <p className="text-secondary-600">
                    Стоимость материалов, работ и фундамента
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Wrench className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-1">
                    Мгновенный результат
                  </h3>
                  <p className="text-secondary-600">
                    Расчет стоимости за несколько секунд
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/calculator"
              className="mt-8 w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30 flex items-center justify-center gap-2"
            >
              <Calculator className="h-5 w-5" />
              Рассчитать стоимость
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}