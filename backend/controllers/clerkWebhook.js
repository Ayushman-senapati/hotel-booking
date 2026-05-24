import { Webhook } from "svix";
import { usermodel } from "../models/user.js";


export const clerkWebhook=async(req,res)=>{
    try {
        
        const whook= new Webhook(process.env.CLERK_WEBHOOK_KEY)
        
        //receiving headers
        const headers={
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        }
    
        //verifying
        await whook.verify(JSON.stringify(req.body),headers)
        const {data,type}=req.body
        const userData={
            id_:data.id,
            email:data.email_addresses[0].email_address,
            username:data.first_name+" "+ data.last_name    ,
            image: data.image_url
        }
        switch (type) {
            case "user.created":
                await usermodel.create(userData)
                break;
            case "user.updated":
                await usermodel.findByIdAndUpdate(data.id,userData)
                break;
            case "user.deleted":
                await usermodel.findByIdAndDelete(data.id)
                break;
        
            default:
                break;
        }
        res.json({success:true,message:"recieved"})


    } catch (error) {
        console.log(error);

        
    }


}
