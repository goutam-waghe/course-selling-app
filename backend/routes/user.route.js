import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  getMyPorfile,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  userLogin,
  userLogout,
  userRegister,
} from "../Controllers/user.controller.js";
import { isAuthanticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const userRouter = express.Router();
//get all courses
userRouter.route("/register").post(singleUpload, userRegister);

userRouter.route("/login").post(userLogin);
userRouter.route("/logout").get(userLogout);
userRouter.route("/me").get(isAuthanticated, getMyPorfile);
userRouter.route("/changepassword").put(isAuthanticated, changePassword);
userRouter.route("/updateprofile").put(isAuthanticated, updateProfile);
userRouter
  .route("/updateprofilepicture")
  .put(isAuthanticated, singleUpload, updateProfilePicture);
userRouter.route("/forgetpassword").post(forgetPassword);
userRouter.route("/resetpassword/:token").put(resetPassword);
userRouter.route("/addtoplaylist").post(isAuthanticated, addToPlaylist);
userRouter
  .route("/removefromplaylist")
  .delete(isAuthanticated, removeFromPlaylist);

export default userRouter;
