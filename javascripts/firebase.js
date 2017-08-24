'use strict';
var firebase = require("firebase/app");
// var provider = new firebase.auth.GoogleAuthProvider();
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
firebase.getFBsettings = function(){
     console.log("getFBsettings", config);
     return config;
};
function getSongs(user) {
    console.log("user is", user);
        
    return new Promise((resolve,reject)=>{
        console.log("thing is", `${firebase.getFBsettings().databaseURL}/songs.json?/orderBy='uid'&equalTo='${user}'`);
            
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/.json?orderBy="uid"&equalTo="${user}"`
        }).done((songdata)=>{
            resolve(songdata);
        });
    });
}

getSongs().then((data) =>{
    console.log("data", data);
});

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