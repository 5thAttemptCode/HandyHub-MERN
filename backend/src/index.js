import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'  
import mongoose from 'mongoose'
import path from 'path'
import { fileURLToPath } from 'url'
import { userRouter } from './routes/authRoutes.js'
import { handyHubberRouter } from './routes/handyRoutes.js'
import { handyCompanyRouter } from './routes/handyCompanyRoutes.js'

 
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}))


// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use("/auth", userRouter)
app.use("/become-a-handyhubber", handyHubberRouter)
app.use("/register-form", handyCompanyRouter)
app.use('/', handyCompanyRouter)

mongoose.set('debug', true)

// DB connection
mongoose.connect(process.env.VITE_MONGO_URL)
  .then(() => console.log("DATABASE CONNECTED"))
  .catch((err) => console.log("ERROR CONNECTION DB", err))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3001, () => console.log("Server is running at 100 miles"))