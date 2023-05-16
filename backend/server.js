const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const speciesRouter = require('./routes/species');


app.use('/species', speciesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})