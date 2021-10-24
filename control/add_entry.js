global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const {MongoClient} = require('mongodb');
const auth = require("./auth.json");

const uri = `mongodb+srv://daniel:${auth.password}@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const database = client.db("index");
const games = database.collection("games");

var doc = {};

async function insertEntry() {
    try {
        await client.connect();
        await games.insertOne(doc);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

app.use(express.static(__dirname));

app.get('/', (req, res) => {
       res.sendFile(__dirname + '/add_entry.html');
});

app.post('/', urlencodedParser, (req, res) => {
    doc = {
        title:`${req.body.title}`,
        summary:`${req.body.summary}`,
        img:"",
        developer:`${req.body.dev}`,
        publisher:`${req.body.pub}`,
        release_date:{"$date":""},
        genres:[],
        rating:"",
        os:"",
        processor:"",
        memory:"",
        graphics:"",
        storage:""
    }
    insertEntry().catch(console.error);
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000);