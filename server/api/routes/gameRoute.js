'use strict'

module.exports = (app) => {
    const List = require('../controllers/gameController');

    app.route('/games')
        .get(List.listAllGames)
        .post(List.createGame);

    app.route('/:title')
        .get(List.findByTitle)
        .put(List.updateGame)
        .delete(List.removeGame);
}