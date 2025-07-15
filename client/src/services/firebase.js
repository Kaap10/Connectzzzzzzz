// Firebase setup for production
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyANWGH2WYcnByC34ML0wNn1nl4cqgOSoow",
  authDomain: "glb-connect-2954.firebaseapp.com",
  projectId: "glb-connect-2954",
  storageBucket: "glb-connect-2954.firebasestorage.app",
  messagingSenderId: "994291375709",
  appId: "1:994291375709:web:713e1f37b971d99efdf7b4",
  measurementId: "G-D9KQQ7YWM6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  client_id: '994291375709-2i9guelmdbbekcp1oogijnsv7mtnp7gj.apps.googleusercontent.com'
});
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, db, storage }; 