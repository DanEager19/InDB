const auth = require('../cred.json'); 
const express = require('express');
app = express()
port = process.env.PORT || 5000
mongoose = require('mongoose')
const uri = `mongodb+srv://${auth.user}:${auth.password}@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority`
Game = require('./api/models/gameModel')

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    console.log("Database Connected.")
}).catch(err => {
    console.log(Error, err.message);
})

app.use(express.urlencoded({extended: true}))
app.use(express.json());

const routes = require('./api/routes/gameRoute');

routes(app);

app.get('*', (req, res) => {
    res.status(404).send({url:req.originalUrl + 'not found'})
})

app.listen(port);
console.log('Game list RESTful API started on port: ' + port);