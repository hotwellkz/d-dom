import { 
  collection, 
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  Timestamp
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { AccountItem, Transaction } from '../types/accounting';

// Коллекции
const accountsCollection = collection(db, 'accounts');
const transactionsCollection = collection(db, 'transactions');

// Операции со счетами
export async function getAllAccounts() {
  const snapshot = await getDocs(accountsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function createAccount(account: Omit<AccountItem, 'id'> & { sectionId: string }) {
  const docRef = await addDoc(accountsCollection, {
    ...account,
    createdAt: Timestamp.now()
  });
  return docRef.id;
}

export async function updateAccount(id: string, updates: Partial<AccountItem>) {
  const docRef = doc(accountsCollection, id);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: Timestamp.now()
  });
}

export async function deleteAccount(id: string) {
  const docRef = doc(accountsCollection, id);
  await deleteDoc(docRef);
  
  // Удаляем связанные транзакции
  const q = query(
    transactionsCollection,
    where('fromAccountId', '==', id)
  );
  const snapshot = await getDocs(q);
  snapshot.docs.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });
}

// Операции с транзакциями
export async function getAccountTransactions(accountId: string) {
  const q = query(
    transactionsCollection,
    where('fromAccountId', '==', accountId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export async function createTransaction(transaction: Omit<Transaction, 'id'>) {
  const docRef = await addDoc(transactionsCollection, {
    ...transaction,
    createdAt: Timestamp.now()
  });
  return docRef.id;
}

export async function clearAccountTransactions(accountId: string) {
  const q = query(
    transactionsCollection,
    where('fromAccountId', '==', accountId)
  );
  const snapshot = await getDocs(q);
  snapshot.docs.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });
}
