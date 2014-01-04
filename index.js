/*jshint node:true*/

"use strict";

var express = require('express');


var app = express();


app.use('/static', express.static(__dirname + '/static'));
app.engine('mustache', require('mu2express').engine);
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', require('./pages/index.js'));


app.listen(3000);
console.log("\nNode listening on port 3000\n");
