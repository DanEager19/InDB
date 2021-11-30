const gameRoutes = require('./gameRoutes');

module.exports = function(app, db) {
    gameRoutes(app,db);
};