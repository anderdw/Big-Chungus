$(document).ready(() => {

var queryURL = "http://www.omdbapi.com/?i=tt3896198&apikey=ea888575";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
console.log(response);
console.log(response.Metascore);

$("#keyword").text(response.Metascore);
$("#genre").text(response.Genre);
$("#actor").text(response.Actors);
$("#mpaa").text(response.Rated);
$("#resultsPage").text(response.Poster);

//This neeeds to be linked to Utelly not OMDB!
//$("#whereToWatch").text(response.Metascore);
});

   

    
   /* $('#keywordLabel').on('submit', (e) => {
        console.log ($('#searchText').val());
        e.preventDefault();
    }); */

//Reloads the page when you click the Home button on the navbar
    $('.keyword').click(function() {
        location.reload();
        });

});     




