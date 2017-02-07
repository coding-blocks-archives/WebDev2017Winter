/**
 * Created by championswimmer on 30/01/17.
 */

const express = require('express');

const route = express.Router();

route.get('/', function (req, res) {
    res.send('Hello to students route')
});

route.get('/cb', function (req, res) {
    res.redirect('http://students.codingblocks.com')
});

route.get('/varun', function (req, res) {
    res.render('student', {
        name: 'Varun',
        course: 'Elixir'
    })
});

module.exports = route;