var express = require('express');
var app = express();

var carDB = [{
  id: 1,
  name: 'Fusca',
  manufacturer: 'Volkswagen',
}, {
  id: 2,
  name: 'Diablo Coatl',
  manufacturer: 'Lamborghini',
}];

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cars', function (req, res) {
  res.json(carDB);
});

app.get('/cars/:id', function (req, res) {
  res.json(carDB[req.params.id - 1]);
});

var port = 5555;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
