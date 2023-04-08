// Create shopReducer.
const shopReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "INIT":
      return state;

    default:
      return state;
  }
};

// Export.
export default shopReducer;
