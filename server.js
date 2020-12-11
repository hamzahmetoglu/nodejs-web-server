const { request } = require("express");

var express = require("express");
var app = express();
var port = 3000;

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/hakkimda', middleware.requiredAuthentication,function(req, res) {
    res.send('HAMZA BEN');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('Server Başlatıldı.', 'http://localhost:'+ port);
});