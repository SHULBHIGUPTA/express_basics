var express = require('express');

var app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    // res.sendFile(__dirname + '/index.html')
    res.render('index')
})

app.get('/contact', function(req, res) {
    // res.sendFile(__dirname + '/contact.html')
    res.render('contact')
})

app.get('/profile/:name', function(req, res) {
    var data = {age: 28, job: "ninja", hobbies: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data})
})
app.listen(3000);
