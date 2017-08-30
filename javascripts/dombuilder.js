'use strict';

var cards = require('../templates/cards.hbs');
var cardone = require('../templates/cardone.hbs');
var request = require("./requests.js");


//template to print to dom
function domBuilder(movie){
    let movieobj = {
        title : [],
        id : [],
        posterpath : []
    };

// for (let i = 0; i < movie.length; i++) {
   movie.forEach((data)=>{
       movieobj.title.push(data.original_title);
       movieobj.id.push(data.id);
       movieobj.posterpath.push(data.poster_path);
  });
//   movieobj.push(movieobj);
//   console.log ("movieobj push populatepagebefore", movieobj);
//   domBuilder.populatePageBeforeTracked(movieobj);
    //    debugger;
    //    console.log('movieobj: ', movieobj);
// }   //    debugger;
    //    console.log("obj from domBuilder", movie);
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


// function populatePageBeforeTracked(arrayOfMovies) {
// 	// console.log ("arRaY", arrayOfMovies);
//     let ourDiv = document.getElementById("forHandlebarsInsert");
//     ourDiv.innerHTML = initialMovieTemplate(arrayOfMovies);
//     // $("#attraction-column").append(newDiv);
// }


module.exports = {domBuilder};
