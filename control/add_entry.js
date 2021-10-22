global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const {MongoClient} = require('mongodb');

const database = client.db("index");
const games = database.collection("games");
const uri = "mongodb+srv://daniel:G9l$23mo0@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var doc = {
    title:``,
    summary:"",
    img:"",
    developer:"",
    publisher:"",
    release_date:{"$date":""},
    genres:[],
    rating:"",
    os:"",
    processor:"",
    memory:"",
    graphics:"",
    storage:""
}

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

insertEntry().catch(console.error);