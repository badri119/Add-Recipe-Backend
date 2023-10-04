import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh9-rcuwH-TTPtn2hxFfKqgcgaUaqZa5o",
  authDomain: "addrecipe-eff18.firebaseapp.com",
  projectId: "addrecipe-eff18",
  storageBucket: "addrecipe-eff18.appspot.com",
  messagingSenderId: "199632679843",
  appId: "1:199632679843:web:8f81d2f201722028186016",
  measurementId: "G-Y73D52BSSN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const citiesCol = collection(db, "users");
const citySnapshot = await getDocs(citiesCol);
const cityList = citySnapshot.docs.map((doc) => {
  console.log(doc.data());
});

export { db };
