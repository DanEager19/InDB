'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema ({
    title: {type: String }, 
    summary: { type: String },
    dev: { type: String },
    pub: { type: String }, 
    date: { type: Date }, 
    genres: { type: String },
    rating: { type: String },
    os: { type: String }, 
    cpu: { type: String }, 
    ram: { type: String }, 
    gpu: { type: String },
    storage: { type: String }
});

const userDBSchema = new Schema ({
    entry: {
        type: String
    },
    score: {
        type: Number
        //Should restrict to a number between 1-10
    },
    status: {
        type: [{
            type: String,
            enum: ['Playing', 'Finished', 'Completed', 'Paused', 'Dropped', 'Wishlisted']
        }]
    }
});

module.exports = mongoose.model('userDB', userDBSchema);
module.exports = mongoose.model('Games', GameSchema);