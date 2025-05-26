import catchAsyncError from "../middlewares/CatchAsyncError.js";
import { UserModel } from "../models/user.model.js";
import ErrorHandler from "../utils/ErroHandler.js";
import { instance } from "../server.js";
export const buySubscription = catchAsyncError(async function (req, res, next) {
  const user = await UserModel.findById(req.user._id);
  if (user.role === "admin") {
    return next(new ErrorHandler("admin can't buy subscriprion", 400));
  }

  const planID = process.env.RAZORPAY_PLAN_ID || "plan_QWNnYzNaBDxeP3";
  console.log(planID);
  console.log("1");
  const subscription = await instance.subscriptions.create({
    plan_id: planID,
    customer_notify: true,
    total_count: 12,
  });
  console.log(subscription);

  user.subscription.id = subscription.id;
  user.subscription.status = subscription.status;

  await user.save();

  res.status(201).json({
    success: true,
    message: "subscription created",
    subscription,
  });
});
