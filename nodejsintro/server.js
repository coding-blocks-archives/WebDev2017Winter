var express = require('express')
var app = express();
var app2 = express();

app.get('/a', function (req, res) {
	res.send('<h1>alpha</h1>');
})

// asdasdh

app.listen(2222, function () {
	console.log('now we are running');
	app2.listen(3333)
});