import express from "express";
import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import mongoDbConnection from "./config/db.js";
import productRoute from "./routes/productRoute.js";
import productCategoryRoute from "./routes/productCategoryRoute.js";
import productBrandsRoute from "./routes/productBrandsRoute.js";
import productTagRoute from "./routes/productTagRoute.js";
import errorHandeler from "./utils/errorHandeler.js";

// Init Express.
const app = express();
dotenv.config();

// Init Static-Folder.
app.use(express.static("api/public"));

// Use Middlewares.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// EnvironmentVariables.
const PORT = process.env.PORT || 9090;

// Routes.
app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandsRoute);
app.use("/api/v1/product", productTagRoute);
app.use("/api/v1/product", productRoute);

// ErrorHandeler.
app.use(errorHandeler);

// Listen Server.
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.bgMagenta.black);
  mongoDbConnection();
});
