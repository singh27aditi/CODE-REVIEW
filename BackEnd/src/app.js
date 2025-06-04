const express = require('express');

const app = express(); //server created -> not started yet

app.get('/', (req, res) => {
    res.send("hello world")
})

module.exports = app;