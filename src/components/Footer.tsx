import React from 'react';
import { Building2, Instagram, Phone, Mail, MapPin, Calculator, Youtube, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleWhatsAppClick = () => {
    const phone = "77772282323";
    const message = "Здравствуйте, я хотел бы получить консультацию.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-secondary-800 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Building2 className="h-8 w-8 text-primary-300" />
              <span className="ml-2 text-xl font-bold">Доступный Дом</span>
            </div>
            <p className="text-secondary-200">
              Производство СИП панелей и строительство современных домов в Казахстане
            </p>
          </div>
          
          {/* Navigation Column 1 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-neutral-100">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-secondary-200 hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/projects" className="text-secondary-200 hover:text-white transition-colors">Проекты</Link></li>
              <li><Link to="/modular-homes" className="text-secondary-200 hover:text-white transition-colors">Модульные дома</Link></li>
              <li><Link to="/karkasnye-doma" className="text-secondary-200 hover:text-white transition-colors">Каркасные дома</Link></li>
              <li><Link to="/calculator" className="text-secondary-200 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                <Calculator className="h-4 w-4" />
                Калькулятор
              </Link></li>
              <li><Link to="/about" className="text-secondary-200 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/careers" className="text-secondary-200 hover:text-white transition-colors">Вакансии</Link></li>
              <li><Link to="/site-structure" className="text-secondary-200 hover:text-white transition-colors">Структура сайта</Link></li>
            </ul>
          </div>

          {/* Navigation Column 2 */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-neutral-100">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/stoimost-stroitelstva-doma" className="text-secondary-200 hover:text-white transition-colors">Стоимость строительства</Link></li>
              <li><Link to="/postroit-dom-almaty" className="text-secondary-200 hover:text-white transition-colors">Построить дом в Алматы</Link></li>
              <li><Link to="/kak-postroit-derevyannyj-dom" className="text-secondary-200 hover:text-white transition-colors">Как построить деревянный дом</Link></li>
              <li><Link to="/skolko-stoit-postroit-dom-samomu" className="text-secondary-200 hover:text-white transition-colors">Сколько стоит построить дом самому</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-neutral-100 text-center md:text-left">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start text-secondary-200">
                <Phone className="h-5 w-5 mr-2" />
                <a 
                  href="tel:+77772282323"
                  className="hover:text-white transition-colors"
                >
                  +7 (777) 228-23-23
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-secondary-200">
                <Mail className="h-5 w-5 mr-2" />
                <a 
                  href="mailto:info@dostupnydom.kz"
                  className="hover:text-white transition-colors"
                >
                  info@dostupnydom.kz
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start text-secondary-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>г. Алматы, ул. Рыскулова, 232/3</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Media and Copyright */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <svg 
                  className="h-6 w-6" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors">
                <Smartphone className="h-6 w-6" />
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-lg shadow-primary-900/20"
              >
                <Phone className="h-5 w-5" />
                WhatsApp
              </button>
            </div>
            <p className="text-secondary-300 text-center">
              &copy; {new Date().getFullYear()} Доступный Дом. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}