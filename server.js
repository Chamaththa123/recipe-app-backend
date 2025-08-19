import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/users", userRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
