require("dotenv").config();

var keys = require("./keys.js");
var fs = require('fs');
var request = require('request');
var Spotify = require('node-spotify-api');
var Spotify = new Spotify(keys.spotify);

var userOpt = process.argv[2];
var inputPara = process.argv[3];

userInputs (userOpt, inputPara);

}



