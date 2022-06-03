// const express = require('express');
// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(__dirname + "/dist"))
// app.get(/.*/,function name(req, res) {
//     res.sendfile(__dirname+"/dist/index.html")
// });
// app.listen(port);

// console.log('Server Started...');

var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

// This line is from the Node.js HTTPS documentation.
var options = {
  key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
  cert: fs.readFileSync('test/fixtures/keys/agent2-cert.cert')
};

// Create a service (the app object is just a callback).
var app = express();

// Create an HTTP service.
http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(443);