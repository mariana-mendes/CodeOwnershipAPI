const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const index = require('./routes/index'),
      userRoute = require('./user/userRoute'),
      metricRoute = require('./metric/metricRoute'),
      classRoute = require('./class/classRoute'),
      authorRoute = require('./author/authorRoute'),
      projectRoute = require('./project/projectRoute');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use('/', index);
app.use('/', userRoute);
app.use('/', metricRoute);
app.use('/', classRoute);
app.use('/', authorRoute);
app.use('/', projectRoute);


module.exports = app;

