import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  company: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 150 },
  eventName: { type: String, required: true, trim: true, maxlength: 150 },
  requirement: { type: String, required: true, trim: true, maxlength: 2000 },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})
export default mongoose.model('Booking', bookingSchema)
