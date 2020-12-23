const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../dbConnection/conn');

const User_Food = db.define('user_food', {
    userid: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true
    },
    foodid: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true
    },
    categoryid: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        primaryKey: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        primaryKey: true
    },
    food_qty: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }    
}, {
  tableName: 'user_food'
});

module.exports = User_Food;