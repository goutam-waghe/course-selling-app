import cathAsyncError from "../middlewares/CatchAsyncError.js";
import { UserModel } from "../models/user.model.js";
import ErrorHandler from "../utils/ErroHandler.js";
import crypto from "crypto";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import { CourseModel } from "../models/course.model.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from "cloudinary";

export const userRegister = cathAsyncError(async function (req, res, next) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("all fields are required", 400));
  }
  let user = await UserModel.findOne({ email });

  if (user) {
    return next(new ErrorHandler("User already exits", 409));
  }
  //upload file on cloudanry
  const file = req.file;
  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  // const hashedPassword = await bcrypt.hash(password, 10);

  user = await UserModel.create({
    name,
    email,
    password,
    avatar: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });

  sendToken(res, user, "user regitser successfully", 200);
});

//login api
export const userLogin = cathAsyncError(async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("all fields are required", 400));
  }
  const user = await UserModel.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("password or email is incorrect", 409));
  }

  const isMatched = await user.ComparePassword(password);
  console.log(isMatched);
  if (!isMatched) {
    return next(new ErrorHandler("password or email is incorrect ", 400));
  }

  sendToken(res, user, `Welcome back! ${user.name}`, 200);
});

//logout
export const userLogout = cathAsyncError(async function (req, res, next) {
  const options = {
    expires: new Date(Date.now()),
    httpOnly: true,
    // secure: true,
    sameSite: "none",
  };
  res.status(200).cookie("token", null, options).json({
    success: true,
    message: "logout successfully",
  });
});

//get profile
export const getMyPorfile = cathAsyncError(async function (req, res, next) {
  const user = await UserModel.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});
// change password
export const changePassword = cathAsyncError(async function (req, res, next) {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    return next(new ErrorHandler("all input filed required", 400));
  }
  const user = await UserModel.findById(req.user._id).select("+password");
  const isMatched = await user.ComparePassword(oldPassword);
  if (!isMatched) return next(new ErrorHandler("password incorrect", 400));

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "password changed successfully",
  });
});

// update profile
export const updateProfile = cathAsyncError(async function (req, res, next) {
  const { name, email } = req.body;
  const user = await UserModel.findById(req.user._id);
  if (name) user.name = name;
  if (email) user.email = email;

  await user.save();

  res.status(200).json({
    success: true,
    message: "profile updated successfully",
  });
});
//update profile picture
export const updateProfilePicture = cathAsyncError(async function (
  req,
  res,
  next
) {
  const user = await UserModel.findById(req.user._id);
  const file = req.file;
  const fileUri = getDataUri(file);
  await cloudinary.v2.uploader.destroy(user.avatar.public_id);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  user.avatar.public_id = mycloud.public_id;
  user.avatar.url = mycloud.secure_url;
  await user.save();
  res.status(200).json({
    success: true,
    message: "profile changed successfully",
  });
});
//forget password
export const forgetPassword = cathAsyncError(async function (req, res, next) {
  const { email } = req.body;
  if (!email) {
    return next(new ErrorHandler("all input filed required", 400));
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  const resetToken = await user.getResetToken();
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  const message = `click on the link to reset password , ${url} , if you have not requested then please ignore`;

  //reset toke via mail
  await sendEmail(user.email, "course Application Password reset", message);

  await user.save();
  res.status(200).json({
    success: true,
    message: `reset token send to yout email ${user.email}`,
  });
});

//reset password
export const resetPassword = cathAsyncError(async function (req, res, next) {
  const { token } = req.params;

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  const user = await UserModel.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });
  if (!user) {
    return next(new ErrorHandler("token is Invalid or Expires", 404));
  }
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.status(200).json({
    success: true,
    message: "password changed successfully",
  });
});
//add to playlist
export const addToPlaylist = cathAsyncError(async function (req, res, next) {
  const user = await UserModel.findById(req.user._id);
  const course = await CourseModel.findById(req.body.id);
  if (!course) {
    return next(new ErrorHandler("course not found", 404));
  }

  const isAleardy = user.playlist.find((val) => {
    if (val.course.toString() === course._id.toString()) return true;
  });
  if (isAleardy) {
    return next(new ErrorHandler("course is Already in playlist", 409));
  }

  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });
  await user.save();
  res.status(200).json({
    success: true,
    message: "course added in playlist",
  });
});
//remove from playlist
export const removeFromPlaylist = cathAsyncError(async function (res, next) {
  const courseId = req.body.id;
  const user = await UserModel.findById(req.user._id);
  const course = await CourseModel.findById(courseId);
  if (!course) {
    return next(new ErrorHandler("course not found", 404));
  }

  user.playlist = user.playlist.filter((val) => {
    return course._id.toString() !== val.course.toString();
  });

  await user.save();
  res.status(200).json({
    success: true,
    message: "course remove from playlist",
  });
});
