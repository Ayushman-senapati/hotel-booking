import mongoose from "mongoose";

const schema = new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
     username:{
        type:String,
        required:true
    },
     email:{
        type:String,
        required:true
    },
     userimage:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","hotelOwner"],
        default: "user"
    },
    recentSearched:[
        {type:String , required:true}
    ]
},{timestamps:true})

export const usermodel= mongoose.model("user", schema)