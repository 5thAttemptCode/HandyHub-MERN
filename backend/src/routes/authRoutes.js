import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js'

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await UserModel.findOne({ username })
    if (user) {
      return res.status(400).json({ message: "Username already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword })

    // Save new user
    try {
      await newUser.save()
      res.json({ message: "Account registered successfully" })
    } catch (error) {
      res.status(500).json({ message: "Error creating user: " + error.message })
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
})


router.post("/login", async (req, res) => {
  const { username, password  } = req.body
  const user = await UserModel.findOne({ username })

  if (!user) {
    return res.status(400).json({ message: "Username does not exist!" })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if(!isPasswordValid){
    return res.json({ message: "Username or Password are incorrect!"})
  }

  const token = jwt.sign({ id: user._id }, "secret")
  res.json({ token, userID: user._id})
})

export { router as userRouter }