require('dotenv').config()
const express = require("express");

const airoutes = require("../src/routes/ai.routes")

const app =  express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai',airoutes)



module.exports = app