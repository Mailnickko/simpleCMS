//Express
var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

//Body Parser
var bodyParser = require('body-parser')
app.use(bodyParser.json());

//Static
app.use(express.static(path.join(__dirname, './client')));

//Mongoose
require('./server/config/mongoose.js');
require('./server/config/server_routes.js')(app);

//Server
app.listen(app.get('port'), function(){
 console.log("listening on port ", app.get('port'));
});
