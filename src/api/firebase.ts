import { initializeApp } from "firebase/app";
import {
  CollectionReference,
  DocumentReference,
  getFirestore,
} from "firebase/firestore";
import { collection, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firebase 컬렉션 참조 함수
export const getCollectionRef = (
  collectionName: string
): CollectionReference => {
  return collection(db, collectionName);
};

// Firebase 문서 참조 함수
export const getDocRef = (
  collectionName: string,
  id: string
): DocumentReference => {
  return doc(db, collectionName, id);
};
