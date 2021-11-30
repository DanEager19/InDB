const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const port:Number = 1515;

app.listen(port, () => {
    console.log(`Open on port ${port}`);
});