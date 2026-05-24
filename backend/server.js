import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { dbconnection } from './config/db.js';
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express'
import { clerkWebhook } from './controllers/clerkWebhook.js';

const app=express();

//dbconnection
dbconnection()

//middleware
app.use(cors( {origin:"http://localhost:5173" , credentials:true}))
app.use(clerkMiddleware())
app.use(express.json())
console.log("hello in serverr")

//route
app.use('/api/clerk' , clerkWebhook)

app.listen(process.env.PORT)
