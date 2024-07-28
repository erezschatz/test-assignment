const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('countries', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      capital: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      region: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      subregion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      population: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      timezone: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      continent: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      flag_url: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('countries');
  }
};