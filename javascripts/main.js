"use strict";
var Firebase = require('./firebase.js');
var requests = require('./requests.js');


Firebase.logOut();


$(window).on('load',function(){
    $('#loginModal').modal('show');
});

$('#modal-signin-btn').on("click",(e)=>{
    e.preventDefault();
    console.log('prefirebase');
    Firebase.logInGoogle();
    console.log('postfirebase');
    $("#loginModal").modal('hide');

});

$('#loginbutton').on("click",()=>{
	Firebase.logInGoogle();
});



//send selected movie to firebase
$(document).on("click",".col-sm",(e)=>{
    if (Firebase.currentUsers()!== null) {
    let myMovie = $(e.currentTarget).attr("movieid");
        // console.log("myMovie", myMovie);
        requests.singleMovieSearch(myMovie).then((item)=>{
            let mymovieobj = item;
            mymovieobj.uid = Firebase.currentUsers();
            mymovieobj.name = Firebase.userDetails()[0];
            mymovieobj.email = Firebase.userDetails()[1];
            // console.log("singlemovieOBJ", Object.keys(mymovieobj));
            Firebase.pushMovieObjToFirebase(mymovieobj);
                
        });
    }
});

    
//handler search bar displays
$(document).on("click", "#watched", ()=>{
	console.log("WATCHED");
        $('#searchInput').hide();
        $('#unwatchedSI').hide();
        $('#watchedSI').css("display", "block");
 });
$(document).on("click", "#unwatched", ()=>{
	console.log("UNWATCHED");
        $('#watchedSI').hide();
        $('#searchInput').hide();
        $('#unwatchedSI').css("display", "block");
 });

$(document).on("click", "#untracked", ()=>{
	console.log("UNWATCHED");
        $('#watchedSI').hide();
        $('#unwatchedSI').hide();
        $('#searchInput').css("display", "block");
 });




