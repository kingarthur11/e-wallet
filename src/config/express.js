const express = require('express');
const bodyParser = require('body-parser');
const error = require('../api/middlewares/error')
const routes = require('../api/routes/v1');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/v1', routes);

app.use(error.converter);

app.use(error.notFound);

app.use(error.handler);

module.exports = app;
