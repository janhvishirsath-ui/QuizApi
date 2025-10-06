import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import quizRoutes from "./routes/quizRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Quiz routes (all routes inside quizRoutes.js)
app.use("/api/quizzes", quizRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
