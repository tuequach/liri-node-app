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