const catchAsyncError = function (passedFn) {
  return (req, res, next) => {
    Promise.resolve(passedFn(req, res, next)).catch(next);
  };
};

export default catchAsyncError;
