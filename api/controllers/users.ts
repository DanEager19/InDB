'use strict'

import mongoose from 'mongoose';
const userdb = mongoose.model('userDB');

exports.showUserDB = (res:any) => {
    userdb.find({}, (err, list) =>{
        if (err)
            res.send(err);
        res.json(list);
    });
};

exports.createEntry = (req:any, res:any) => {
    let newuserdb = new userdb(req.body);
    newuserdb.save((err:any, List:any) => {
        if (err)
            res.send(err);
        res.json(List);
        console.log('Created new user database')
    });
};
