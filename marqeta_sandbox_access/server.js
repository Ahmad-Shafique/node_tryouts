// server.js

const express= require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 10000;

app.use(bodyParser.urlencoded({extended: true}) );

require('./app/routes/index')(app,{});

app.listen(port, () => {
    console.log('live on port ' + port);
});

