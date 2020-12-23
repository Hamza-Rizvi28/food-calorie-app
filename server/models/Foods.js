const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../dbConnection/conn');

const Food = db.define('food', {
    foodid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
    },
    foodname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }    
}, {
  tableName: 'food'
});

module.exports = Food;