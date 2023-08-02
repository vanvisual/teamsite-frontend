// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO1XrfSS5Ec70-E02uvldD_mImWiQUTGs",
    authDomain: "vanvisual-2023.firebaseapp.com",
    databaseURL: "https://vanvisual-2023-default-rtdb.firebaseio.com",
    projectId: "vanvisual-2023",
    storageBucket: "vanvisual-2023.appspot.com",
    messagingSenderId: "896915818912",
    appId: "1:896915818912:web:8e4d45e82c18399c957cc5",
    measurementId: "G-8R8LETQW9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
