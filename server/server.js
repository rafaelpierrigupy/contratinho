var express = require('express');
var http = require('http');
var app = express();

class Server {
  run() {
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
      res.set('Content-Type', 'application/json');
      res.send(carDB[req.params.id - 1]);
    });
    
    var port = 5555;
    this.httpServer = http.createServer(app);
    this.httpServer.listen('3333');
    console.log(`Example app listening on port ${port}!`);
  }
  close() {
    this.httpServer.close();
  }
}

module.exports = Server;
