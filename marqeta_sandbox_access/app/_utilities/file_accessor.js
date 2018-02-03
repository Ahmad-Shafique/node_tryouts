const fs = require('fs');

module.exports = function WriteToFile(filename, message){
    this.filename = '/tmp/test';
    
    fs.writeFile(filename, "My message", function(err) {
        if(err){
            console.log('Error found');
        }
    });

    console.log('Message written to file');

    
};