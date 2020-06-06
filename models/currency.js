const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    arabicName: {
        type: String,
        required: true,
    },
    sellPrice: {
        type: String,
        required: true,
    },
    buyPrice: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Currency', currencySchema);