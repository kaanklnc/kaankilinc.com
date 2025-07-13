// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAQsXiVtkw8HehU1-N203SxuYB8wZ_yfU8",
  authDomain: "kaandevsite.firebaseapp.com",
  projectId: "kaandevsite",
  storageBucket: "kaandevsite.firebasestorage.app",
  messagingSenderId: "119851140539",
  appId: "1:119851140539:web:ec97d987ad57f76150b09e",
  measurementId: "G-6SLR3D6LP0"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };

