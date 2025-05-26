import express from "express";
import { isAuthanticated, isAuthrizeAdmin } from "../middlewares/auth.js";
import { buySubscription } from "../Controllers/payment.controller.js";

const PaymentRouter = express.Router();
PaymentRouter.route("/subscribe").get(isAuthanticated, buySubscription);
export default PaymentRouter;
