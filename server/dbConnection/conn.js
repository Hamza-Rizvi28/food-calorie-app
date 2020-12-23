const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('calorie_DB', 'root', 'hamza123', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false //removes createdAt, updatedAt columns that are created by default
  }
});

module.exports = sequelize;