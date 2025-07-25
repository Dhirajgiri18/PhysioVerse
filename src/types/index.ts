import type { User as FirebaseUser } from 'firebase/auth';

export type UserRole = 'patient' | 'therapist';

export interface AppUser {
  uid: string;
  email: string | null;
  name: string | null;
  role: UserRole;
  assignedPatientIds?: string[];
  assignedTherapistId?: string;
  // Therapist-specific fields
  specialty?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
}

export interface AuthContextType {
  user: AppUser | null;
  firebaseUser: FirebaseUser | null;
  loading: boolean;
  logout: () => Promise<void>;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  sets: number;
  reps: number;
  videoUrl?: string;
}

export interface Patient {
    id: string;
    name: string;
    email: string;
    lastActivity: string;
    progress: number;
}

export interface Therapist {
  id: string;
  name: string;
  specialty: string;
  location: string;
  bio: string;
  avatarUrl?: string;
}
