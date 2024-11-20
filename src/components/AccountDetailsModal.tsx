// В AccountDetailsModal.tsx добавляем сохранение транзакций:

const saveTransactions = (accountId: number, transactions: Transaction[]) => {
  const storageKey = `transactions_${accountId}`;
  localStorage.setItem(storageKey, JSON.stringify(transactions));
};

const loadTransactions = (accountId: number): Transaction[] => {
  const storageKey = `transactions_${accountId}`;
  const savedTransactions = localStorage.getItem(storageKey);
  return savedTransactions ? JSON.parse(savedTransactions) : [];
};

// В компоненте используем:

const accountTransactions = loadTransactions(account.id);

// При добавлении новой транзакции:
const addTransaction = (transaction: Transaction) => {
  const transactions = loadTransactions(account.id);
  const updatedTransactions = [...transactions, transaction];
  saveTransactions(account.id, updatedTransactions);
};
