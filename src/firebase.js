import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTOGhQst_Kc9XSw98NghrqxhQix2BnYvY",
    authDomain: "eshop-1bca4.firebaseapp.com",
    projectId: "eshop-1bca4",
    storageBucket: "eshop-1bca4.appspot.com",
    messagingSenderId: "819120662982",
    appId: "1:819120662982:web:6498e5357fe184be7daac7",
    measurementId: "G-5KMG29Z8FG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}