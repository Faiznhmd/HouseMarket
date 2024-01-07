// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/fire';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD4JvaA-iHW0ttubDJOHdcMzyFLq7tuq4A',
  authDomain: 'house-market-place-bbce3.firebaseapp.com',
  projectId: 'house-market-place-bbce3',
  storageBucket: 'house-market-place-bbce3.appspot.com',
  messagingSenderId: '840747342990',
  appId: '1:840747342990:web:0762c2cc6cfc047e1bbddf',
  measurementId: 'G-5RP68HZMPK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
