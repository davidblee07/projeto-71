import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  apiKey: "AIzaSyB23PitgMFg4W2RlnuSkPBRCIg2kn5cFm8",
  authDomain: "pro71-427ed.firebaseapp.com",
  projectId: "pro71-427ed",
  storageBucket: "pro71-427ed.appspot.com",
  messagingSenderId: "225865687916",
  appId: "1:225865687916:web:bf659c8e0e9ec0f1b2c949"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
