import { useState } from "react";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../quesdtion";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const acitveQuestionIndex = userAnswers.length;
  const quizIsCompleted = acitveQuestionIndex === QUESTIONS.length;

  const handleSelectQuestion = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  };

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz complete" />
        <h2>Quiz Completed!!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[acitveQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[acitveQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectQuestion(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
