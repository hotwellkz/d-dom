import React, { useState } from 'react';
import { X } from 'lucide-react';
import { IconType } from '../types/icons';
import AccountIcon from './AccountIcon';

interface CreateAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, iconType: IconType, color: 'blue' | 'yellow' | 'green' | 'purple', sectionId: string) => void;
  sectionId: string;
}

const icons: { type: IconType; label: string }[] = [
  { type: 'user', label: 'Пользователь' },
  { type: 'car', label: 'Транспорт' },
  { type: 'building', label: 'Здание' },
  { type: 'calculator', label: 'Калькулятор' },
  { type: 'home', label: 'Дом' },
  { type: 'hammer', label: 'Инструменты' }
];

const colors = [
  { id: 'blue', label: 'Синий', class: 'bg-cyan-500' },
  { id: 'yellow', label: 'Желтый', class: 'bg-yellow-400' },
  { id: 'green', label: 'Зеленый', class: 'bg-emerald-500' },
  { id: 'purple', label: 'Фиолетовый', class: 'bg-purple-500' }
] as const;

export default function CreateAccountModal({ isOpen, onClose, onSave, sectionId }: CreateAccountModalProps) {
  const [name, setName] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconType>('user');
  const [selectedColor, setSelectedColor] = useState<'blue' | 'yellow' | 'green' | 'purple'>('blue');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name, selectedIcon, selectedColor, sectionId);
    setName('');
    setSelectedIcon('user');
    setSelectedColor('blue');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
        
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Создать новый счет
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Название
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Иконка
              </label>
              <div className="grid grid-cols-3 gap-3">
                {icons.map((icon) => (
                  <button
                    key={icon.type}
                    type="button"
                    onClick={() => setSelectedIcon(icon.type)}
                    className={`p-3 rounded-lg flex flex-col items-center gap-2 ${
                      selectedIcon === icon.type 
                        ? 'bg-primary-100 ring-2 ring-primary-500' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`p-2 rounded-full ${
                      selectedIcon === icon.type ? 'bg-primary-600' : 'bg-gray-500'
                    }`}>
                      <AccountIcon type={icon.type} className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-xs">{icon.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Цвет
              </label>
              <div className="grid grid-cols-4 gap-3">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    onClick={() => setSelectedColor(color.id)}
                    className={`p-3 rounded-lg flex items-center justify-center ${
                      selectedColor === color.id 
                        ? 'ring-2 ring-primary-500' 
                        : ''
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full ${color.class}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Отмена
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Создать
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
