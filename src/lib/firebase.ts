import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import type { AppUser } from '@/types';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCD2kp1X-a79oESU31F-3NjSsx0EZ6Xjeg",
  authDomain: "healero-1y06x.firebaseapp.com",
  projectId: "healero-1y06x",
  storageBucket: "healero-1y06x.firebasestorage.app",
  messagingSenderId: "184817731214",
  appId: "1:184817731214:web:0b9e1d7c24d42db090ebdf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Firestore helper functions
const createUserProfile = async (
  uid: string,
  data: Omit<AppUser, 'uid'>
) => {
  return setDoc(doc(db, 'users', uid), {
    uid,
    ...data,
  });
};

const getUserProfile = async (uid: string): Promise<AppUser | null> => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as AppUser;
  } else {
    return null;
  }
};

export { app, auth, db, createUserProfile, getUserProfile };