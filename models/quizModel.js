import pool from "../config/db.js";

export const getAllQuizzes = async () => {
  const result = await pool.query("SELECT * FROM quizzes");
  return result.rows;
};

export const addQuiz = async (quiz) => {
  const { question, option_a, option_b, option_c, option_d, correct_option } = quiz;
  const result = await pool.query(
    "INSERT INTO quizzes (question, option_a, option_b, option_c, option_d, correct_option) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [question, option_a, option_b, option_c, option_d, correct_option]
  );
  return result.rows[0];
};
