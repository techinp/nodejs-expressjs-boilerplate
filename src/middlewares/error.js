const mongoose = require('mongoose');
const httpStatus = require('http-status');
const config = require('../config/config');
const logger = require('../config/logger');
const ApiError = require('../utils/ApiError');

const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const code =
      error.statusCode || error instanceof mongoose.Error ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[code];
    error = new ApiError(code, message, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const {
    status: { code, message, stack },
  } = err;

  res.locals.errorMessage = err.message;

  const response = {
    status: {
      code,
      message,
      ...(config.env === 'development' && { error: stack }),
    },
  };

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(code).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
