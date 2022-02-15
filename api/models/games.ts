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
module.exports = mongoose.model('Games', GameSchema);
