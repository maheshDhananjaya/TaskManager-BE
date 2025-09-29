import mongoose from "mongoose";

export async function connectDB(mongoUri:string) {
    if (!mongoUri) throw new Error("MONGODB_URI not set");
    await mongoose.connect(mongoUri);
    console.log("connected to mongoDB");
}