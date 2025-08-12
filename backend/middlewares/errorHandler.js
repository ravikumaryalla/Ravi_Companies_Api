const AppError = require("../utils/appError");

const castError = (err) =>
  new AppError(`Invalid ${err.path}: ${err.value}.`, 400);

const validationError = (err) => {
  const messages = Object.values(err.errors || {}).map((e) => e.message);
  return new AppError(`Validation failed: ${messages.join("; ")}`, 400);
};

const normalizeMongoose = (err) => {
  if (err.name === "CastError") return castError(err);
  if (err.name === "ValidationError") return validationError(err);
  return err;
};

const sendDev = (err, res) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "error",
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendProd = (err, res) => {
  const isOperational = err instanceof AppError || !!err.statusCode;
  if (!isOperational) {
    console.error("UNEXPECTED ERROR 💥", err);
    return res
      .status(500)
      .json({ status: "error", message: "Something went wrong." });
  }
  res.status(err.statusCode).json({ status: err.status, message: err.message });
};

// Global error handler
module.exports = (err, req, res, next) => {
  let error = normalizeMongoose(err);

  // Ensure status fields based on your AppError shape
  error.statusCode = error.statusCode || 500;
  error.status =
    error.status ||
    (String(error.statusCode).startsWith("4") ? "fail" : "error");

  if (process.env.NODE_ENV === "PRODUCTION") {
    return sendProd(error, res);
  }
  return sendDev(error, res);
};
