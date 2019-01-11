var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
 res.sendfile('./public/index.html');
});

app.get('/works', function (req, res) {
 res.sendfile('./public/works.html');
});

app.get('/about', function (req, res) {
 res.sendfile('./public/about.html');
});

app.get('/contact', function (req, res) {
 res.sendfile('./public/contact.html');
});

app.listen(port, function () {
 console.log(`Example app listening on port !`);
});
