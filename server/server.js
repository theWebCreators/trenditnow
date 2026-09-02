import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connectDatabase } from './config/db.js'
import bookingRoutes from './routes/bookingRoutes.js'

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))
app.get('/api/health', (_req,res) => res.json({ ok: true }))
app.use('/api', bookingRoutes)
const port = process.env.PORT || 5000
connectDatabase().then(() => app.listen(port, () => console.log(`Server running on ${port}`))).catch(error => { console.error('Failed to start server:', error.message); process.exit(1) })
