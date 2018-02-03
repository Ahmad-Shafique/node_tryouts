// const fileAccessor = require('../_utilities/file_accessor');
const fs= require('fs');

module.exports = function(app, db) {
    app.get('/testGet', (req,res) => {
        res.send('Testing get function');
    });

    app.post('/createCardProduct', (req,res) => {
        res.send('In post method');
        fs.writeFile('message.txt', 'Hello World Node.js', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        
        console.log('Done accessing file');
    });
};