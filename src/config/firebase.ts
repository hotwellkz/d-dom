import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQZNGNUtXWk6rQ3-LQV9YX9YkX-9ZW4Qg",
  authDomain: "hotwellkz-accounting.firebaseapp.com",
  projectId: "hotwellkz-accounting",
  storageBucket: "hotwellkz-accounting.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456ghi789"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
