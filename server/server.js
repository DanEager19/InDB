const auth = require('./cred.json'); 
const express = require('express');
const collection = 'index'
app = express()
port = process.env.PORT || 5000
mongoose = require('mongoose')
const uri = `mongodb+srv://${auth.user}:${auth.password}@cluster0.xcoys.mongodb.net/${collection}?retryWrites=true&w=majority`
Data = require('./api/models')

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

const routes = require('./api/routes');

routes(app);

app.get('*', (req, res) => {
    res.status(404).send({url:req.originalUrl + 'not found'})
})

app.listen(port);
console.log('Data list RESTful API started on port: ' + port);