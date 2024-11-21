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
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { AccountItem, Transaction } from '../types/accounting';

// Коллекции
const accountsCollection = collection(db, 'accounts');
const transactionsCollection = collection(db, 'transactions');

// Преобразование данных аккаунта из Firestore
const convertAccount = (doc: DocumentData): AccountItem => {
  const data = doc.data();
  return {
    id: parseInt(doc.id),
    name: data.name,
    amount: data.amount,
    iconType: data.iconType,
    color: data.color
  };
};

// Операции со счетами
export async function getAllAccounts() {
  try {
    const snapshot = await getDocs(accountsCollection);
    return snapshot.docs.map(convertAccount);
  } catch (error) {
    console.error('Error getting accounts:', error);
    throw error;
  }
}

export async function createAccount(account: Omit<AccountItem, 'id'> & { sectionId: string }) {
  try {
    const docRef = await addDoc(accountsCollection, {
      ...account,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating account:', error);
    throw error;
  }
}

export async function updateAccount(id: string, updates: Partial<AccountItem>) {
  try {
    const docRef = doc(accountsCollection, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating account:', error);
    throw error;
  }
}

export async function deleteAccount(id: string) {
  try {
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
  } catch (error) {
    console.error('Error deleting account:', error);
    throw error;
  }
}

// Операции с транзакциями
export async function getAccountTransactions(accountId: string) {
  try {
    const q = query(
      transactionsCollection,
      where('fromAccountId', '==', accountId)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Transaction[];
  } catch (error) {
    console.error('Error getting transactions:', error);
    throw error;
  }
}

export async function createTransaction(transaction: Omit<Transaction, 'id'>) {
  try {
    const docRef = await addDoc(transactionsCollection, {
      ...transaction,
      createdAt: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating transaction:', error);
    throw error;
  }
}

export async function clearAccountTransactions(accountId: string) {
  try {
    const q = query(
      transactionsCollection,
      where('fromAccountId', '==', accountId)
    );
    const snapshot = await getDocs(q);
    await Promise.all(snapshot.docs.map(doc => deleteDoc(doc.ref)));
  } catch (error) {
    console.error('Error clearing transactions:', error);
    throw error;
  }
}
