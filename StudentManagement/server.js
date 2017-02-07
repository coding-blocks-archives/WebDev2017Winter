/**
 * Created by championswimmer on 30/01/17.
 */

const express = require('express');
const bodyParser = (require('body-parser'));

const app = express();

student = [];
teacher = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use('/', express.static(__dirname + '/public_html'));

app.post('/addstudent', function (req, res) {
    student.push({
        name: req.body.name,
        age: parseInt(req.body.age)
    });
    console.log(student);

    res.send(student)
});

app.get('/getstudents', function (req,res) {
    res.send(student);
});

app.post('/addteacher', function (req, res) {
    teacher.push({
        name: req.body.name,
        course: req.body.course
    });

    res.redirect('/teachers')
});

app.get('/teachers', function (req, res) {
    res.render('teachers', {
        teachers: teacher
    })
});


app.listen(4545, function () {
    console.log('server started');
});