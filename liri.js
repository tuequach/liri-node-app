require("dotenv").config();


var request = require('request');
var fs = require('fs');
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var userOpt = process.argv[2];
var inputPara = process.argv[3];

UserInputs (userOpt, inputPara);

//functions in switch statements
function UserInputs (userOpt, inputPara) {
    switch (userOpt) {
        case 'concert-this':
            showConcertInfo(inputPara);
            break;
        case 'spotify-this-song':
            showSongInfo(inputPara);
            break;
        case 'movie-this':
            showMovieInfo(inputPara);
            break;
        case 'do-what-it-says':
            showSomeInfo();
            break;
        default:
            console.log('Invalid!! This is not an Option. Please choose any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says')
    }
}


//function for concert info: bands in town 
function showConcertInfo(inputPara) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + inputPara + "/events?app_id=codingbootcamp";
    request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {
        var concerts = JSON.parse(body);
        for (var i=0; i < concerts.length; i++) {
            console.log ('EVENT INFO' +'\n');
            fs.appendFileSync('log.txt', '*****EVENT INFO***** \n');  //append to log.txt
            console.log (i);
            fs.appendFileSync('log.txt', i+ '\n');
            console.log('Name of the Venue: ' + concerts[i].venue.name);
            fs.appendFileSync('log.txt', 'Name of the Venue: ' + concerts[i].venue.name+ '\n');
            console.log('Venue Location: ' + concerts[i].venue.city);
            fs.appendFileSync('log.txt', 'Venue Location ' + concerts[i].venue.city+'\n');
            console.log('Date of the Event: ' + concerts[i].datetime);
            fs.appendFileSync('log.txt', 'Date of the Event: ' + concerts[i].dateTime+ '\n');
            fs.appendFileSync('log.txt', '***************'+ '\n');
        }
    } else {
        console.log('Error!!!!');
    }
});
    }

    //function for music info:spotify 
function showSongInfo(inputPara) {
    if (inputPara === undefined) {
        inputPara = 'This Sign'; 
    }
spotify.search (
    {
            type: 'track',
            query: inputPara
    },
    function (err, data) {
        if (err) {
            console.log('Error occured: ' + err);
            return;
        }

        var songs = data.tracks.items;

        for (var i=0; i < songs.length; i ++) {
            console.log('**********SONG INFO***********');
            fs.appendFileSync('log.txt', '*****SONG INFO***** \n');  //append to log.txt
            console.log (i);
            fs.appendFileSync('log.txt', i + '\n');
            console.log('Song name: ' + songs[i].name);
            fs.appendFileSync('log.txt', 'Song Name: ' + songs[i].name + '\n');
            console.log('Preview Song: ' + songs[i].previous_url);
            fs.appendFileSync('log.txt', 'Preview Song: ' + songs[i].previous_url + '\n');
            console.log('Album: ' + songs[i].album.name);
            fs.appendFileSync('log.txt', 'Album: ' + songs[i].album.name + '\n');
            console.log('Artist(s): ' + songs[i].artists[0].name);
            fs.appendFileSync('log.txt', 'Artist(s): ' + songs[i].artists[0].name + '\n');
            console.log('***************');
            fs.appendFileSync('log.txt', '***************'+ '\n');
            }
        }
    );
};

//function for movie info: OMDB
function showMovieInfo (inputPara){
    if (inputPara === undefined) {
        inputPara = 'Mr. Nobody'
        console.log('--------------');
        fs.appendFileSync("log.txt", "-----------------------\n");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        fs.appendFileSync("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" +"\n");
        console.log("It's on Netflix!");
        fs.appendFileSync("log.txt", "It's on Netflix!\n");
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + inputPara + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
        var movies = JSON.parse(body);
        console.log("**********MOVIE INFO*********");  
        fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
        console.log("Title: " + movies.Title);
        fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
        console.log("Release Year: " + movies.Year);
        fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
        console.log("IMDB Rating: " + movies.imdbRating);
        fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
        console.log("Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies));
        fs.appendFileSync("log.txt", "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies) + "\n");
        console.log("Country of Production: " + movies.Country);
        fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
        console.log("Language: " + movies.Language);
        fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
        console.log("Plot: " + movies.Plot);
        fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
        console.log("Actors: " + movies.Actors);
        fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
        console.log("*****************************");  
        fs.appendFileSync("log.txt", "*****************************\n");
    } else{
      console.log('Error occurred.');
    }

});}

//ratings functions
function getRottenTomatoesRatingObject (data) {
    return data.Ratings.find(function (item) {
       return item.Source === "Rotten Tomatoes";
    });
  }
  
  function getRottenTomatoesRatingValue (data) {
    return getRottenTomatoesRatingObject(data).Value;
  }

//random.txt files.
  function showSomeInfo(){
	fs.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
		}
        var dataArr = data.split(',');
        UserInputs(dataArr[0], dataArr[1]);
    });
}
