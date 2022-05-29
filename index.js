const express = require('express');
const app = express();
const routers = require('./scr/routers/routers');

app.use(routers)
    .use(express.json())
    .listen(4001, () => { console.log('Server is running on port 4001') });