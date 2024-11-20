// Обновляем обработчик контекстного меню в AccountingPage.tsx
// Добавляем в компонент:

const handleClearHistory = () => {
  if (contextMenu.accountId) {
    clearAccountHistory(contextMenu.accountId);
  }
  setContextMenu(prev => ({ ...prev, show: false }));
};

// И обновляем рендер AccountContextMenu:

{contextMenu.show && (
  <AccountContextMenu
    x={contextMenu.x}
    y={contextMenu.y}
    onEdit={handleEditAccount}
    onDelete={() => {
      if (contextMenu.accountId && contextMenu.sectionId) {
        deleteAccount(contextMenu.accountId, contextMenu.sectionId);
      }
      setContextMenu(prev => ({ ...prev, show: false }));
    }}
    onClearHistory={handleClearHistory}
    onClose={() => setContextMenu(prev => ({ ...prev, show: false }))}
  />
)}
