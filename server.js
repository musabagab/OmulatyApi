// IMPORTS
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database connected!'));
// MIDDLWARES
app.use(express.json());
// ROUTES
const currenciesRoute = require('./Routes/currencies_route');
app.use('/currencies', currenciesRoute);


app.listen(3000, () => console.log('Server started!'));
