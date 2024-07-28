const Country = require('../models/country');

exports.getAllCountries = async (req, res) => {
    try {
        const countries = await Country.findAll();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'General Error' });
    }
};

exports.getCountryById = async (req, res) => {
    try {
        const country = await Country.findByPk(req.params.countryId);
        if (country) {
            return res.json(country);
        } else {
            return res.status(404).json({ error: 'Country Not Found' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'General Error' });
    }
};

exports.updateCountry = async (req, res) => {
    const { population, capital } = req.body;

    // validation, population should be a number, positive and whole
    // capital should only be characters, spaces, dashes, dots and apostrophes
    if (Number.isNaN(Number.parseInt(population)) || capital.match(/^[-\.'A-Za-z ]+$/) === null) { 
        return res.status(422).json({ error: 'Incorrect parameter' });
    }

    // persist the values and return new object
    try {
        const country = await Country.findByPk(req.params.countryId);
        if (country) {
            country.population = population;
            country.capital = capital;
            country.updatedAt = new Date();
            await country.save();
            return res.json(country);
        } else {
            return res.status(404).json({ error: 'Country not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Cannot find country' });
    }
};