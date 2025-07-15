// Firebase setup for production
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAN4WH2WncbY3C4WLbWn1n14cqgOSoow',
  authDomain: 'glb-connect-2954.firebaseapp.com',
  projectId: 'glb-connect-2954',
  storageBucket: 'glb-connect-2954.appspot.com',
  messagingSenderId: '994291375709',
  appId: '1:994291375709:web:713e1f37b971d99efdf7b4',
  measurementId: 'G-D9KQ7YWM6'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }; 