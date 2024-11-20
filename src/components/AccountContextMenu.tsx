import React from 'react';

interface AccountContextMenuProps {
  x: number;
  y: number;
  onEdit: () => void;
  onDelete: () => void;
  onClose: () => void;
}

export default function AccountContextMenu({ 
  x, 
  y, 
  onEdit, 
  onDelete, 
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
        Редактировать
      </button>
      <button
        onClick={onDelete}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center"
      >
        Удалить
      </button>
    </div>
  );
}
