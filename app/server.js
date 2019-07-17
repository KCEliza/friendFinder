
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("app/public"));

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});