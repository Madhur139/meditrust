import mongoose from "mongoose";

const userschema = new mongoose.Schema({

    name: {
        type:String,
        required:[true,"Please Enter Name!"]
    },
    email: {
              type:String,
        required:[true,"Please Enter Email!"],
        unique:true
    },
    phone: {
              type:Number,
        required:[true,"Please Enter Phone!"],
             unique:true
    },
      password:{
              type:String,
        required:[true,"Please Enter Password!"]
      },
    age: {
              type:Number
    },
    gender: {
              type:String,
                  enum:["male","female"],
    
    },
    address: {
              type:String
    },
    userType: {
              type:String,
              enum:["User","Doctor","Pathologist","Admin"],
              default:"User",
        required:true
    },
    isActive: {
        type:Boolean,
        default:true,
        required:true
    }


}, {
    timestamps: true
})

const User = mongoose.model('User',userschema)
export default User