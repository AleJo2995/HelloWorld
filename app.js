const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors()); //Allow all origins
app.use(bodyParser.json()); //Parsing jsons for responses

//Routes
const allItems = require('./routes/items');
app.use('/items', allItems);

//Welcome route
app.get('/', (req, res) => {
    res.send('Welcome to: Hello, World API');
});

//Database connection
mongoose.connect(process.env.DB_CONNECTION, 
    {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'MongoTests'}).then(()=>{
        console.log('Database connection was established succesfully')
    })
    .catch((err)=>{
        console.log("Error connecting mongo database",err);
});

const port = process.env.port || 3000;

//Listening on port
app.listen(port, () => console.log(`Listening on port ${port}`));