


const noteRoutes = require ('./note_routes');
const cardProductRoutes = require('./cardProductRoutes');
const fundingSourceRoutes = require('./fundingSourceRoutes');
const userRoutes = require('./userRoutes');
const cardRoutes = require('./cardRoutes');
const gpaRoutes = require('./gpaRoutes');

module.exports = function(app,db){
    // noteRoutes(app,db);
    cardProductRoutes(app,db);
    fundingSourceRoutes(app,db);
    userRoutes(app,db);
    cardRoutes(app,db);
    gpaRoutes(app,db);
};