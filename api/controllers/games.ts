'use strict'
import mongoose from 'mongoose';
const Game = mongoose.model('Games');

exports.listAllGames = (res:any) => {
    Game.find({}, (err, game) =>{
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.createGame = (req:any, res:any) => {
    let newGame = new Game(req.body);
    newGame.save((err:any, game:any) => {
        if (err)
            res.send(err);
        res.json(game);
        console.log('Created new entry')
    });
};

exports.listGameInfo = (req:any, res:any) => {
    Game.findById(req.params.gameId, (err:any, game:any) => {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.findByTitle = (req:any, res:any) => {
    Game.find({title: req.params.title}, (err, game) => {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.updateGame = (req:any, res:any) => {
    Game.findOneAndUpdate({title:req.params.title}, req.body, {new:true}, 
        (err, game) => {
            if (err)
                res.send(err);
            res.json(game);
        });
        console.log('Updated entry')
};

exports.removeGame = (req:any, res:any) => {
    Game.deleteOne({
        _id: req.params.gameId
    }, function (err: any, game: any) {
        if (err)
            res.send(err);
        else
            console.log(`${game} successfully deleted.`);
    });
};