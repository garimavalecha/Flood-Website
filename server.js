const express = require('express');
const app = express();
var http = require('http')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api-routes');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
var server = http.createServer(app)

mongoose.connect('mongodb://flood:password12@ds213615.mlab.com:13615/flood-data', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongodb connected!");
});


app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
app.use('/api', apiRoutes);
const port = 8000

app.get('/', function(request, response) {
  response.render( __dirname + '/views/index.pug');
});

app.set('port', process.env.PORT || 8000);
//app.set('host', process.env.HOST || '0.0.0.0');
app.set('host',process.env.HOST || '127.0.0.1');
server.listen(app.get('port'), app.get('host'), function(){
	console.log("Express server listening on port "+app.get('port'));
});

