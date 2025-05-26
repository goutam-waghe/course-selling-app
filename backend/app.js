import express from "express";
import dotenv from "dotenv";
import courseRouter from "./routes/course.route.js";
import DB_CONNECT from "./config/dbconnect.js";
import ErrorMiddleWare from "./middlewares/Error.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import PaymentRouter from "./routes/Payment.route.js";
import cors from "cors";

const app = express();
//dot env config
dotenv.config({
  path: "./config/.env",
});

//default middleware
app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin
    credentials: true, // allow cookies/sessions
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//db connection
DB_CONNECT();

//routes
app.use("/api/v1", courseRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", PaymentRouter);

export default app;
//errorHandler
app.use(ErrorMiddleWare);
