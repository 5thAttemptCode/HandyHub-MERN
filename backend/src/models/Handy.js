import mongoose from 'mongoose'

const HandyHubberSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true,
    }
})

export const HandyHubberModel = mongoose.model("handyhubber", HandyHubberSchema)