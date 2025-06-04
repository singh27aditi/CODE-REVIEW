const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express(); //server created -> not started yet

app.use(cors()); //integrate frontend and backend

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world")
})

app.use('/ai', aiRoutes);

module.exports = app;