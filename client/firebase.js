import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'test-32124.firebaseapp.com',
  projectId: 'test-32124',
  storageBucket: 'test-32124.appspot.com',
  messagingSenderId: '112762125218',
  appId: '1:112762125218:web:5022266851c2b2d97610fb',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
