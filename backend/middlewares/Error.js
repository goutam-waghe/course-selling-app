const ErrorMiddleWare = function (err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal Server Error";
  res.status(err.statusCode).json({
    success: false,
    Message: err.message,
  });
};

export default ErrorMiddleWare;
