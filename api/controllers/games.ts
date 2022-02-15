'use strict'

const mongoose = require('mongoose');
const Game = mongoose.model('Games');

exports.listAllGames = (req, res) => {
    Game.find({}, (err, game) =>{
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.createGame = (req, res) => {
    let newGame = Game(req.body);
    newGame.save((err, game) => {
        if (err)
            res.send(err);
        res.json(game);
        console.log('Created new entry')
    });
};

exports.listGameInfo = (req, res) => {
    Game.findById(req.params.gameId, (err, game) => {
        if (err)
            res.send(err);
        res.json(game);
    });
};

//Probably useless
exports.findByTitle = (req, res) => {
    Game.find({title: req.params.title}, (err, game) => {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.updateGame = (req, res) => {
    Game.findOneAndUpdate({title:req.params.title}, req.body, {new:true}, 
        (err, game) => {
            if (err)
                res.send(err);
            res.json(game);
        });
        console.log('Updated entry')
};

exports.removeGame = (req, res) => {
    Game.remove({
        _id: req.params.gameId
    }, (err, game) => {
        if (err)
            res.send(err);
        res.json({message: `${game} successfully deleted.`});
    });
};