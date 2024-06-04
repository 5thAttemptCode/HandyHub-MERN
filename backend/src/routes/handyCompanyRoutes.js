import express from 'express'
import multer from 'multer'
const router = express.Router()
import { HandyCompany } from '../models/HandyCompany.js'


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post("/", async (req, res) => {
  const { companyName, industry, companyPhone, companyMail, companyWage, companyDescription, companyImage } = req.body
  
  // Validate the input
  if (!companyName || !industry || !companyPhone || !companyMail || !companyWage || !companyDescription || companyImage) {
    return res.status(400).json({ msg: "Please enter all fields" })
  }
  
  try {
    // Create a new HandyHubber
    const newHandyHubber = new HandyCompany({
      companyName,
      industry,
      companyPhone,
      companyMail,
      companyWage,
      companyDescription,      
      companyImage
    })
    
    // Save to database
    await newHandyHubber.save()
    
    res.status(201).json(newHandyHubber)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
})


// New route to fetch companies by industry
router.get('/:industry', async (req, res) => {
  const { industry } = req.params
  try {
    const companies = await HandyCompany.find({ industry: industry.charAt(0).toUpperCase() + industry.slice(1) })
    res.status(200).json(companies)
  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: "Server error" })
  }
})


export { router as handyCompanyRouter }
