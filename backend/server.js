import app from "./app.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay";
cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
export var instance = new Razorpay({
  key_id: process.env.RAZORPAY_PLAN_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// instance.orders.all().then(console.log).catch(console.error);
app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
