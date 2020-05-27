const express = require('express');
const router = express.Router();
const Currency = require('../models/currency');
// Getting all
router.get('/', async (req, res) => {
    try {
        const currencies = await Currency.find();
        res.status(200).json(currencies);
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
});
// Creating One
router.post('/', async (req, res) => {
    const currency = new Currency({
        name: req.body.name,
        sellPrice: req.body.sellPrice,
        buyPrice: req.body.buyPrice,
    });

    try {
        const newCurrency = await currency.save();
        res.status(201).json(newCurrency);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Getting One
router.get('/:id', getCurrency, (req, res) => {
    res.send(res.currency);
});

// Updating One
router.patch('/:id', getCurrency, async (req, res) => {
    if (req.body.name != null) {
        res.currency.name = req.body.name;
    }

    if (req.body.sellPrice != null) {
        res.currency.sellPrice = req.body.sellPrice;
    }

    if (req.body.buyPrice != null) {
        res.currency.buyPrice = req.body.buyPrice;
    }

    try {
        const updateCurrency = await res.currency.save();
        res.json(updateCurrency);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});
// Deleteing One
router.delete('/:id', getCurrency, async (req, res) => {
    try {
        await res.currency.remove();
        res.json({ message: 'Delelted currency!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCurrency(req, res, next) {
    let currency;
    try {
        currency = await Currency.findById(req.params.id);
        if (currency == null) {
            return res.status(404).json({ message: 'Cannot find that currency' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.currency = currency;

    next();
}


module.exports = router;