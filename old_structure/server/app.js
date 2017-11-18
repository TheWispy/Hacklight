const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Routers
const main = require('./routes/main');
const api = require('./routes/api');

const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Setup routers
app.use('/', main);
app.use('/api/', api);

module.exports = app;
