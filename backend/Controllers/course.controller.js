import cathAsyncError from "../middlewares/CatchAsyncError.js";
import { CourseModel } from "../models/course.model.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/ErroHandler.js";
import cloudinary from "cloudinary";
//get all courses
export const getAllcourses = cathAsyncError(async function (req, res) {
  const courses = await CourseModel.find().select("-lectures");
  res.status(200).json({
    message: "Success",
    courses,
  });
});

//create course
export const createCourse = cathAsyncError(async function (req, res, next) {
  const { title, description, createdBy, category } = req.body;
  if (!title || !description || !createdBy || !category) {
    return next(new ErrorHandler("please add all fields", 400));
  }
  const file = req.file;
  console.log("this is me ", file);
  const fileUri = getDataUri(file);

  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
  console.log(mycloud);
  const course = await CourseModel.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: mycloud.public_id,
      url: mycloud.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    Message: "course created successfully",
  });
});

//get all lectures
export const getCourseLectures = cathAsyncError(async function (
  req,
  res,
  next
) {
  const courseId = req.params.id;
  const course = await CourseModel.findById(courseId);

  if (!course) return next(new ErrorHandler("course not found", 404));

  course.views += 1;
  await course.save();
  res.status(200).json({
    success: true,
    lectures: course.lectures,
  });
});

//add lecture to course
export const addLecture = cathAsyncError(async function (req, res, next) {
  const courseId = req.params.id;
  const { title, description } = req.body;
  const course = await CourseModel.findById(courseId);

  if (!course) return next(new ErrorHandler("course not found", 404));
  //file updaload
  //max video size 100mb
  const file = req.file;
  const fileUri = getDataUri(file);
  const mycloud = await cloudinary.v2.uploader.upload(fileUri.content, {
    resource_type: "video",
  });
  course.lectures.push({
    title,
    description,
    videos: {
      public_id: mycloud.public_id,
      url: mycloud.url,
    },
  });

  course.numOfVideos = course.lectures.length;
  await course.save();
  res.status(200).json({
    success: true,
    message: "lecture added in course",
  });
});

//delete course api

export const deleteCourse = cathAsyncError(async function (req, res, next) {
  const courseId = req.params.id;
  const course = await CourseModel.findById(courseId);

  if (!course) return next(new ErrorHandler("course not found", 404));

  await cloudinary.v2.uploader.destroy(course.poster.public_id);

  course.lectures.forEach(async (val) => {
    await cloudinary.v2.uploader.destroy(val.videos.public_id);
  });

  await course.deleteOne();
  res.status(200).json({
    success: true,
    message: "course is deleted",
  });
});

//delete lecture api
export const deleteLecture = cathAsyncError(async function (req, res, next) {
  const { courseId, lectureId } = req.query;
  const course = await CourseModel.findById(courseId);

  if (!course) return next(new ErrorHandler("course not found", 404));

  const lecture = course.lectures.find((val) => {
    if (val._id.toString() === lectureId.toString()) return val;
  });
  if (!lecture) return next(new ErrorHandler("Lecture not found", 404));
  await cloudinary.v2.uploader.destroy(lecture.videos.public_id);

  course.lectures = course.lectures.filter((val) => {
    return val._id.toString() !== lectureId.toString();
  });
  course.numOfVideos = course.lectures.length;
  await course.save();
  res.status(200).json({
    success: true,
    message: "Lecture deleted successfully.",
  });
});
