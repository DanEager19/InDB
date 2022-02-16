'use strict'

module.exports = (app: any) => {
    const List = require('../controllers/games');

    app.route('/games')
        .get(List.listAllGames)
        .post(List.createGame);

    app.route('/:title')
        .get(List.findByTitle)
        .put(List.updateGame)
        .delete(List.removeGame);

    app.route('/update/:title')
        .post(List.updateGame)
}