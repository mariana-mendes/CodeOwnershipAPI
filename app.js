const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const musicRoute = require('./routes/musicRoute');

app.use('/', index);
app.use('/music', musicRoute);

module.exports = app;

