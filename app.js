const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
const musicRoute = require('./music/musicRoute');
const userRoute = require('./user/userRoute');

app.use('/', index);
app.use('/music', musicRoute);
app.use('/user', userRoute);

module.exports = app;

