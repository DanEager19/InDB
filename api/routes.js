'use strict'

module.exports = (app) => {
    const List = require('./controller');

    app.route('/games')
        .get(List.listAllGames)
        .post(List.createGame);

    app.route('/:title')
        .get(List.findByTitle)
        .put(List.updateGame)
        .delete(List.removeGame);

    app.route('/update/:title')
        .post(List.updateGame)
    
    app.route('/userDB')
        .get(List.showUserDB)
        .post(List.createEntry);
}