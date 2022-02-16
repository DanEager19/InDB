
const auth = require('../cred.json'); 
import express from 'express';
const app: express.Application = express()
const port:number = 5000
import mongoose from 'mongoose';
const uri: string = `mongodb+srv://${auth.user}:${auth.password}@cluster0.xcoys.mongodb.net/index?retryWrites=true&w=majority`
const Data:any = require('./models/games');

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected.")
}).catch((err: { message: any; }) => {
    console.log(Error, err.message);
})

app.use(express.urlencoded({extended: true}))
app.use(express.json());

const routes = require('./routes/games');

routes(app);

app.get('*', (req:any, res:any) => {
    res.status(404).send({url:req.originalUrl + 'not found'})
})

app.listen(port);
console.log('Data list RESTful API started on port: ' + port);