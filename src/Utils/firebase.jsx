
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-8yKxhd9tk22X7teQ3u3fTJ8gSzjcT_Y",
  authDomain: "fwiggy-f8e42.firebaseapp.com",
  projectId: "fwiggy-f8e42",
  storageBucket: "fwiggy-f8e42.firebasestorage.app",
  messagingSenderId: "353487177348",
  appId: "1:353487177348:web:126c3928a355d56ff8e4d1",
  measurementId: "G-QQNLXB61C9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
