import cathAsyncError from "../middlewares/CatchAsyncError.js";
import { CourseModel } from "../models/course.model.js";
import ErrorHandler from "../utils/ErroHandler.js";

export const courseController = cathAsyncError(async function (req, res) {
  const courses = await CourseModel.find().select("-lectures");
  res.status(200).json({
    message: "Success",
    courses,
  });
});

export const createCourse = cathAsyncError(async function (req, res, next) {
  const { title, description, createdBy, category } = req.body;
  if (!title || !description || !createdBy || !category) {
    return next(new ErrorHandler("please add all fields", 400));
  }
  // const file = req.file
  const course = await CourseModel.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
  });

  res.status(200).json({
    success: true,
    Message: "course created successfully",
  });
});
