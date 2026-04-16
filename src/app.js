const express = require('express');
const app = express();

const schoolroutes = require('./routes/schoolroutes');

app.use(express.json());
app.use('/api', schoolroutes);

module.exports = app;