"use strict";
var logUser = require('./firebase.js');
var template = require('./dombuilder');
logUser.logOut();
$('#loginbutton').on("click",()=>{
	logUser.logInGoogle();
});

function initialSearch(searchInput) {
	return new Promise((resolve,reject)=>{
      
        $.ajax({
            url: `https://api.themoviedb.org/3/search/movie?api_key=01fccab4977fb9e675b2a37846f08da4&language=en-US&query=${searchInput}&page=1&include_adult=false`
        }).done((songdata)=>{
            resolve(songdata);
            console.log("songdata is", songdata);
            	
        });
    });
}

$("#searchInput").on("input",()=>{
	let search = $("#searchInput").val();
	initialSearch(search).then((data)=>{
		template(data);
	});
	
});

module.exports ={initialSearch};