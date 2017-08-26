"use strict";
var firebase = require("firebase");
var config = require('./private.js');
var handlers = require('./event.js');
firebase.initializeApp(config);

//get user firebase info
var provider = new firebase.auth.GoogleAuthProvider();
var currentUser = null;
var displayName;
var email;
var emailVerified;

firebase.getFBsettings = function(){
     return config;
};

function getMovieByUser(userId) {
    return new Promise((resolve,reject)=>{
            console.log("user", userId);
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/.json?orderBy="uid"&equalTo="${userId}"`
        }).done((movie)=>{
            resolve(movie);
        });
    });
}

function pushMovieObjToFirebase(movieObj) {
    // return new Promise((resolve,reject)=>{
       // console.log("what is movieobj rly", movieObj.cast);
       let a = movieObj;
                     
        $.ajax({
            url: `${firebase.getFBsettings().databaseURL}/.json`,
            method: 'POST',
            data: JSON.stringify(a)
        }).done((response)=>{
            // console.log("firebase response is what", response);
                
            // resresponsemovie);
        });
    // });
}


function logInGoogle() {
        
    return firebase.auth().signInWithPopup(provider);
}
function logOut(){
    
    return firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(function(user){
    console.log("onAuthStateChanged", user);
    if (user){
        currentUser = user.uid;
        $("#loginModal").modal('hide');
        handlers.addPhotoAfterLogin(user.photoURL);
        console.log(handlers);
        displayName = user.displayName;
        email = user.email;
        userDetails();
        // console.log(handlers);

        handlers.buttonChanges();

    }else{
        currentUser = null;
        console.log("NO USER LOGGED IN");
    }
    
});

function currentUsers() {
        // console.log("currentUser", currentUser);
    return currentUser;
}
function userDetails() {
    // console.log("user details",[displayName,email]);
        
    return [displayName,email];
}

module.exports = {logInGoogle,logOut,currentUsers,pushMovieObjToFirebase,getMovieByUser,userDetails};

