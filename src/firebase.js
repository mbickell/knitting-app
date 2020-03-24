import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_kYonJvOq_AhxCg8B3lTXxm9jr2hfd78",
  authDomain: "knitting-project.firebaseapp.com",
  databaseURL: "https://knitting-project.firebaseio.com",
  projectId: "knitting-project",
  storageBucket: "knitting-project.appspot.com",
  messagingSenderId: "621858939983",
  appId: "1:621858939983:web:612169916a56a4735b763a",
  measurementId: "G-0YL5FH12YT"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
