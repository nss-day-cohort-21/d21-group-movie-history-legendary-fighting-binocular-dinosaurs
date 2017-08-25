'use strict';

var cards = require('../templates/cards.hbs');
var requests = require("./requests.js");




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
       console.log("obj from domBuilder", movie);
     
      $(".row").html('');
      movie.forEach((item) => {
         if (item.poster_path!==null) {
            $(".row").append(cards(item));
         }

         

      });

}

module.exports = domBuilder;