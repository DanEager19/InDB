const mongoose = require('mongoose'), Game = mongoose.model('Games');

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
    });
};

exports.listGameInfo = (req, res) => {
    Game.findById(req.params.gameId, (err, game) => {
        if (err)
            res.send(err);
        res.json(game);
    });
};

exports.updateGame = (req, res) => {
    Game.findOneAndUpdate({_id:req.params.gameId}, req.body, {new:true}, 
        (err, game) => {
            if (err)
                res.send(err);
            res.json(game);
        });
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