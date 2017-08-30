"use strict";
var Firebase = require('./firebase.js');
var requests = require('./requests.js');
var ourDomBuilder = require('./dombuilder.js');


// This was the last groups modal for login, we decided to go without-BPW
// $(window).on('load',function(){
//     $('#loginModal').modal('show');
// });

// $('#modal-signin-btn').on("click",(e)=>{
//     e.preventDefault();
//     console.log('prefirebase');
//     Firebase.logInGoogle();
//     console.log('postfirebase');
//     $("#loginModal").modal('hide');

// });


//call Login & Logout from firebase.js
$('#loginbutton').on("click", () => {
    Firebase.logInGoogle();
});


Firebase.logOut();


//send selected movie to firebase
$(document).on("click", ".addtowatchlist", (e) => {
    if (Firebase.currentUsers() !== null) {

        let myMovie = $(e.currentTarget).attr("movieid");
        console.log("myMovie", myMovie);
        requests.singleMovieSearch(myMovie).then((item) => {
            let mymovieobj = item;
            mymovieobj.uid = Firebase.currentUsers();
            mymovieobj.name = Firebase.userDetails()[0];
            mymovieobj.email = Firebase.userDetails()[1];
            console.log("singlemovieOBJ", Object.keys(mymovieobj));

            var idArray = Object.keys(mymovieobj);
            // console.log ("idArray", idArray);
            // idArray.forEach((key) => {
            //   songData[key].id = key;
            // });
            // console.log("song object with id", songData);

            Firebase.pushMovieObjToFirebase(mymovieobj);

        });
    } else {
        window.alert('Please log in to add watchlist');
    }
});


$(document).on("click", ".deleteMovie", function(event) {


    let disableMovie = document.getElementById("disableMovie");

    if (Firebase.currentUsers() !== null) {
        // debugger;
        disableMovie.disabled = false;
        let fbID = $(this).attr("data-delete-id");
        Firebase.deleteMovie($(this).attr("data-delete-id"));
    } else {
        $("#fireBaseid").hide();
        disableMovie.disabled = true;
        window.alert('Please log in to delete');
    }
});

// Remove song then reload the DOM w/out new song
// $(document).on("click", ".delete-btn", function () {
//   console.log("clicked delete song", $(this).data("delete-id"));
//   let songID = $(this).data("delete-id");
//   db.deleteSong(songID)
//   .then(() => {
//      loadSongsToDOM();
//   });
// });


// $(document).on("click", ".delete-btn", function () {
//     console.log("clicked delete button", $(this).data("delete-id"));
//     let songID = $(this).data("delete-id");
//     db.deleteSong(songID)
//     .then(() => {
//       loadSongsToDOM();
//     });
//   });


$(document).on("click",".stars",(e)=>{
    let disableStars = document.getElementById("rateYo");
    let startarget =  e.currentTarget;
    let rating = $(startarget).rateYo("rating")*2;
    let fbID = $(startarget).attr("data-stars-id");

    if (Firebase.currentUsers()!== null) {
        // disableStars.disabled = false;
        let myMovieId = $(e.currentTarget).attr("movieid");
        // console.log("myMovieId", myMovieId);
        requests.singleMovieSearch(myMovieId)
        .then((item)=> {
            let mymovieobj = item;
            console.log("what is rating", rating);

            mymovieobj.starrating = rating;
            mymovieobj.uid = Firebase.currentUsers();
            mymovieobj.name = Firebase.userDetails()[0];
            mymovieobj.email = Firebase.userDetails()[1];
            // console.log("singlemovieOBJ", Object.keys(mymovieobj));
            console.log ("mymovieobj", mymovieobj);
            console.log('fbID', fbID);
            // console.log('$this', startarget);
            return mymovieobj;
        }).then((mymovieobj) => {
            Firebase.editMovieAndPushToFB(mymovieobj, fbID);
        });
    } else {
        $("#id").hide();
        disableStars.disabled = true;
        window.alert('Please log in to rate');
    }
});


//handler search bar displays
$(document).on("click", "#watched", () => {
    console.log("WATCHED");
    $('#searchInput').hide();
    $('#unwatchedSI').hide();
    $('#watchedSI').css("display", "block");
});


$(document).on("click", "#unwatched", (event) => {
    console.log("UNWATCHED");
    $('#watchedSI').hide();
    $('#searchInput').hide();
    $('#unwatchedSI').css("display", "block");
    // on click we need to pass the active userID to getMovieByUser
    let userID = Firebase.currentUsers();
    console.log("userID", userID);
    Firebase.getMovieByUser(userID)
        .then((movies) => {
            console.log("result", movies);
            let moviesArray = [];
            Object.keys(movies).forEach((key) => {
                movies[key].fireBaseid = key;
                moviesArray.push(movies[key]);
            });
            console.log("moviesArray:", moviesArray);
            ourDomBuilder.domBuilder(moviesArray);
        });
    // console.log ("userID", userID);

});


$(document).on("click", "#untracked", () => {
    console.log("UNWATCHED");
    $('#watchedSI').hide();
    $('#unwatchedSI').hide();
    $('#searchInput').css("display", "block");
});

//////////////////////////
//slider
/////////////////////////

// $('#stars').slider({
//     formatter: function(value) {
//         console.log("slider", value);
//         return 'Current value: ' + value;
//     }
// });


// Using the REST API
// function loadMoviesToDOM() {
//   console.log("starting loadMoviesToDom function");
//   let currentUser = user.getUser();
//   console.log("currentUser in loadMovies", currentUser);
//   db.getMovies(currentUser)
//   // db.getSongs()
//   .then((movieData) => {
//     //with users, this is already happening...
//     //add the id to each song and then build the song list
//     // var idArray = Object.keys(songData);
//     // idArray.forEach((key) => {
//     //   songData[key].id = key;
//     // });
//     // console.log("song object with id", songData);
//     //now make the list with songData
//     templates.populatePageAfterTracked(movieData);
//     console.log("loadMoviesToDOM", movieData);
//   });
// }