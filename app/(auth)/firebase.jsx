// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDmb2LCrvx8jlntLsJO97TPMItJaG76be0",
  authDomain: "wastewise-bca00.firebaseapp.com",
  projectId: "wastewise-bca00",
  storageBucket: "wastewise-bca00.firebasestorage.app",
  messagingSenderId: "121419511430",
  appId: "1:121419511430:web:4585b5c0b7cb74945e0307",
  measurementId: "G-D8EZL6LSZ7"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Use initializeAuth with AsyncStorage persistence for React Native
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Export
export { auth };
export default firebaseConfig;
