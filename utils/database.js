import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery',true);
    console.log("From data")
    if (isConnected) {
        console.log("MongoDB is already Connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:"genesis" 
        })

        isConnected = true;

        console.log("MongoDB Connected!");
    } catch (error) {
        console.log(error);
    }
}