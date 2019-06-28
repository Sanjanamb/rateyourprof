const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: ' AIzaSyCB6IUDE4WZlBHGnU4RlXh4kD51g2nd13k',
  authDomain: 'rate-your-professor-returns.firebaseapp.com',
  projectId: 'rate-your-professor-returns'
});


 /* const db = firebase.firestore();
  var profdata;

  db.collection("profdata").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
       // console.log(doc.id, " => ", doc.data());
        profdata = doc.data();
        console.log(profdata);
    });
});
console.log("heyy");
console.log(profdata);*/

//GET DATA FROM REALTIME DATABASE - STUDENTDATA

var admin = require("firebase-admin")

const dbs = admin.database();
const docRef = dbs.ref('rate-your-professor-returns.firebaseio.com');
ref.on('value', querySnapshot =>{
  console.log(querySnapshot.val());
}, (errorObject)=>{
  console.log("Read failed: ", errorObject );
});
