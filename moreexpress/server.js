/**
 * Created by championswimmer on 30/01/17.
 */


const express = require('express');
const fs = require('fs');

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

const routes = {
    students: require('./routes/students'),
    teachers: require('./routes/teachers')

};

app.get('/abcd', function (req, res)  {
    res.send("Hello to abcd")
});

app.use('/students', routes.students);

app.use('/public', express.static(__dirname + '/public_html'));

app.get('/error', function (req, res) {
    fs.readFile("asfasdasd", function (err, data) {
        if (err) {
            res.send(err.message)
        }
    })
});

app.listen(4444, function () {
    console.log("Server started");
});