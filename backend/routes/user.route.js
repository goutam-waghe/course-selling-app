import express from "express";
import {
  changePassword,
  forgetPassword,
  getMyPorfile,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  userLogin,
  userLogout,
  userRegister,
} from "../Controllers/user.controller.js";
import { isAuthanticated } from "../middlewares/auth.js";

const userRouter = express.Router();
//get all courses
userRouter.route("/register").post(userRegister);

userRouter.route("/login").post(userLogin);
userRouter.route("/logout").get(userLogout);
userRouter.route("/me").get(isAuthanticated, getMyPorfile);
userRouter.route("/changepassword").put(isAuthanticated, changePassword);
userRouter.route("/updateprofile").put(isAuthanticated, updateProfile);
userRouter
  .route("/updateprofilepicture")
  .put(isAuthanticated, updateProfilePicture);
userRouter.route("/forgetpassword").post(forgetPassword);
userRouter.route("/resetpassword/:token").put(resetPassword);

export default userRouter;
