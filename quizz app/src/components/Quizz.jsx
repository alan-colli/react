import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";

export default function Quizz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const quizzIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizzIsComplete) {
    return (
      <div id="summary">
        <img src={quizComplete} alt="trophy icon" />
        <h2>Quizz Completed!</h2>
      </div>
    );
  }

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  };

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffleAnswers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
