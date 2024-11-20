import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  User,
  Mail,
  Receipt,
  PieChart,
  History,
  Star,
  MessageSquare,
  Settings,
  HelpCircle,
  RefreshCw
} from 'lucide-react';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path?: string;
  onClick?: () => void;
}

const menuItems: MenuItem[] = [
  {
    icon: <User className="h-5 w-5" />,
    label: 'Профиль',
    path: '/accounting'
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Лента',
    path: '/accounting/feed'
  },
  {
    icon: <Receipt className="h-5 w-5" />,
    label: 'Отчет по дням',
    path: '/accounting/daily-report'
  },
  {
    icon: <PieChart className="h-5 w-5" />,
    label: 'Общая'
  },
  {
    icon: <History className="h-5 w-5" />,
    label: 'История'
  },
  {
    icon: <Star className="h-5 w-5" />,
    label: 'Оценить нас'
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    label: 'Распределите СМС'
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: 'Настройки'
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    label: 'Помощь'
  }
];

export default function AccountingSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 bg-white h-full fixed left-0 top-0 pt-20 shadow-lg">
      <div className="px-4 py-6">
        <nav className="space-y-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
                item.path && location.pathname === item.path ? 'bg-gray-100' : ''
              }`}
              onClick={() => item.path ? navigate(item.path) : item.onClick?.()}
            >
              <span className="text-primary-600">
                {item.icon}
              </span>
              <span className="ml-3 text-sm font-medium">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="flex items-center text-sm text-gray-500">
          <RefreshCw className="h-4 w-4 mr-2" />
          <span>Сегодня, {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
}
