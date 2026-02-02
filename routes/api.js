const express = require('express');
const router = express.Router();
const {cityShuffler} = require('../public/javascripts/cityShuffler');

router.get('/cities', (req, res) => {
    const cities = cityShuffler();
    res.json(cities);
});

module.exports = router;