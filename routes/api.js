const express = require('express');
const router = express.Router();
const {getCities} = require('../public/javascripts/cityShuffler');

router.get('/cities', (req, res) => {
    const cities = getCities();
    res.json(cities);
});

module.exports = router;