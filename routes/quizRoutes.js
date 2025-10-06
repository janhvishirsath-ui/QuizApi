// routes/quizRoutes.js
import express from "express";
import { fetchQuizzes, createQuiz } from "../controllers/quizController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, fetchQuizzes); // any logged-in user can fetch quizzes
router.post("/", authenticate, authorizeAdmin, createQuiz); // only admin can add quiz

export default router;
