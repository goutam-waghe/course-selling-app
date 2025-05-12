import mongoose from "mongoose";

async function DB_CONNECT() {
  // await mongoose.connect(`${process.env.DB_URI}couseSellingApp`);
  await mongoose.connect(`${process.env.DB_URI_LOCAL}couseSellingApp`);
  console.log("database conneted");
}
export default DB_CONNECT;
