import nodemailer from 'nodemailer'
import Booking from '../models/Booking.js'

const required = ['name','phone','company','email','eventName','requirement','preferredDate','preferredTime']
export async function createBooking(req, res) {
  const missing = required.filter(key => !String(req.body[key] || '').trim())
  if (missing.length) return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` })
  if (!/^\S+@\S+\.\S+$/.test(req.body.email)) return res.status(400).json({ message: 'Please provide a valid email address.' })
  try {
    const booking = await Booking.create(Object.fromEntries(required.map(key => [key, String(req.body[key]).trim()])))
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({ service: 'gmail', auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } })
      await transporter.sendMail({ from: process.env.EMAIL_USER, to: process.env.EMAIL_USER, subject: 'New Schedule Call Request', text: `Name: ${booking.name}\nPhone: ${booking.phone}\nCompany: ${booking.company}\nEmail: ${booking.email}\nEvent: ${booking.eventName}\nDate: ${booking.preferredDate}\nTime: ${booking.preferredTime}\n\nRequirement:\n${booking.requirement}` })
    }
    res.status(201).json({ message: 'Booking received.' })
  } catch (error) { console.error(error); res.status(500).json({ message: 'Unable to save your request. Please try again.' }) }
}
