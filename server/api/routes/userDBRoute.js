'use strict'

module.exports = (app) => {
    const userDB = require('../controllers/userDBController');

    app.route('/userDB')
        .get(userDB.showUserDB)
        .post(userDB.createEntry);
}