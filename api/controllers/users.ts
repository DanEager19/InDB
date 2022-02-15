'use strict'

const mongoose = require('mongoose');
const userdb = mongoose.model('userDB');

exports.showUserDB = (req, res) => {
    userdb.find({}, (err, list) =>{
        if (err)
            res.send(err);
        res.json(list);
    });
};

exports.createEntry = (req, res) => {
    let newuserdb = userdb(req.body);
    newuserdb.save((err, List) => {
        if (err)
            res.send(err);
        res.json(List);
        console.log('Created new user database')
    });
};
