'use strict'

const mongoose = require('mongoose'), 
List = mongoose.model('List');

exports.showList = (req, res) => {
    List.find({}, (err, list) =>{
        if (err)
            res.send(err);
        res.json(list);
    });
};
