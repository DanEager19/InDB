'use strict'

module.exports = (app) => {
    const List = require('../controllers/controller');

    app.route('/games')
        .get(List.listAllGames)
        .post(List.createGame);

    app.route('/games/:gameId')
        .get(List.listGameInfo)
        .put(List.updateGame)
        .delete(List.removeGame);
}