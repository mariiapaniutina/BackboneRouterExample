/*
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8082);
*/

var express = require('express');
var path = require('path');
var port = process.env.PORT || 8093;
var app = express();


app.use(express.static(__dirname));


app.get('*', function(request, response){
    response.sendfile('./index.html');
});

app.listen(port);
console.log("server started on port " + port);