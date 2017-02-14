/**
 * Created by championswimmer on 07/02/17.
 */
const express = require('express');
const app = express();
const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    database: "cbweb",
    user: "cbuser",
    password: "cbpass"
});

dbConn.connect();

app.get('/add', function (req, res) {
   var todo = req.query.todo;

});

app.get('/show', function (req, res) {
    dbConn.query("SELECT * FROM todos", function (err, result, fields) {
        if (err) throw err;
        console.log(col);
        console.log(rows);
    })
});



app.listen(4545, () => {
    console.log('Started');
});