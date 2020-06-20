// IMPORTS
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://localhost:27017/currencies";
// DATABASE CONNECTION get url from ENV
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database connected!'));
// MIDDLWARES
app.use(express.json());
// ROUTES
const currenciesRoute = require('./Routes/currencies_route');
app.use('/currencies', currenciesRoute);
const port = 80;
app.listen(port, () => {
    console.log('server connected ' + port);
});



// SERVER => https://agile-reaches-50538.herokuapp.com/
// mongodb://<dbuser>:<dbpassword>@ds139436.mlab.com:39436/currencies
