import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDPVpZGpf2d_fEE7djqapBK4LNQyazFYEo",
  authDomain: "cmss-4702c.firebaseapp.com",
  projectId: "cmss-4702c",
  storageBucket: "cmss-4702c.appspot.com",
  messagingSenderId: "1092022648815",
  appId: "1:1092022648815:web:3087d9cede5df53388001a",
  measurementId: "G-YL8S9J63ZH"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;