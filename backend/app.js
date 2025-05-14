import express from "express";
import dotenv from "dotenv";
import courseRouter from "./routes/course.route.js";
import DB_CONNECT from "./config/dbconnect.js";
import ErrorMiddleWare from "./middlewares/Error.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";

const app = express();
//dot env config
dotenv.config({
  path: "./config/.env",
});

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//db connection
DB_CONNECT();

//routes
app.use("/api/v1", courseRouter);
app.use("/api/v1", userRouter);

export default app;
//errorHandler
app.use(ErrorMiddleWare);
