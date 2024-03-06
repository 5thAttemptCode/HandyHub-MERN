import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { HandyHubberModel } from '../models/Handy.js'

const router = express.Router()

//Register
router.post('/register', async (req, res) => {
    try{
        const { userMail, password } = req.body
        const handyHubber = await HandyHubberModel.findOne({ userMail })

        if(handyHubber){
            return res.status(400).json({ message: "Email already signed-up"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newHandyHubber = new HandyHubberModel({userMail, password: hashedPassword })

        await newHandyHubber.save()

        res.json({ message: "Successfully signed up!"})
    } catch(error) {
        console.error(`Error in /register route: ${error}`)
        res.status(500).json({ message: "Server error"})
    }
})


//Login
router.post('/login', async  (req, res) => {
    const { userMail, password } = req.body
    const handyHubber = await HandyHubberModel.findOne({ userMail })

    if (!handyHubber){
        return res.status(400).json({ message: "User does not exist"})
    }

    const isPasswordvalid = await bcrypt.compare(password, handyHubber.password)

    if(!isPasswordvalid){
        return res.status(400).json({ message: "Email or password is wrong" })
    }

    const token = jwt.sign({ id: handyHubber._id }, "secret")
    res.json({ token, handyHubberID: handyHubber._id })
})

export { router as handyHubberRouter }