import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";
const connectMongoDb = async () =>{
    try{
        const URL=process.env.MONGODB_URL ?? ""
        console.log("connected to database");
        const connectOptions= {
            useNewUrlParser:true,
            useUnifiedTopology:true
        }
        mongoose.connect(URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        mongoose.connection.on("open", ()=>{console.log("database connection established")})

    }catch (error){
        console.log("Error connecting", error);
    }
}

export default connectMongoDb