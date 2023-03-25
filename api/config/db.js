import mongoose from "mongoose";

// mongoDbConnection.
const mongoDbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDbConnection is successfull`.bgGreen.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

// Export.
export default mongoDbConnection;
