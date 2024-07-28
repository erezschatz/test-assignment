const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});

const Country = sequelize.define('Country', {
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
    }
}, {
    tableName: 'countries'
});

module.exports = Country;