'use strict';
let firebase = require('firebase');
var FbCreds = {
    apiKey: "AIzaSyDp-kuGjJGUkOAwZyoLqqTs92x-N__B6Fc",
    authDomain: "movie-history-d6e5f.firebaseapp.com",
    databaseURL: "https://movie-history-d6e5f.firebaseio.com",
    projectId: "movie-history-d6e5f",
    storageBucket: "movie-history-d6e5f.appspot.com",
    messagingSenderId: "174536537541"
};

var config = {
  apiKey: FbCreds.apiKey,
  authDomain: FbCreds.authDomain,
  databaseURL: FbCreds.databaseURL
};

module.exports = config;