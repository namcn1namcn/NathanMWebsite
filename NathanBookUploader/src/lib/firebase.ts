import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
    apiKey: "AIzaSyAr6XXh_pWNsj8wvk3bydyycUltpShm_Hc",
    authDomain: "nathanbookwebsite.firebaseapp.com",
    projectId: "nathanbookwebsite",
    storageBucket: "nathanbookwebsite.firebasestorage.app",
    messagingSenderId: "520048339208",
    appId: "1:520048339208:web:8b96a6eeb0303c4a8924bd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);