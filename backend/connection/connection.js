
import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        mongoose.connect("mongodb+srv://anupsharma:6YCz9WGwZ8z8@cluster0.iaatw.mongodb.net/");
        console.log("connected");
    } catch (error) {
        console.log("error in connecting database",error);
    }

}

export default connectDB;