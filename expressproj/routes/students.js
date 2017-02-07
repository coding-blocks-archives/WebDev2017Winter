/**
 * Created by championswimmer on 24/01/17.
 */

var express = require('express');
var route = express.Router();

var students = [
    {name: "Abhishek", course: "Pandora"},
    {name: "Apoorva", course: "Elixir"},
    {name: "Bhavya", course: "Launchpad"},
    {name: "Aditi", course: "Crux"},
]

route.get('/', function (req, res) {
    res.send('students page')
});

route.get('/:id', function(req,res) {
    var studentId = req.params.id;

    res.render('student', students[req.params.id]);
})

route.get('/:id/course', function(req,res) {
    res.send(students[req.params.id].course)
})


module.exports = route;