import mongoose from "mongoose";

const connectdb = async()=>{
try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`DB CONNECTED SUCCESS : ${conn.connection.name}`.bgGreen);
}
catch(error){
console.log(`DB CONNECTION FAILED :${error.message}`.bgRed);
}

}
export default connectdb