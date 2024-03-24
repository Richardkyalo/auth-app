import mongoose, { Schema, models} from "mongoose";
const _userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
{timestamps:true}
);


const userSchema= new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
},
{timestamps:true}
);

const User = mongoose.model("User", _userSchema);
export default User;