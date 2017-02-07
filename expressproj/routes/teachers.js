/**
 * Created by championswimmer on 24/01/17.
 */

var express = require('express');
var route = express.Router();

var teachers = [
    "Arnav",
    "Sumeet",
    "Prateek"
];

route.get('/:id', function(req,res) {

    res.send(teachers[req.params.id]);
})

route.get('/', function (req, res) {
    res.send('teachers page')
})

module.exports = route;