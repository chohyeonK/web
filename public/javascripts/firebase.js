// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyC1IW_fvUnCY4XhsTETzqOniHnjcOiUgPg",
authDomain: "fir-7dcfe.firebaseapp.com",
projectId: "fir-7dcfe",
storageBucket: "fir-7dcfe.appspot.com",
messagingSenderId: "926998130681",
appId: "1:926998130681:web:c3131b4d2aad4329501728",
measurementId: "G-CQ4H2FRJY7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

