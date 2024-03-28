import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `connected to mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in mongoDB ${error}`.bgRed);
  }
};
export default connectDB;
