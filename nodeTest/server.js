const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app=express();

const port= 10000;

require('./app/routes')(app, {});
app.listen(port, () => {
	console.log('Node test server live on '+ port);
});