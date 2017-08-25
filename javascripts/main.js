"use strict";

var logUser = require('./firebase.js');
var requests = require('./requests.js');


logUser.logOut();
$('#loginbutton').on("click",()=>{
	logUser.logInGoogle();
    setTimeout(()=>{
        console.log("current user is who", logUser.currentUsers());},10000);
});
$('.col-sm').on("click",(e)=>{
    let myMovie = e.currentTarget.movieid;
    console.log("myMovie", myMovie);
        
});

