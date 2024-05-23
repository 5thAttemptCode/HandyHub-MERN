const mongoose = require('mongoose')

const HandyCompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },

  industry: {
    type: String,
    required: true,
  },

  companyPhone: {
    type: Number,
    required: true,
  },

  companyMail: {
    type: String,
    required: true,
  },
  
  companyDescription: {
    type: String,
    required: true,
  }
})

export const HandyHubber = mongoose.model('HandyCompany', HandyCompanySchema)