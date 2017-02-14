/**
 * Created by championswimmer on 14/02/17.
 */
const express = require('express');
const app = express();

const bp = require('body-parser');

const dbutils = require('./dbutils');

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.use('/', express.static(__dirname + "/public"));

app.get('/todo/get', (req, res) => {
    dbutils.getTodos(function (rows) {
        res.send(rows)
    })
});

app.post('/todo/new', (req,res) => {
    dbutils.addTodo(req.body.task, function (err) {
        if (err) throw err;

        res.send("SUCCESS")
    })
});



app.listen(3333, function () {
    console.log('Started');
});