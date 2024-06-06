import express from 'express'
import multer from 'multer'
import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import { HandyCompany } from '../models/HandyCompany.js'


const __filename = fileURLToPath(import.meta.url) // Get the filename
const __dirname = path.dirname(__filename) // Get the directory name

const router = express.Router()

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads')
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // Use the original filename
    }
})

const upload = multer({ storage: storage });

// POST route for company registration
router.post("/", upload.single('companyImage'), async (req, res) => {
    const { companyName, industry, companyPhone, companyMail, companyWage, companyDescription } = req.body
    const companyImage = req.file ? req.file.filename : null

    // Validate the input
    if (!companyName || !industry || !companyPhone || !companyMail || !companyWage || !companyDescription || !companyImage) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }

    try {
        // Create a new HandyCompany
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

// GET route to fetch companies by industry
router.get('/:industry', async (req, res) => {
    const { industry } = req.params
    try {
        const companies = await HandyCompany.find({ industry: industry.charAt(0).toUpperCase() + industry.slice(1) })
        res.status(200).json(companies);
    } catch (err) {
        console.error(err)
        res.status(500).json({ msg: "Server error" })
    }
})

export { router as handyCompanyRouter }