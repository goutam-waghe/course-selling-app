import React, { useState } from "react";
import CourseCard from "../components/CourseCard";

const categories = [
  "data Science",
  "python",
  "Video editing",
  "fullstack developement",
  "ui ux",
  "javaScript",
  "App dev",
  "Java",
  "javaScript",
  "SQL",
 
];
const CourseDetails = {
    courseName:"python" , 
    Describe:"learn basic to advance python",
    Creater:"goutam waghe" ,
    Lecture:12 ,
    Views:10000

}
const Courses = () => {
    const [inputCourse , setInputCourse] = useState("");
    console.log(inputCourse)
  return (
    <div className="bg-gray-800 min-h-screen flex justify-center ">
      <div className=" w-[90%] md:w-2xl xl:w-4xl  flex mt-30 md:mt-20 flex-col gap-3">
        <h1 className="text-white text-2xl font-medium">All Courses</h1>
        <input
          type="text"
          className="text-white p-2 outline-none rounded-sm border-2"
          placeholder="Search a course"
          value={inputCourse}
          onChange={(e) => setInputCourse(e.target.value)}

        />
        <div className="flex gap-3 hide-scrollbar overflow-auto">
          {categories.map((value, index) => {
           return <button key={index + 1}  className="w-fit px-2 py-1 bg-gray-200 rounded-sm whitespace-nowrap">
                {value}
            </button>;
          })}
        </div>
        <div className="w-full flex-col sm:flex-row flex sm:flex-wrap items-center  sm:justify-start gap-3">
        <CourseCard CourseDetails={CourseDetails}/>
        <CourseCard CourseDetails={CourseDetails}/>
        <CourseCard CourseDetails={CourseDetails}/>
        <CourseCard CourseDetails={CourseDetails}/>
        <CourseCard CourseDetails={CourseDetails}/>
       
       
        </div>


      </div>
    </div>
  );
};

export default Courses;
