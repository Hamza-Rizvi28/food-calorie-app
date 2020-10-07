const express = require('express');
const app= express();
const db = require('./dbConnection/conn');

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.get("/", (req,res) => {
    res.json({
        message: "Landing Page!"
    });
});

app.listen('3000', () => console.log('server listening'));