import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgYBUcdDsc7pnBMqf0r_VSfa94BT92gcE",
  authDomain: "tmwdp-ef738.firebaseapp.com",
  databaseURL: "https://tmwdp-ef738-default-rtdb.firebaseio.com",
  projectId: "tmwdp-ef738",
  storageBucket: "tmwdp-ef738.appspot.com",
  messagingSenderId: "1009783613336",
  appId: "1:1009783613336:web:b82c519fe17bea1304aded",
  measurementId: "G-WBLCGST10N",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export default db;
