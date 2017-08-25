'use strict';

var cards = require('../templates/cards.hbs');
var request = require("./requests.js");

var $star_rating=$('.star-rating .fa');
var SetRatingStar = function(e) {
  return $star_rating.each(function(e) {
    if (parseInt($star_rating.siblings('input').val()) >= parseInt($(e.currentTarget).data('rating'))) {
      return $(this).removeClass('fa-star-o').addClass('fa-star');
    } else {
      return $(this).removeClass('fa-star').addClass('fa-star-o');
    }
  });
};


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
          
          console.log("BIGASS ITEM", item.id);
            let realid = item.id;
            $star_rating = $(`.${item.id} .fa`);
            console.log("starrating", $star_rating);
             $star_rating.on("click",(e)=>{
              console.log("hi");
                  $star_rating.siblings('input').val($(e.currentTarget).data('rating'));
                  SetRatingStar(e);
                  return SetRatingStar(e);

            
             });
            
SetRatingStar();

         }
          // if (item.cast !==undefined) {
            
          // }
         

      });

}

  $("#watched").on("click", () => {
    $("#cards").css("display","none");
    $("#watchedList").css("display", "block");
    $("#unwatchedList").css("display", "none");

  });

  $("#unwatched").on("click", () => {
    $("#cards").css("display", "none");
    $("#unwatchedList").css("display", "block");
    $("#watchedList").css("display", "none");
    
  });




SetRatingStar();
module.exports = domBuilder;
