// Create Custom Error.
const customError = (msg, status) => {
  // init Error.
  const err = new Error();

  (err.message = msg), (err.status = status);

  return err;
};

// Export.
export default customError;
