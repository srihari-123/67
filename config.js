import firebase from "firebase"

 var firebaseConfig = {
    apiKey: "AIzaSyDPYmxRrMHs2Z_UQ35itqwQhu1E6vGe7yA",
    authDomain: "newsletter-ffc27.firebaseapp.com",
    databaseURL: "https://newsletter-ffc27-default-rtdb.firebaseio.com",
    projectId: "newsletter-ffc27",
    storageBucket: "newsletter-ffc27.appspot.com",
    messagingSenderId: "891038064156",
    appId: "1:891038064156:web:d54b3af4d083f438ca09d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.database()