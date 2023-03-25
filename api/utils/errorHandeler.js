// Create ErrorHandeler.
const errorHandeler = (error, req, res, next) => {
  const errorMessage = error.message || "Unknown Error";
  const errorStatus = error.status || 500;

  return res.status(200).json({
    message: errorMessage,
    status: errorStatus,
  });
};

// Export.
export default errorHandeler;
