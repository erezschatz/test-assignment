const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesController');

router.get('/', countriesController.getAllCountries);
router.get('/:countryId', countriesController.getCountryById);
router.put('/:countryId', countriesController.updateCountry);

module.exports = router;