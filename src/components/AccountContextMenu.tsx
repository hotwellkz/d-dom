import React from 'react';
import { Pencil, Trash2, RotateCcw } from 'lucide-react';

interface AccountContextMenuProps {
  x: number;
  y: number;
  onEdit: () => void;
  onDelete: () => Promise<void>;
  onClearHistory: () => Promise<void>;
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
  const [isDeleting, setIsDeleting] = useState(false);
  const [isClearing, setIsClearing] = useState(false);

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

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await onDelete();
    } catch (error) {
      console.error('Error deleting account:', error);
      alert('Ошибка при удалении счета');
    } finally {
      setIsDeleting(false);
      onClose();
    }
  };

  const handleClearHistory = async () => {
    try {
      setIsClearing(true);
      await onClearHistory();
    } catch (error) {
      console.error('Error clearing history:', error);
      alert('Ошибка при очистке истории');
    } finally {
      setIsClearing(false);
      onClose();
    }
  };

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
        onClick={handleClearHistory}
        disabled={isClearing}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center disabled:opacity-50"
      >
        <RotateCcw className="h-4 w-4 mr-2" />
        {isClearing ? 'Очистка...' : 'Очистить историю'}
      </button>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center disabled:opacity-50"
      >
        <Trash2 className="h-4 w-4 mr-2" />
        {isDeleting ? 'Удаление...' : 'Удалить'}
      </button>
    </div>
  );
}
