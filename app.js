const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const musicRoute = require('./routes/musicRoute');
const userRoute = require('./routes/userRoute');

app.use('/', index);
app.use('/music', musicRoute);
app.use('/user', userRoute);

module.exports = app;

