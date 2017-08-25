"use strict";

var template = require('./dombuilder');

function initialSearch(searchInput) {
	return new Promise((resolve,reject)=>{
      
        $.ajax({  
            url: `https://api.themoviedb.org/3/search/movie?api_key=01fccab4977fb9e675b2a37846f08da4&language=en-US&query=${searchInput}&page=1&include_adult=false`,
        }).done((songdata)=>{
            resolve(songdata.results);
            console.log("songdata is", songdata.results);
            	
        });
    });
}
    

function castSearch(movieid) {
        // console.log("posterpath", poster_path);
            
        return new Promise((resolve,reject)=>{
        $.ajax({
            url:"https://api.themoviedb.org/3/movie/" +`${movieid}` + "/credits?api_key=c93dee63a7012453634a328e5dd78eef"
         }).done((url)=>{  
            resolve(url);
                
        });
    });
}

function singleMovieSearch(movieid) {
    return new Promise((resolve,reject)=>{
        $.ajax({
            url:"https://api.themoviedb.org/3/movie/" +`${movieid}` + "?api_key=c93dee63a7012453634a328e5dd78eef"
         }).done((url)=>{  
            resolve(url);
                
        });
    });
}

var carddata={};

$("#searchInput").on("keydown",(e)=>{
    if (e.keyCode == 13) {
        e.preventDefault();
        let search = $("#searchInput").val();
        initialSearch(search).then((data)=>{
            carddata = data;
            data.forEach((item,index)=>{
    
                    
                castSearch(item.id).then((castid)=>{
                    if (castid.cast.length>0) {
                        carddata[index].cast = castid.cast;
                    }   
                    console.log("carddata from first", carddata[index].cast);
                    if (carddata[index].cast!==undefined ) {
                        console.log("got here!!!!!!");
                            
                        for (var i = 0; i<5;i++) {
                            console.log("cast members", carddata[index].cast[i]);
                              template(carddata);  
                        }

                    }
                });
                    
                    
            });
                
                
        });
    }
});
	


module.exports =castSearch;




