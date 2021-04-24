const express = require('express');
const cors = require('../middleware/cors');
const error = require('../middleware/error');
const itemsRoute = require('../routes/items');
const { endpoints } = require('../config.json');

module.exports = function (app) {
  app.use(express.json());

  app.use(cors);

  app.use(endpoints.Items, itemsRoute);

  app.use(error);
};
