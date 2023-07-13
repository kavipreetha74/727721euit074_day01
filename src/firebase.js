// Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBIhmds1A1Jo41M3mQRyOitKvhtyODYkQ8",
    authDomain: "online-medical-store-2c4ee.firebaseapp.com",
    projectId: "online-medical-store-2c4ee",
    storageBucket: "online-medical-store-2c4ee.appspot.com",
    messagingSenderId: "900298063570",
    appId: "1:900298063570:web:57ea399bbb7054a922f70b",
    measurementId: "G-NWC7K58M4L"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export default firebase;