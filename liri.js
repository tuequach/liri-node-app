require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs');
var request = require('request');
var Spotify = require('node-spotify-api');
var Spotify = new Spotify(keys.spotify);

var userOpt = process.argv[2];
var inputPara = process.argv[3];

userInputs (userOpt, inputPara);

//functions in switch statements
function userInputs (userOpt, inputPara) {
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
            console.log('SONG INFO');
            fs.appendFileSync('log.txt', '*****SONG INFO***** \n');  //append to log.txt
            console.log (i);
            fs.appendFileSync('log.txt', i + '\n');
            console.log('Song name: ' + songs[i].name);
            fs.appendFileSync('log.txt', 'Song Name: ' + songs[i].name + '\n');
            console.log('Preview Song: ' + songs[i].previous.name);
            fs.appendFileSync('log.txt', 'Preview Song: ' + songs[i].previous.name+'\n');
            console.log('Date of the Event: ' + songs[i].datetime);
            fs.appendFileSync('log.txt', 'DAte of the Event: ' + songs[i].dateTime+ '\n');
            fs.appendFileSync('log.txt', '***************'+ '\n');
        }
        }
    }
)
}

