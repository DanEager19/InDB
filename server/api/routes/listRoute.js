'use strict'

module.exports = (app) => {
    const List = require('../controllers/listController');

    app.route('/list')
        .get(List.showList)

}