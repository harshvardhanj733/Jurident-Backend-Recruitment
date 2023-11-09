class CustomError extends Error {
  constructor(message, statusCode) {
    super(message); // Pass the message to the Error constructor
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = CustomError;
