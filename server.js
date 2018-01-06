// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// var ret = { "ipaddress": null, "language" : null, "software" : null};
var ret = null;
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("*", function (req, res) {
  var lang = req.headers['accept-language'];
  var ip  = req.ip;
  var opsys = req.headers['user-agent'];
  ret = { "ipaddress": ip, "language" : lang, "software" : opsys};
  res.end();
});

app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html');
  // res.end(JSON.stringify(ret));
});

app.get("/info", function (request, response) {
  response.send(ret);
});

// // could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
// app.post("/dreams", function (request, response) {
//   dreams.push(request.query.dream);
//   response.sendStatus(200);
// });

// // Simple in-memory store for now
// var dreams = [
//   "Find and count some sheep",
//   "Climb a really tall mountain",
//   "Wash the dishes"
// ];


// http://expressjs.com/en/starter/basic-routing.html

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
