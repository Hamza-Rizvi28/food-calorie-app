module.exports = async () => {
  const db = require("../dbConnection/conn");
  const User = require("./Users");
  const Food = require("./Foods");
  const Category = require("./Categories");
  const User_Food = require("./User_Food");

  //ASSOCIATIONS
  /*
  User_Food.hasMany(User, { as: "Users", foreignKey: "userId" });
  User_Food.hasMany(Food, { as: "Foods", foreignKey: "foodId" });
  User_Food.hasMany(Category, { as: "Categories", foreignKey: "categoryId" });

  User.belongsTo(User_Food, { as: "User_Food", foreignKey: "fk_userId" });
  Food.belongsTo(User_Food, { as: "User_Food", foreignKey: "fk_foodId" });
  Category.belongsTo(User_Food, { as: "User_Food", foreignKey: "fk_categoryId" });

  console.log("Model Associations configured!");
*/

  User_Food.hasMany(User);
  User_Food.hasMany(Food);
  User_Food.hasMany(Category);
  User.belongsTo(User_Food);
  Food.belongsTo(User_Food);
  Category.belongsTo(User_Food);

  console.log("Model Associations configured!");

  //TABLE SYNC
  await User.sync({ force: true });
  await Food.sync({ force: true });
  await Category.sync({ force: true });
  await User_Food.sync({ force: true });

  console.log("Models synced with database!");

  //SAVING DATA IN TABLES
  //CATEGORY DATA
  await Category.bulkCreate([
    {
      categoryid: 1,
      categoryname: "Breakfast",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      categoryid: 2,
      categoryname: "Lunch",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      categoryid: 3,
      categoryname: "Snack",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      categoryid: 4,
      categoryname: "Dinner",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ]).catch();

  await Food.bulkCreate([
    {
      foodid: 1,
      foodname: "Egg",
      calories: 150,
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      foodid: 2,
      foodname: "Bread",
      calories: 150,
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {

      foodid: 3,
      foodname: "Lentils",
      calories: 300,
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      foodid: 4,
      foodname: "Paratha",
      calories: 300,
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      foodid: 5,
      foodname: "Burger",
      calories: 500,
      createdAt: Date.now(),
      updatedAt: Date.now()
    },
    {
      foodid: 6,
      foodname: "Rice",
      calories: 400,
      createdAt: Date.now(),
      updatedAt: Date.now()
    }
  ]).catch();

};
