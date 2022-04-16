import {initializeApp} from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


import firebaseConfig from "./firebase.config";
import { getFirestore } from '@firebase/firestore';

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const fireAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);