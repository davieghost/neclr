var express = require('express');
var path    = require('path');
var connect = require('connect');
var reload  = require('livereload');
var open    = require('open');
var logger  = require('morgan');
var jade    = require('jade');

var app     = express();
var server = reload.createServer();

app.set('port', 9000);
app.set('static', __dirname + '/pub');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname + '/pub')));


server.watch(__dirname + '/pub');

app.listen(app.get('port'));
console.log('Welcome to the development server, your browser is open to http://localhost:' + app.get('port'));
