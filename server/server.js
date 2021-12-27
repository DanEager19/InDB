const express = require('express');
app = express()
port = process.env.PORT || 5000
mongoose = require('mongoose')
//remove hard coded password
const uri = 'mongodb+srv://daniel:[Password]]@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority'
Game = require('./api/models/model')

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

const routes = require('./api/routes/route');

routes(app);

app.get('*', (req, res) => {
    res.status(404).send({url:req.originalUrl + 'not found'})
})

app.listen(port);
console.log('Game list RESTful API started on port: ' + port);