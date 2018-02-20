

const userRoutes = require('./users');
const depositRateRoutes = require('./depositRate');
const instituteRoutes = require('./institute');
const instituteDirectorRoutes = require('./instituteDirector');
const newsFeedRoutes = require('./newsFeed');
const tdrCreditRatingRoutes = require('./tdrCreditRating');
const tdrInvestmentRoutes = require('./tdrInvestment');

module.exports = function(app,db){
    userRoutes(app,db);
    depositRateRoutes(app,db);
    instituteRoutes(app,db);
    instituteDirectorRoutes(app,db);
    newsFeedRoutes(app,db);
    tdrCreditRatingRoutes(app,db);
    tdrInvestmentRoutes(app,db);
}