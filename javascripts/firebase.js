'use strict';
var firebase = require("firebase");
const fbURL = `https://movie-list-bb8f4.firebaseio.com/`;
var FbCreds = {
    apiKey: "AIzaSyCdQwFnhT6W_VnKNdl5ESRwqXVXmHNjRQo",
    authDomain: "movie-list-bb8f4.firebaseapp.com",
    databaseURL: "https://movie-list-bb8f4.firebaseio.com",
    projectId: "movie-list-bb8f4",
    storageBucket: "movie-list-bb8f4.appspot.com",
    messagingSenderId: "377715718874"
};

var config = {
  apiKey: FbCreds.apiKey,
  authDomain: FbCreds.authDomain,
  databaseURL: FbCreds.databaseURL
};

firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
console.log("provider is", provider);


firebase.getFBsettings = function(){
     console.log("getFBsettings", config);
     return config;
};

function getMovieByUser(userId) {

    return new Promise((resolve,reject)=>{
            
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/.json?orderBy="uid"&equalTo=${userId}`
        }).done((songdata)=>{
            resolve(songdata);
        });
    });
}

getMovieByUser(1).then((data) =>{
    console.log("data", data);
});
function logInGoogle() {
    // console.log("provider", provider);
        
    return firebase.auth().signInWithPopup(provider);
}
function logOut(){
    
    return firebase.auth().signOut();
}
firebase.auth().onAuthStateChanged(function(user){
    console.log("onAuthStateChanged", user);
    if (user){
        // currentUser = user.uid;
    }else{
        // currentUser = null;
        console.log("NO USER LOGGED IN");
    }
});

logInGoogle();

// firebase.auth().signInWithPopup(provider).then(function(result) {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = result.credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       // ...
//     }).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       // ...
//     });