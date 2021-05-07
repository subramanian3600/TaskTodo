import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/storage';

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyDkZIBJUR96R0fgX5PeKFnlJ2CZbxvKGFA",
    authDomain: "taskstodo-010521.firebaseapp.com",
    projectId: "taskstodo-010521",
    storageBucket: "taskstodo-010521.appspot.com",
    messagingSenderId: "358606606298",
    appId: "1:358606606298:web:6b36580fbf0b277c0bbae3"
});
const db=firebaseApp.firestore();
const storage=firebaseApp.storage();
const auth =firebase.auth()
export {db,storage,auth}
export default firebaseApp;
