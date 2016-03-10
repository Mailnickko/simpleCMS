//Express
var express = require('express');
var path = require('path');
var app = express();

//Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json());

//Static
app.use(express.static(path.join(__dirname, './client')));

//Mongoose
require('./server/config/mongoose.js');
require('./server/config/server_routes.js')(app);

//Server
var server = app.listen(process.env.PORT || 5000)
