
/*var firebaseConfig = {
  apiKey: "AIzaSyCB6IUDE4WZlBHGnU4RlXh4kD51g2nd13k",
  authDomain: "rate-your-professor-returns.firebaseapp.com",
  databaseURL: "https://rate-your-professor-returns.firebaseio.com",
  projectId: "rate-your-professor-returns",
  storageBucket: "rate-your-professor-returns.appspot.com",
  messagingSenderId: "1008810118636",
  appId: "1:1008810118636:web:487477f36bcd24c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var database = firebase.database();
var firebaseRef = firebase.database().ref();

document.getElementById('loginForm').addEventListener('Login', login());

function login()
{
  var email = document.getElementById('sEmail').value;
  var password = document.getElementById('psw').value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  
  alert("You have been logged in");
  var errorCode = error.code;
  var errorMessage = error.message;
  alert('Error:'+ errorMessage);
});

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
     location("sponsors.html") ;
     alert("you are logged in");
    } else {
      // No user is signed in.
    }
  });
}



function logout()
{
  document.getElementById('logout').addEventListener('Logout', logout);
  firebase.auth().signOut.then(function(){
    
  }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;

})
}*/



























  /*const express = require('express');
  const router = express.Router();
  const mongo = require('mongodb').MongoClient;
  const url = "mongodb://localhost:27017/student";
  const assert = require('assert');
  router.get('/get-data', function( req, res, next){
    var resultArray = [];
    var item1 = {
        sEmail: req.body.sEmail,
        psw: req.body.psw
    };
    MongoClient.connect(url, function(err, db){
      if(err) throw err;
      const cursor = db.collection('studentdata').find();
      cursor.forEach(function(doc, err) {
        if (err) throw err;
        resultArray.push(doc);
        if(dataSnapshot.child(sEmail).exists()){
          if(!sEmail.isEmpty()){
            User login = dataSnapshot.child(sEmail).getValue(User.class);
            if(login.getPassword().equals[psw]){
              console.log('Successful login');}
               else {console.log('Incorrect password');}
             }
              
            }
          else {
            console.log('User not registered');
                      
          }
        })
      });
        
      }, function(){
        db.close();
        res.render(index, {item1: resultArray})
      }
    });
  });
  
    
}
login();*/