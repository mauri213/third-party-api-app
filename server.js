//127.0.0.1 == 0.0.0.0 == localhost
//default port for most web servers is 80. for web traffic. web requests.
//ifconfig | grep broadcast
//static assets = html, css, js, images, video and audio

var express = require('express');
var app = express(); //app is our server
var port = 3000;

app.use(express.static(__dirname + '/public'));//string that references the current directory
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/src/css'));
//Remove this when we start building our Sass: Will comply to our dist folder
app.listen(port);	