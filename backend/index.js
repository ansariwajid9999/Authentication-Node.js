import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import userRoute from "./route/userRoute.js";
import productRoute from "./route/productRoute.js";

console.log("MONGO_URI:", process.env.MONGO_URI);

const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(port, () => console.log(`Server is running on port ${port}`));
