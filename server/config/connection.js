import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/OnsiteComm')

const connection = mongoose.connection
export default connection;