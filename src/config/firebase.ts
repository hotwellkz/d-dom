import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDagc1XcgKNcLpKs7ISKHDq0zuUfN7b7eo",
  authDomain: "hotwellkz-accounting.firebaseapp.com", 
  projectId: "hotwellkz-accounting",
  storageBucket: "hotwellkz-accounting.firebasestorage.app",
  messagingSenderId: "218067666070",
  appId: "1:218067666070:web:ad244a97f338aa2e5f2eb7"
};

// Инициализируем Firebase
const app = initializeApp(firebaseConfig);

// Инициализируем сервисы
export const db = getFirestore(app);
export const auth = getAuth(app);
