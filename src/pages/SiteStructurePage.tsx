import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, FileText } from 'lucide-react';
import SEO from '../components/SEO';

const routes = [
  { path: '/', name: 'Главная' },
  { path: '/projects', name: 'Проекты' },
  { path: '/modular-homes', name: 'Модульные дома' },
  { path: '/house-kits', name: 'Домокомплекты' },
  { path: '/sip-panels', name: 'СИП панели' },
  { path: '/sip-panels-almaty', name: 'СИП панели Алматы' },
  { path: '/prices', name: 'Цены' },
  { path: '/calculator', name: 'Калькулятор' },
  { path: '/news', name: 'Новости' },
  { path: '/about', name: 'О нас' },
  { path: '/karkasnye-doma', name: 'Каркасные дома' },
  { path: '/karkasnye-doma-cena', name: 'Каркасные дома цена' },
  { path: '/stoimost-stroitelstva-doma', name: 'Стоимость строительства' },
  { path: '/postroit-dom-almaty', name: 'Построить дом в Алматы' },
  { path: '/kak-postroit-derevyannyj-dom', name: 'Как построить деревянный дом' },
  { path: '/skolko-stoit-postroit-dom-samomu', name: 'Сколько стоит построить дом самому' },
  { path: '/finskie-doma', name: 'Финские дома' },
  { path: '/derevyannye-doma-almaty', name: 'Деревянные дома в Алматы' },
  { path: '/doma-iz-brusa-almaty', name: 'Дома из бруса в Алматы' },
  { path: '/proekty-domov-iz-sip-panelej-do-100m2', name: 'Проекты домов из СИП панелей до 100м2' },
  { path: '/site-structure', name: 'Структура сайта' }
];

export default function SiteStructurePage() {
  const location = useLocation();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SEO 
          title="Структура сайта - Карта всех страниц"
          description="Полная структура сайта компании Доступный Дом. Карта всех страниц и разделов для удобной навигации."
          keywords="структура сайта, карта сайта, навигация, страницы сайта"
          h1="Структура Сайта"
        />

        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Полная карта страниц и разделов нашего сайта
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid gap-8">
            {routes.map((route, index) => (
              <Link
                key={index}
                to={route.path}
                className={`flex items-center p-4 rounded-xl transition-colors ${
                  location.pathname === route.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'hover:bg-gray-50'
                }`}
              >
                <FileText className="h-5 w-5 mr-3 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-lg font-medium">{route.name}</h3>
                  <p className="text-sm text-gray-500">{route.path}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-primary-50 rounded-xl p-6">
          <p className="text-sm text-gray-600 text-center">
            Структура сайта обновляется автоматически при добавлении новых страниц
          </p>
        </div>
      </div>
    </div>
  );
}