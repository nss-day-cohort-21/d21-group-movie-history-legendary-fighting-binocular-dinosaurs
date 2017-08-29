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
$(document).on("click",".addtowatchlist",(e)=>{
    if (Firebase.currentUsers()!== null) {
    let myMovie = $(e.currentTarget).attr("movieid");
        // console.log("myMovie", myMovie);
        requests.singleMovieSearch(myMovie).then((item)=>{
            let mymovieobj = item;
            mymovieobj.uid = Firebase.currentUsers();
            mymovieobj.name = Firebase.userDetails()[0];
            mymovieobj.email = Firebase.userDetails()[1];
            console.log("singlemovieOBJ", Object.keys(mymovieobj));
            Firebase.pushMovieObjToFirebase(mymovieobj);

        });
    }
});

//Delete movie card and from firebase *
// $(document).on("click", "#deleteMovie",(e) => {
//     if (Firebase.currentUsers()!== null) {
//         let myMovie = $(e.currentTarget).attr("movieid");

//         Firebase.deleteMovie(myMovie);//.then((res)=>{
//         //     debugger;
//             // let mymovieobj = item;
//             // mymovieobj.uid = Firebase.currentUsers();
//             // mymovieobj.name = Firebase.userDetails()[0];
//             // mymovieobj.email = Firebase.userDetails()[1];
//             // console.log("deletemovieRes", res);
//             // Firebase.deleteMovie(mymovieobj);

//         // });
//     }
// });

$(document).on("click", "#deleteMovie", function(event) {
    console.log("clicked delete movie",  event.currentTarget.id);
    let movieId =  event.currentTarget.id;
    Firebase.deleteMovie(movieId)
        .then(() => {
            // loadMoviesToDOM();
            console.log("you deleted movie", Firebase.deleteMovie);
        });
});


$(document).on("click",".stars",(e)=>{
    let startarget =  e.currentTarget;
    let rating = $(startarget).rateYo("rating")*2;

    if (Firebase.currentUsers()!== null) {
    let myMovie = $(e.currentTarget).attr("movieid");
        // console.log("myMovie", myMovie);
        requests.singleMovieSearch(myMovie).then((item)=>{
            let mymovieobj = item;
            console.log("what is rating", rating);

            mymovieobj.starrating = rating;
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

 $(document).on("click", "#unwatched", (event)=>{
	console.log("UNWATCHED");
    // on click we need to pass the active userID to getMovieByUser
    let userID = Firebase.currentUsers();
    Firebase.getMovieByUser(userID)
        .then((movie) => {
            console.log ("result", movie);
        });
    // console.log ("userID", userID);


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


