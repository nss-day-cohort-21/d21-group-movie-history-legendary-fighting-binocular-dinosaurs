"use strict";

var template = require('./dombuilder');

function initialSearch(searchInput) {
	return new Promise((resolve,reject)=>{
      
        $.ajax({
            
            url: `https://api.themoviedb.org/3/search/movie?api_key=01fccab4977fb9e675b2a37846f08da4&language=en-US&query=${searchInput}&page=1&include_adult=false`,
        // crossDomain:true
        }).done((songdata)=>{
            resolve(songdata.results);
            console.log("songdata is", songdata.results);
            	
        });
    });
}
    

function castSearch(poster_path) {
        // console.log("posterpath", poster_path);
            
        return new Promise((resolve,reject)=>{

            let url="https://image.tmdb.org/t/p/w500"+`${poster_path}`;
           
            resolve(url);
                
        });
    }



$("#searchInput").on("keydown",(e)=>{
    if (e.keyCode == 13) {
        e.preventDefault();
        let search = $("#searchInput").val();
        initialSearch(search).then((data)=>{
                template(data);
        });
    }
});
	


module.exports ={initialSearch};




