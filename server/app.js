const express = require('express');
const app= express();
const db = require('./dbConnection/conn');
const Category = require('./models/Categories');
const models = require('./models/Categories');

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

require('./models/bootstrap')();

app.get("/", (req,res) => {
    res.json({
        message: "Landing Page!"
    });
});

/*
app.get("/categories", async (req,res) => {
    try {
        const cat = await Category.findAll();
        console.log(cat);
        res.json(cat);   
    } catch (error) {
        res.statusCode = 500;
        console.log(error);
    }
});
*/

app.listen('3000', () => console.log('server listening'));