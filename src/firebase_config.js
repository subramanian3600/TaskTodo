import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDkZIBJUR96R0fgX5PeKFnlJ2CZbxvKGFA",
    authDomain: "taskstodo-010521.firebaseapp.com",
    projectId: "taskstodo-010521",
    storageBucket: "taskstodo-010521.appspot.com",
    messagingSenderId: "358606606298",
    appId: "1:358606606298:web:6b36580fbf0b277c0bbae3"
};

const fire = firebase.initializeApp(firebaseConfig);




export default fire;
