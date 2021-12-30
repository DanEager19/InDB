const auth = require('../cred.json'); 
const express = require('express');
app = express()
port = process.env.PORT || 5001
mongoose = require('mongoose')
const uri = `mongodb+srv://${auth.user}:${auth.password}@cluster0.xcoys.mongodb.net/users?retryWrites=true&w=majority`
userDB = require('./api/models/userDBModel')

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

const routes = require('./api/routes/userDBRoute');

routes(app);

app.get('*', (req, res) => {
    res.status(404).send({url:req.originalUrl + 'not found'})
})

app.listen(port);
console.log('userDB RESTful API started on port: ' + port);