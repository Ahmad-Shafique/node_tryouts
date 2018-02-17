// const fileAccessor = require('../_utilities/file_accessor');
const fs= require('fs');
// var curl = require('curlrequest');

module.exports = function(app, db) {
    app.get('/testGet', (req,res) => {
        console.log(req.body);
        res.send( 'Testing get function');
    });

    app.post('/testPost' , (req,res) => {
        console.log(req.body);
        res.send( 'Testing Post Success');
    });

    app.get('/createCardProduct', (req,res) => {
        res.send("Card product creation api");






    
    });
};