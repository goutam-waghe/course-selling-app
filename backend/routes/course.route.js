import express from "express";
import {
  courseController,
  createCourse,
} from "../Controllers/course.controller.js";

const courseRouter = express.Router();
//get all courses
courseRouter.route("/courses").get(courseController);

courseRouter.route("/createcourse").post(createCourse);

// create new course - only admin

//add lectures  , delete course and get course details

//delete lectures

export default courseRouter;
