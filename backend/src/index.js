import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'  
import mongoose from 'mongoose'
import { userRouter } from './routes/authRoutes.js'
             

dotenv.config()  

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.use("/auth", userRouter)

mongoose.set('debug', true)

//DB connection
mongoose.connect(process.env.VITE_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("DATABASE CONNECTED"))
.catch((err) => console.log("ERROR CONNECTION DB", err))

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!')
})

app.listen(3001, () => console.log("Server is runnin 100 miles"))