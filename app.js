const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');

const app = express();

const medicines = require('./routes/api/medicines');

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (_req, res) => res.send('Hello world!'));

app.use('/api/medicines', medicines);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
