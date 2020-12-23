const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../dbConnection/conn');

const User = db.define('user', {
    userid: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
        // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }    
}, {
  tableName: 'user'
});

module.exports = User;