import jwt from "jsonwebtoken";
import cathAsyncError from "./CatchAsyncError.js";
import ErrorHandler from "../utils/ErroHandler.js";
import { UserModel } from "../models/user.model.js";

export const isAuthanticated = cathAsyncError(async function (req, res, next) {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHandler("please login", 401));
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decode);
  const user = await UserModel.findById(decode._id);
  req.user = user;
  next();
});
