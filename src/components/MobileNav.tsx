import React from 'react';
import { Menu, Phone, MessageCircle, LayoutGrid, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileNavProps {
  onMenuClick: () => void;
}

export default function MobileNav({ onMenuClick }: MobileNavProps) {
  const handleWhatsAppClick = () => {
    const phone = "77772282323";
    const message = "Здравствуйте, я хотел бы получить консультацию.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-secondary-200 md:hidden z-50">
      <div className="grid grid-cols-5 gap-1">
        <Link
          to="/projects"
          className="flex flex-col items-center justify-center p-3 text-primary-600 hover:text-primary-700"
        >
          <LayoutGrid className="h-6 w-6" />
          <span className="text-xs mt-1">Проекты</span>
        </Link>
        
        <Link
          to="/calculator"
          className="flex flex-col items-center justify-center p-3 text-primary-600 hover:text-primary-700"
        >
          <Calculator className="h-6 w-6" />
          <span className="text-xs mt-1">Расчет</span>
        </Link>
        
        <button
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center p-3 text-primary-600 hover:text-primary-700"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs mt-1">WhatsApp</span>
        </button>
        
        <a
          href="tel:+77772282323"
          className="flex flex-col items-center justify-center p-3 text-primary-600 hover:text-primary-700"
        >
          <Phone className="h-6 w-6" />
          <span className="text-xs mt-1">Звонок</span>
        </a>
        
        <button
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center p-3 text-primary-600 hover:text-primary-700"
        >
          <Menu className="h-6 w-6" />
          <span className="text-xs mt-1">Меню</span>
        </button>
      </div>
    </div>
  );
}