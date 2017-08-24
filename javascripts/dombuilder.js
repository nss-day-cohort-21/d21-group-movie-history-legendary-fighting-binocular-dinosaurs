'use strict';

var cards = require('../templates/cards.hbs');


function domBuilder(movie){
    let movieobj = {
        title : [],
        id : [],
        posterpath : []
    };

   movie.results.forEach((data)=>{
       movieobj.title.push(data.original_title);
       movieobj.id.push(data.id);
       movieobj.posterpath.push(data.poster_path);
});
       console.log("obj from domBuilder", movieobj);
      $(".row").html('');
      movieobj.id.forEach((item) => {
         console.log("item", item);

         $(".row").append(cards(item));

      });

}

module.exports = domBuilder;