const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    name: {
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

    iconName: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Currency', currencySchema);