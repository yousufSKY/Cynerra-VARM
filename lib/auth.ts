import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  type User
} from 'firebase/auth';
import { auth } from './firebase';

export async function signUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error as Error };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error as Error };
  }
}

export async function logout() {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error as Error };
  }
}

export function onAuthStateChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
  return auth.currentUser;
}

export async function updateUserProfile(data: { displayName?: string; photoURL?: string }) {
  const user = auth.currentUser;
  if (!user) return { error: new Error('No user logged in') };

  try {
    await updateProfile(user, data);
    return { error: null };
  } catch (error) {
    return { error: error as Error };
  }
}

export async function updateUserEmail(newEmail: string) {
  const user = auth.currentUser;
  if (!user) return { error: new Error('No user logged in') };

  try {
    await updateEmail(user, newEmail);
    return { error: null };
  } catch (error) {
    return { error: error as Error };
  }
}

export async function updateUserPassword(newPassword: string) {
  const user = auth.currentUser;
  if (!user) return { error: new Error('No user logged in') };

  try {
    await updatePassword(user, newPassword);
    return { error: null };
  } catch (error) {
    return { error: error as Error };
  }
}