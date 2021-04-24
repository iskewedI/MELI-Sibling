const app = require('express')();

require('./startup/logging')(); //Api Validation initialization
require('./startup/routes')(app); //Routes settings

const port = process.env.PORT || 443;
const server = app.listen(port, () =>
  console.log(`Initializing on port ${port}...`)
);

module.exports = server;
