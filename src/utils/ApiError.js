class ApiError extends Error {
  constructor(code, message, stack = '') {
    super(message);
    this.status = {
      code,
      message,
      stack,
    };
  }
}

module.exports = ApiError;
