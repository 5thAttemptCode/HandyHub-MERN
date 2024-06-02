import mongoose from 'mongoose'

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

  companyWage: {
    type: String,
    required: true,
  },
  
  companyDescription: {
    type: String,
    required: true,
  }
})

export const HandyCompany = mongoose.model('HandyCompany', HandyCompanySchema)