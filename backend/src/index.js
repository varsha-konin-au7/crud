const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const colors = require('colors')

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info(`Connected to MongoDB`.yellow.bold.underline);
  server = app.listen(config.port, () => {
    logger.info(`Server is running on port ${config.port}`.cyan.bold.underline);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed'.red.bold);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
