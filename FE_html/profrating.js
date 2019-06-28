//PUT PROF DATA IN FIRESTORE ADD ARATING TAG TO THE JSON
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: ' AIzaSyCB6IUDE4WZlBHGnU4RlXh4kD51g2nd13k',
  authDomain: 'rate-your-professor-returns.firebaseapp.com',
  projectId: 'rate-your-professor-returns'
});

var db = firebase.firestore();
//console.log("Inside function main");
  var db = firebase.firestore();
  var profdata =
     [{firstname:"Dr. Rohin Daruwala",emailid:"rddaruwala@el.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=153awpM4f6QYrIYh_mEQyabqllc0Yu7VJ",Qualifications:"PHD",College:"VJTI, Mumbai",Areaofexpertise:"MICROPROCESSORS & MICROCONTROLLERS",Experience:"25",GoogleSch:"https://scholar.google.co.in/citations?user=ps4tWIAAAAAJ&hl=en"},
    {firstname:"R.N.Awale",emailid:"rnawale@el.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=1gd_HWZwQupt0U_Yroawf7sw_ZOHqdSWO",Qualifications:"PHD",College:"VJTI, Mumbai",Areaofexpertise:"IMAGE PROCESSING",Experience:"30","GoogleSch":"https://scholar.google.co.in/citations?user=sO3lCGUAAAAJ&hl=en"},
    {firstname:" Faruk A. S. Kazi ",emailid:"fskazi@el.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=1Htj7mV6f6GR3jpX5QK-EUfEvlEyPH0KE",Qualifications:"PHD",College:"VJTI, Mumbai",Areaofexpertise:"POWER SYSTEMS DYNAMICS",Experience:"11",GoogleSch:"https://scholar.google.co.in/citations?user=oa7QCAgAAAAJ&hl=en"},
    {firstname:"Amutha Jeyakumar",emailid:"amuthajaykumar@el.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=1KlZD2a_LtMcuXlyxK4PPFAgndR0dXJ84",Qualifications:"BTECH;MTECH",College:"VJTI, Mumbai",Areaofexpertise:"ANALOG & DIGITAL COMMUNICATION",Experience:"30",GoogleSch:"https://scholar.google.com/citations?user=6r3KlqQAAAAJ&hl=en"},
    {firstname:"Rajesh Patil ",emailid:"rapatil@el.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=173anQISppTGcflVlnmcuKjrmwGWUUsw0",Qualifications:"BTECH;MTECH",College:"VJTI, Mumbai",Areaofexpertise:"SIGNALS AND SYSTEMS",Experience:"15",GoogleSch:"nan"},
    {firstname:"D.P Rathod",emailid:"dprathod@el.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=1wuuhZO_qh_rCzz3NGkkKkV1SFbQ0bAdo",Qualifications:"BTECH;MTECH;PHD",College:"VJTI, Mumbai",Areaofexpertise:"ANALOG & DIGITAL COMMUNICATION",Experience:"26",GoogleSch:"https://scholar.google.co.in/citations?user=O0iuO38AAAAJ&hl=en"},
    {firstname:"N.M Singh",emailid:"nmsingh@ee.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=1iR84bAmAjBAc0zckOTBoZfBhiKPhDtu4",Qualifications:"BTECH;MTECH;PHD",College:"VJTI, Mumbai",Areaofexpertise:"GEOMETRIC MECHANICS & CONTROL",Experience:"30",GoogleSch:"https://scholar.google.co.in/citations?user=MVFKy-4AAAAJ&hl=en"},
    {firstname:" A. N. Cheeran",emailid:"ancheeran@ee.vjti.ac.in",photo:"https://drive.google.com/open?authuser=0&usp=forms_web&id=15zeVdKqDY9ZxWICOuEy8Qw1hnmIjnqR6",Qualifications:"PHD",College:"VJTI, Mumbai",Areaofexpertise:"IMAGE PROCESSING",Experience:"27",GoogleSch:"https://scholar.google.co.in/citations?user=mQdh5WwAAAAJ&hl=en"}
    ]  
  
  /*profdata.forEach(function(obj){
    db.collection("profdata").add({
      firstname: obj.firstname,
      emailid: obj.emailid,
      photo: obj.photo,
      Qualifications: obj.Qualifications,
      College: obj.College,
      Areaofexpertise: obj.Areaofexpertise,
      Experience: obj.Experience,
      GoogleSch: obj.GoogleSch
    }).then(function(docRef){
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error){
        console.error("Error in adding document: ", error)
    });
  });*/





