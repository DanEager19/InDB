global.TextEncoder = require('util').TextEncoder
global.TextDecoder = require('util').TextDecoder
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const { MongoClient } = require('mongodb')

const uri = 'mongodb://www.in-db.net:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const database = client.db('index')
const games = database.collection('games')

let doc = {}

async function insertEntry () {
  try {
    await client.connect()
    await games.insertOne(doc)
    console.log('Entry sent')
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/add_entry.html')
})

app.post('/', urlencodedParser, (req, res) => {
  doc = {
    title: req.body.title,
    summary: req.body.summary,
    img: '',
    developer: req.body.dev,
    publisher: req.body.pub,
    release_date: req.body.date,
    genres: [req.body.genres],
    rating: req.body.rating,
    os: req.body.os,
    processor: req.body.cpu,
    memory: req.body.ram,
    graphics: req.body.gpu,
    storage: req.body.storage
  }
  insertEntry().catch(console.error)
  res.sendFile(__dirname + '/view/index.html')
})

app.listen(3000)
