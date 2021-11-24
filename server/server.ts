const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { MongoClient } = require('mongodb')

const uri = 'mongodb://192.168.1.137:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const database = client.db('index')
const games = database.collection('games')

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
  games.find{(err, doc) =>{
    res.title:"Hades"})
}

app.get('/express_backend', (req, res) => {
  games.find({"title":"Hades"})
  res.send({title: 'CONNECTED'})
})
