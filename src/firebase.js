import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyCFIpPjwVIloReKhqNPFwZGcl6wASzM0rE",
  authDomain: "react-app-a46ef.firebaseapp.com",
  projectId: "react-app-a46ef",
  storageBucket: "react-app-a46ef.appspot.com", // ✅ correct domain here
  messagingSenderId: "438475530064",
  appId: "1:438475530064:web:72599ae07b1a4a24205655"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // ✅ initialize storage

export { db, auth, storage }; // ✅ export it
