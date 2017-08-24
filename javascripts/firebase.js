"use strict";
var firebase = require("firebase");
var config = require('./private.js');
firebase.initializeApp(config);


var provider = new firebase.auth.GoogleAuthProvider();
console.log("provider is", provider);
var currentUser = null;

firebase.getFBsettings = function(){
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

getMovieByUser(0).then((data) =>{
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
        currentUser = user.uid;
    }else{
        currentUser = null;
        console.log("NO USER LOGGED IN");
    }
});
logOut();
logInGoogle();

