'use strict';

var cards = require('../templates/cards.hbs');
var request = require("./requests.js");


//template to print to dom
function domBuilder(movie){
    let movieobj = {
        title : [],
        id : [],
        posterpath : []
    };

   movie.forEach((data)=>{
       movieobj.title.push(data.original_title);
       movieobj.id.push(data.id);
       movieobj.posterpath.push(data.poster_path);
  });
       // console.log("obj from domBuilder", movie);
      $(".row").html('');
      movie.forEach((item,index) => {
     // console.log("castiss?", item.cast);

         if (item.poster_path!==null) {



            $(".row").append(cards(item));

          // console.log("BIGASS ITEM", item.id);
            let realid = item.id;

        //   delete songs
        //   movieobj.id.


         }
          // if (item.cast !==undefined) {

          // }


      });

}


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
//     // var idArray = Object.keys(movieData);
//     // idArray.forEach((key) => {
//     //   movieData[key].id = key;
//     // });
//     // console.log("movie object with id", movieData);
//     //now make the list with movieData
//     templates.populatePageAfterTracked(movieData);
//     console.log("loadMoviesToDOM", movieData);
//   });
// }

module.exports = domBuilder;
