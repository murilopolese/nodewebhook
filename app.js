var exec = require( 'child_process' ).exec;
var express = require( 'express' );
var app = express();

var config = require( './config.js' );

var pull = function( repo ) {
	exec( 'rm -rf ' + repo.dest );
	exec( 'mkdir ' + repo.dest );
	exec( 'git clone ' + repo.url + ' ' + repo.dest );
	/*exec( '(cd ' + repo.dest + ' && git pull origin master)');*/
}

config.repos.forEach( pull );

app.all( '/', function( req, res ) {
	console.log( 'hook', new Date() );
	config.repos.forEach( pull );
	res.end();
});

app.listen( process.env.PORT || 1337 );

