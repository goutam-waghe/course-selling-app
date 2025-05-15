import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyPorfile,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateRole,
  userLogin,
  userLogout,
  userRegister,
} from "../Controllers/user.controller.js";
import { isAuthanticated, isAuthrizeAdmin } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const userRouter = express.Router();

//register
userRouter.route("/register").post(singleUpload, userRegister);
//login route
userRouter.route("/login").post(userLogin);
//logout
userRouter.route("/logout").get(userLogout);
//profile route
userRouter
  .route("/me")
  .get(isAuthanticated, getMyPorfile)
  .delete(isAuthanticated, singleUpload, deleteMyProfile);
// change password
userRouter.route("/changepassword").put(isAuthanticated, changePassword);
// update profile
userRouter.route("/updateprofile").put(isAuthanticated, updateProfile);
// update profile picture
userRouter
  .route("/updateprofilepicture")
  .put(isAuthanticated, singleUpload, updateProfilePicture);
// forget password
userRouter.route("/forgetpassword").post(forgetPassword);
// reset password
userRouter.route("/resetpassword/:token").put(resetPassword);
// add to playlist
userRouter.route("/addtoplaylist").post(isAuthanticated, addToPlaylist);
// remove from playlist
userRouter
  .route("/removefromplaylist")
  .delete(isAuthanticated, removeFromPlaylist);

//admin rountes
//get all users
userRouter
  .route("/admin/allusers")
  .get(isAuthanticated, isAuthrizeAdmin, getAllUsers);
//delete user and update user
userRouter
  .route("/admin/user/:id")
  .put(isAuthanticated, updateRole)
  .delete(isAuthanticated, isAuthrizeAdmin, singleUpload, deleteUser);

export default userRouter;
