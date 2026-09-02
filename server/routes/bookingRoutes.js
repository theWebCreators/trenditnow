import { Router } from 'express'
import { createBooking } from '../controllers/bookingController.js'
const router = Router()
router.post('/book-call', createBooking)
export default router
