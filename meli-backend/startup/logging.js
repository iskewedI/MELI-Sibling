const winston = require('winston'); //Logger
require('express-async-errors'); //Envolves router async functions in try/catch blocks

module.exports = function () {
  //Uncaught exception configs
  winston.exceptions.handle(
    new winston.transports.File({ filename: '../uncaughtExceptions.log' }),
    new winston.transports.Console({ format: winston.format.simple() })
  );

  //Trick to handle Promise Rejections too with winston
  process.on('unhandledRejection', ex => {
    // Handled as Uncaught Exception
    throw ex;
  });

  //Logger configuration
  winston.add(new winston.transports.File({ filename: '../logfile.log' }));

  winston.add(
    new winston.transports.Console({
      format: winston.format.simple(),
      level: 'info',
    })
  );
};
