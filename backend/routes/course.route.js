import express from "express";
import {
  getAllcourses,
  createCourse,
  getCourseLectures,
  addLecture,
  deleteCourse,
  deleteLecture,
} from "../Controllers/course.controller.js";
import singleUpload from "../middlewares/multer.js";
import { isAuthanticated, isAuthrizeAdmin } from "../middlewares/auth.js";

const courseRouter = express.Router();
//get all courses
courseRouter.route("/courses").get(getAllcourses);

// create new course - only admin
courseRouter
  .route("/createcourse")
  .post(isAuthanticated, isAuthrizeAdmin, singleUpload, createCourse);

//add lectures  , delete course and get course details
courseRouter
  .route("/course/:id")
  .get(isAuthanticated, getCourseLectures)
  .post(isAuthanticated, isAuthrizeAdmin, singleUpload, addLecture)
  .delete(isAuthanticated, isAuthrizeAdmin, deleteCourse);
//delete lectures

courseRouter
  .route("/lecture")
  .delete(isAuthanticated, isAuthrizeAdmin, deleteLecture);

export default courseRouter;
