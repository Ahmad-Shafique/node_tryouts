

const userRoutes = require('./users');
const depositRateRoutes = require('./depositRate');
const instituteRoutes = require('./institute');
const instituteDirectorRoutes = require('./instituteDirector');
const newsFeedRoutes = require('./newsFeed');
const tdrCreditRatingRoutes = require('./tdrCreditRating');
const tdrInvestmentRoutes = require('./tdrInvestment');

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
            user:'root',
            database: 'ia'
        });

        connection.connect(function(err){
            if(err) throw err;
            console.log('Connection to MySQL established !!!');
        });

        let sql = 'select * from user';

        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });



    userRoutes(app,db);
    depositRateRoutes(app,db);
    instituteRoutes(app,db);
    instituteDirectorRoutes(app,db);
    newsFeedRoutes(app,db);
    tdrCreditRatingRoutes(app,db);
    tdrInvestmentRoutes(app,db);
}