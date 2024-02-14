import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/authRoutes.js'
import dotenv from 'dotenv'               

dotenv.config()  

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)

//DB connection
mongoose.connect(process.env.VITE_MONGO_URL)
.then(() => console.log("DATABASE CONNECTED"))
.catch((err) => console.log("ERROR CONNECTION DB", err))


app.listen(3001, () => console.log("Server is runnin 100 miles"))