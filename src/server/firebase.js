import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBUjYIBtEKqI_XSw7LCJ93kDeBlkvZkvZI",
  authDomain: "online-class-4e218.firebaseapp.com",
  databaseURL: "https://online-class-4e218-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-class-4e218",
  storageBucket: "online-class-4e218.appspot.com",
  messagingSenderId: "489947391901",
  appId: "1:489947391901:web:da95a9e6d37460ecf03174",
  measurementId: "G-NPXSJDP4E1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
