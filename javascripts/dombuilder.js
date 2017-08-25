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
       console.log("obj from domBuilder", movie);
      $(".row").html('');
      movie.forEach((item,index) => {
     console.log("castiss?", item.cast);
       
         if (item.poster_path!==null) {
          
          
            
            $(".row").append(cards(item));
            console.log("domBuilder(items)", item);
                   
         }
          // if (item.cast !==undefined) {
            
          // }
         

      });

}



module.exports = domBuilder;
