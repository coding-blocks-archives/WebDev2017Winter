/**
 * Created by championswimmer on 24/01/17.
 */

var express = require('express');

var app = express();

var teachers = require('./routes/teachers');
var students = require('./routes/students');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use('/teachers', teachers);
app.use('/students', students);

app.use(function (req, res, next) {
    res.send('This route is not available');
});


app.listen(2222, function () {
    console.log('Server is running');
});