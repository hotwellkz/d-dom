import React from 'react';
import { Pencil, Trash2, RotateCcw } from 'lucide-react';

interface AccountContextMenuProps {
  x: number;
  y: number;
  onEdit: () => void;
  onDelete: () => void;
  onClearHistory: () => void;
  onClose: () => void;
}

export default function AccountContextMenu({ 
  x, 
  y, 
  onEdit, 
  onDelete, 
  onClearHistory,
  onClose 
}: AccountContextMenuProps) {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.context-menu')) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div 
      className="context-menu fixed bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
      style={{ 
        left: `${x}px`, 
        top: `${y}px`,
        minWidth: '160px'
      }}
    >
      <button
        onClick={onEdit}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
      >
        <Pencil className="h-4 w-4 mr-2" />
        Редактировать
      </button>
      <button
        onClick={onClearHistory}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center"
      >
        <RotateCcw className="h-4 w-4 mr-2" />
        Очистить историю
      </button>
      <button
        onClick={onDelete}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center"
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Удалить
      </button>
    </div>
  );
}
