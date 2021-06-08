import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkxrZcIRknjzDDo8Lfw8V-8aqe-J47NxE",
  authDomain: "tasktodo-7dbfc.firebaseapp.com",
  projectId: "tasktodo-7dbfc",
  storageBucket: "tasktodo-7dbfc.appspot.com",
  messagingSenderId: "575695824839",
  appId: "1:575695824839:web:cfbc5cde2f3269e1055be2",
});
const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebase.auth();
export { db, storage, auth };
export default firebaseApp;
