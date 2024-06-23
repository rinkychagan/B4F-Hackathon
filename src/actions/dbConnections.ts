import mongoose from "mongoose";

async function connectDB() {
  try {
    const url = process.env.MONGODB_URL?.toString();
    //  const url ="mongodb://localhost:27017/ecomm"
    console.log("url", url);

    await mongoose.connect(url!);
  } catch (error) {
    throw new Error((error as Error).message);
  }
}

export default connectDB;
