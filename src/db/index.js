import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";

const connectDB = async () => {
     try {
          const conn = await mongoose.connect(`${process.env.MONGO_URI}`);
          console.log(`MONGODB CONNECTED :: ${conn.connection.host}`);
     } catch (error) {
          console.error(`Error :: ${error.message}`);
          process.exit(1);
     }
};

export default connectDB;
