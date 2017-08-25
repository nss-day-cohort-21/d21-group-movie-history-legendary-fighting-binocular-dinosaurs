"use strict";
var Firebase = require('./firebase.js');
var requests = require('./requests.js');


Firebase.logOut();
$('#loginbutton').on("click",()=>{
	Firebase.logInGoogle();
});



$(document).on("click",".col-sm",(e)=>{
    if (Firebase.currentUsers()!== null) {
    let myMovie = $(e.currentTarget).attr("movieid");
        // console.log("myMovie", myMovie);
        requests.singleMovieSearch(myMovie).then((item)=>{
            let mymovieobj = item;
            mymovieobj.uid = Firebase.currentUsers();
            console.log("singlemovieOBJ", Object.keys(mymovieobj));
            Firebase.pushMovieObjToFirebase(mymovieobj);
                
        });
    }
});





