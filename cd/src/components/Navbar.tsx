import React from 'react';
import { Link } from 'react-router-dom';
import { X, Building2, Phone, Menu, Wallet } from 'lucide-react';

interface NavbarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const handleWhatsAppClick = () => {
    const phone = "77772282323";
    const message = "Здравствуйте! Я хотел бы получить консультацию.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-secondary-800">Доступный Дом</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button and Phone (visible only on mobile) */}
          <div className="flex items-center md:hidden">
            <a 
              href="tel:+77772282323"
              className="mr-4 flex items-center text-primary-600"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Главная
            </Link>
            <Link 
              to="/projects" 
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Проекты
            </Link>
            <Link 
              to="/modular-homes" 
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Модульные дома
            </Link>
            <Link 
              to="/prices" 
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Цены
            </Link>
            <Link 
              to="/news" 
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              Новости
            </Link>
            <Link 
              to="/about"
              className="text-secondary-600 hover:text-primary-600 transition-colors"
            >
              О нас
            </Link>
            <Link
              to="/accounting"
              className="text-secondary-600 hover:text-primary-600 transition-colors flex items-center gap-2"
              title="Бухгалтерия компании"
            >
              <Wallet className="h-5 w-5" />
            </Link>
            <a 
              href="tel:+77772282323"
              className="flex items-center text-secondary-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-5 w-5 mr-1" />
              +7 (777) 228-23-23
            </a>
            <button 
              onClick={handleWhatsAppClick}
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Проекты
            </Link>
            <Link 
              to="/modular-homes" 
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Модульные дома
            </Link>
            <Link 
              to="/prices" 
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Цены
            </Link>
            <Link 
              to="/news" 
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Новости
            </Link>
            <Link 
              to="/about"
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/accounting"
              className="block px-3 py-2 text-secondary-600 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center">
                <Wallet className="h-5 w-5 mr-2" />
                Бухгалтерия компании
              </div>
            </Link>
            <button 
              className="w-full text-left px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
              onClick={() => {
                setIsOpen(false);
                handleWhatsAppClick();
              }}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
