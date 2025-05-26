const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode;
  
    if (!statusCode || statusCode === 200) statusCode = 500;
  
    let message = err.message;
  
    switch (statusCode) {
      case 400:
        message = message || 'Bad Request';
        break;
      case 401:
        message = message || 'Unauthorized';
        break;
      case 403:
        message = message || 'Forbidden';
        break;
      case 404:
        message = message || 'Not Found';
        break;
      case 409:
        message = message || 'Conflict';
        break;
      case 422:
        message = message || 'Unprocessable Entity';
        break;
      case 500:
      default:
        message = message || 'Internal Server Error';
        break;
    }
  
    res.status(statusCode).json({
      success: false,
      error: {
        code: statusCode,
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
      },
    });
  };
  
  module.exports = errorHandler;
  