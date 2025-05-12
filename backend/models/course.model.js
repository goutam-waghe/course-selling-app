import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please Enter course title"],
    minLength: [6, "title should be min 6 char long"],
    maxLength: [80, "title should exid 80 char long"],
  },
  description: {
    type: String,
    required: true,
    minLength: [30, "description must be 30 char long"],
  },
  lectures: [
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      videos: {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    },
  ],
  poster: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  views: {
    type: Number,
    default: 0,
  },
  numOfVideos: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: [true, "Enter course Creater name"],
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const CourseModel = mongoose.model("CourseModel", CourseSchema);
