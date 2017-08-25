"use strict";

var logUser = require('./firebase.js');
var requests = require('./requests.js');


logUser.logOut();
$('#loginbutton').on("click",()=>{
	logUser.logInGoogle();
});


requests.initialSearch();
