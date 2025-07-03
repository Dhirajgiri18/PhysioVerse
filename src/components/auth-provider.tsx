'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { auth, getUserProfile } from '@/lib/firebase';
import type { AppUser, AuthContextType } from '@/types';
import PageSpinner from './page-spinner';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      try {
        setFirebaseUser(fbUser);
        if (fbUser) {
          const appUser = await getUserProfile(fbUser.uid);
          setUser(appUser);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to get user profile:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);
  
  const logout = async () => {
    await auth.signOut();
  };

  const value = { user, firebaseUser, loading, logout };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <PageSpinner /> : children}
    </AuthContext.Provider>
  );
};
