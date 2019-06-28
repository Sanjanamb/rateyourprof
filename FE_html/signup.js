
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
  const db = firebase.database();
  const auth = firebase.auth();*/
  
var messagesRef = firebase.database().ref("Studentdata");

//ADD A REALTIME LISTNER
auth.onAuthStateChanged((user)=>{
    if (user) {
        console.log("User logged in");
    } else {
        console.log("User logged out");
    }
});

//LOGIN
const login = document.querySelector('#loginForm')
login.addEventListener('submit', (e) =>{
e.preventDefault();
const email = loginForm['sEmailidl'].value;
const password = loginForm['pswidl'].value;
auth.signInWithEmailAndPassword(email, password)
    .then(cred => {
      console.log(cred.user);
      window.location = 'C:/Users/Shashaank/Desktop/PHDFE1/LFE_html/lindex.html'
    })
    .catch(function (error) {
      console.log(error);
    });

});

  //SIGN UP FUNCTION
console.log("heyy");
const signup = document.querySelector('#signupForm')
signup.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log("inside signup");
  //declare all necessary variables
  const sName =document.getElementById('sNameid').value;
  const sCollege = document.getElementById('myInput').value;
  const sDegree = document.getElementById('sDegreeid').value;
  const sEmail =  document.getElementById('sEmailid').value;
  const psw = document.getElementById('pswid').value;
  

  auth.createUserWithEmailAndPassword(sEmail, psw)
      .then((cred) => {
        console.log(cred);
        console.log("User created");
        user = firebase.auth().currentUser;
        console.log("Inside saveMessage function");
        var newMessageRef = messagesRef.push();
       newMessageRef.set({
            sName : sName,
            sCollege: sCollege,
            sDegree:sDegree,
            sEmail: sEmail,
            psw: psw
   });
   
   console.log("Created user:", user);
   
   window.alert('You have to login to continue.');
        document.getElementById('signupform').reset();
      })
      .catch(function (error) {
        console.log(error);  
      });
})

//LOGOUT - WRITTEN IN LINDEX DIRECTLY.

/*const logout = document.querySelector('#btnlogout')
logout.addEventListener('click', (e)=>{
  e.preventDefault();
  firebase.auth().signOut()
      .then(function () {
          alert('You have been logged out');
          window.location = 'C:/Users/Shashaank/Desktop/PHDFE1/FE_html/index.html'
      }).catch(function (error) {
          console.log(error)
      });
})*/

/*function saveMessage(sName, sCollege, sDegree, sEmail, psw){
  user = firebase.auth().currentUser;
  console.log("Inside saveMessage function");
   var newMessageRef = messagesRef.push();
   newMessageRef.set({
     sName : sName,
     sCollege: sCollege,
     sDegree:sDegree,
     sEmail: sEmail,
     psw: psw
   });
   
   console.log("Created user:", user);
   
   window.alert('You have to login to continue.');
   }


/*document.getElementById("btnlogin").addEventListener("click", login);

 //LOGIN FUNCTION

 function login()
{ 
  console.log("hey in login");
  var email = document.getElementById("sEmailidl").value;
  var password= document.getElementById("pswidl").value;
  if (email.length <4 || password.length< 4){
    alert('Please enter a valid email id/password');
    return;
  }
  console.log("mailid entered is:", email);
  if(email!= "" && password!= "")
  {    
  const promise = firebase.auth().signInWithEmailAndPassword(email, password);
  console.log("heyy am i in?")  
  promise.catch(e => console.log(e.message));
  user = firebase.auth().currentUser;   
  }
  
  user = firebase.auth().currentUser; 

  if (user!= null)
  {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user!= null){
        console.log(user)
        console.log("in auth changed state");
        window.location = 'C:/Users/Shashaank/Desktop/PHDFE1/LFE_html/lindex.html';   
      }
      else{
        console.log("not logged in");
      }
     });
  }
}*/





/*
  document.getElementById("btnsignup").addEventListener("click", signup);
  function signup()
 {   
   console.log("inside signup function");
   if (sEmail == "" && psw == ""){
     console.log("Enter valid email and password");
     window.alert("Enter valid email and password");
     return;
   }
   else{
   //declare all necessary variables
   var sName =document.getElementById('sNameid').value;
   var sCollege = document.getElementById('myInput').value;
   var sDegree = document.getElementById('sDegreeid').value;
   var sEmail =  document.getElementById('sEmailid').value;
   var psw = document.getElementById('pswid').value;
   
   document.getElementById('signupform').reset();

   //Save response
   saveMessage(sName, sCollege, sDegree, sEmail, psw);
   
   const promise = firebase.auth().createUserWithEmailAndPassword(sEmail, psw);
   promise.catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error in createuser", error);
  });
  const user = firebase.auth().currentUser; 

  }  
 }
*/

 

