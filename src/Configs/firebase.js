// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCap4oHqKI19kwfu3oGdrVJktGApy4fZwU",
  authDomain: "masak-se-dev.firebaseapp.com",
  projectId: "masak-se-dev",
  storageBucket: "masak-se-dev.appspot.com",
  messagingSenderId: "634417239202",
  appId: "1:634417239202:web:cbf6c240c4a8c1f25973fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
