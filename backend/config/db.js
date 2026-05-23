import mongoose from "mongoose";
import 'dotenv/config'

export const dbconnection=()=>{
     mongoose.connect(`${process.env.MONGO}/hotel-booking`)
        .then(() => {
            console.log("db connected")
            
        }).catch(err => {
            console.log("connection failed")
        }
        )
}