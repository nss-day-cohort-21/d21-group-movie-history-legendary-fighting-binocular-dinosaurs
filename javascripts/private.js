'use strict';
let firebase = require('firebase');
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

module.exports = config;