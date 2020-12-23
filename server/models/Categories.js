const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../dbConnection/conn');

const Category = db.define('category', {
    categoryid: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true
    },
    categoryname: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
  tableName: 'category'
});

module.exports = Category;