import express from "express";
import { userLogin, userRegister } from "../Controllers/user.controller.js";

const userRouter = express.Router();
//get all courses
userRouter.route("/register").post(userRegister);

userRouter.route("/login").post(userLogin);

export default userRouter;
