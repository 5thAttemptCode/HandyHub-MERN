import mongoose from 'mongoose'

const HandyHubberSchema = new mongoose.Schema({
    userMail: {
        type: String, 
        required: true, 
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

export const HandyHubberModel = mongoose.model("handyhubber", HandyHubberSchema)