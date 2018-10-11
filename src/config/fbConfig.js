import firebase, { firestore } from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKsJTE-kqWSWY9nn-Bt9S4qSpG_h_5PLQ",
  authDomain: "fir-mario-project.firebaseapp.com",
  databaseURL: "https://fir-mario-project.firebaseio.com",
  projectId: "fir-mario-project",
  storageBucket: "fir-mario-project.appspot.com",
  messagingSenderId: "856249658401"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
