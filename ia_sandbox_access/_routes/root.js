// const request= require('request');


module.exports = function(app,db){
    app.get('/ia-get-request-test', (req,res) => {
        console.log('IA get request perfectly healthy.');
        console.log('Sending greetings now...');
        res.send("Hello World");
    });
    app.post('/ia-post-request-test', (req,res) => {
        console.log('IA post request perfectly healthy.');
        console.log('Sending greetings now...');
        res.send("Hello World");
    });

    app.get('/test-mysql', (req,res) => {
        var connection = db.createConnection({
            host:'localhost',
            user:'root'
        });

        connection.connect(function(err){
            if(err) throw err;
            console.log('Connection to MySQL established !!!');
        })
    })
};