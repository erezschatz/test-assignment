const fetchCountriesApi = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    const output = data.map(c => {
      if (c.independent) {
        return {
          name: c.name.common,
          capital: c.capital[0],
          region: c.region,
          subregion: c.subregion,
          population: c.population,
          timezone: c.timezones[0],
          continent: c.continents[0],
          flag_url: c.flags.png,
          createdAt: new Date()
        }
      }
    }).filter(c => c !== undefined);
    return output;
  } catch (error) {
    return [];
  }
};


module.exports = {
  async up(queryInterface, Sequelize) {
    const seed = await fetchCountriesApi();
    await queryInterface.bulkInsert('countries', seed, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('countries', null, {});
  }
};
