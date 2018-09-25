const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const index = require('./routes/index');
const userRoute = require('./user/userRoute');
const metricRoute = require('./metric/metricRoute');
const projectRoute = require('./project/projectRoute');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/user', userRoute);
app.use('/metric', metricRoute);
app.use('/project', projectRoute);


module.exports = app;

