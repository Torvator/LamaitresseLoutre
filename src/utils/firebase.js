// Configuration Firebase pour le projet La Maîtresse Loutre
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqcR-rtAiSd1-vsooBmJfSyqt8qKzHBrs",
  authDomain: "lamaitresseloutre.firebaseapp.com",
  projectId: "lamaitresseloutre",
  storageBucket: "lamaitresseloutre.firebasestorage.app",
  messagingSenderId: "53451632984",
  appId: "1:53451632984:web:31aec704fe9767a705f52d"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser les services
export const db = getFirestore(app);
export const auth = getAuth(app);
