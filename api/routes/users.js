'use strict'

module.exports = (app) => {
    const List = require('../controllers/users');

    app.route('/userDB')
        .get(List.showUserDB)
        .post(List.createEntry);
}