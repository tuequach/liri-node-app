# Liri-Node-Application with Node
*******************************************************************************
## About The Application: 
- LIRI is a Language Interpretation and Recognition Interface that is similar to Siri. It utilizes the node.js command line which takes in certain parameters to gives back any data. The user interface contained four specific commands which was:

- concert-this
- spotify-this-song
- movie-this
- do-what-it-says
*******************************************************************************
## How to use LIRI
- Open up terminal such as Git and navigate straight into the folder that contains the file liri.js 
- Run the command that you would like.

### Run the concert-this command
*node liri.js concert-this 'name of artist of band'
 - The Output of the system will display a list of all events and location of when and where the band will have their show next. In addition, it will also log all results into the log.txt file.
 ![alt text](https://github.com/tuequach/liri-node-app/blob/master/Images%20from%20Application%20Working/concert-this.jpeg)

### Run the spotify-this-song command
*node liri.js spotify-this-song 'name of the song'
- The Output of the system will display a list of information associated with the certain song, showing multiple records and append to the log.txt file.
![alt text](https://github.com/tuequach/liri-node-app/blob/master/Images%20from%20Application%20Working/spotify-this-song.jpeg)

### Run the movie-this command
*node liri.js movie this 'name of the movie'
- The Output will display all information associated with the movie and display the results into the log.txt file.
![alt text](https://github.com/tuequach/liri-node-app/blob/master/Images%20from%20Application%20Working/movie-this.jpeg)

### Run the do-what-it-says command
*node liri.js do-what-it-says
- The Output will display the text in the random.txt file and show the information listed into the random.txt file 
![alt text](https://github.com/tuequach/liri-node-app/blob/master/Images%20from%20Application%20Working/Do-what-it-say.jpeg)

*******************************************************************************

## All Technologies Used

Javascript

Node.js

Node NPM Packages: 
- Node-Spotify-API
- Request
- Moment
- DotEnv

APIs used: 
- Spotify
- OMDB
- Bands in Town

Terminal: 
- Git

Flow Control:
- Github 
