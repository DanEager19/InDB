const express = require('express');
//const {MongoClient} = require('mongodb');
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})