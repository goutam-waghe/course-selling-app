import cathAsyncError from "../middlewares/CatchAsyncError.js";
import { UserModel } from "../models/user.model.js";
import ErrorHandler from "../utils/ErroHandler.js";
import bcrypt from "bcrypt";
import { sendToken } from "../utils/sendToken.js";

export const userRegister = cathAsyncError(async function (req, res, next) {
  const { name, email, password } = req.body;
  //   const file = req.file
  if (!name || !email || !password) {
    return next(new ErrorHandler("all fields are required", 400));
  }
  let user = await UserModel.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User already exits", 409));
  }
  //upload file on cloudanry
  // const hashedPassword = await bcrypt.hash(password, 10);

  user = await UserModel.create({
    name,
    email,
    password,
    avatar: {
      public_id: "temp",
      url: "temp",
    },
  });

  sendToken(res, user, "user regitser successfully", 200);
});

//login api
export const userLogin = cathAsyncError(async function (req, res, next) {
  const { email, password } = req.body;
  //   const file = req.file
  if (!email || !password) {
    return next(new ErrorHandler("all fields are required", 400));
  }
  const user = await UserModel.findOne(email).select("+password");

  if (!user) {
    return next(new ErrorHandler("password or email is incorrect", 409));
  }

  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    return next(new ErrorHandler("password or email is incorrect ", 400));
  }

  sendToken(res, user, "login successful", 200);
});

//logout
//get profile
// change password
// update profile
//update profile picture

//forget password
//add to playlist
//remove from playlist
