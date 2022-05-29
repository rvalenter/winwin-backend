const express = require('express');
const routers = express.Router();

routers.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = routers;