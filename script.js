
$(document).ready(() => {


    $( "#searchBtn" ).click(function() {
        console.log( "You clicked a paragraph!" );
    });

    

    $.ajax({
        url: "http://www.omdbapi.com/?i=tt3896198&apikey=ea888575&s=",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //Changing the image to a Img tag and then posting it to the correct section.
        var imageURL = response.Poster;

        var posterImage = $("<img>");

        posterImage.attr("src", imageURL);
        posterImage.attr("alt", "poster image");

        $("#poster").prepend(posterImage);




        $("#keyword").text("Plot: " + response.Plot);
        $("#genre").text("Genre: " + response.Genre);
        $("#actor").text("Actors & Actresses: " + response.Actors);
        $("#mpaa").text("Rated: " + response.Rated);
        $("#poster").attr("href", + response.Poster);



    });
});

