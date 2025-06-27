import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Uncomment if you want analytics

const firebaseConfig = {
  apiKey: "AIzaSyB8MwEQIESFkx3cNu-_2nnTYeUGUeY0AXk",
  authDomain: "nola-pool-solutions.firebaseapp.com",
  projectId: "nola-pool-solutions",
  storageBucket: "nola-pool-solutions.firebasestorage.app",
  messagingSenderId: "870601281324",
  appId: "1:870601281324:web:b8c8e3f9e240203f5c6689",
  measurementId: "G-T4LKZF1BWP"
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app); // Uncomment if you want analytics 