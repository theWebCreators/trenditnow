import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

const allowedOrigins = [
  "https://trenditnow.me",
  "https://www.trenditnow.me"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.use("/api", bookingRoutes);

await connectDatabase();

export default app;