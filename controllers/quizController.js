import { getAllQuizzes, addQuiz } from "../models/quizModel.js";

export const fetchQuizzes = async (req, res) => {
  try {
    const quizzes = await getAllQuizzes();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createQuiz = async (req, res) => {
  try {
    const quiz = await addQuiz(req.body);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
