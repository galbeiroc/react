import { useState } from "react";

import QUESTIONS from "../quesdtion";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const acitveQuestionIndex = userAnswers.length;

  const handleSelectQuestion = (selectedAnswer) => {
    console.log(selectedAnswer);
    setUserAnswers(prevUserAnswers => [...userAnswers, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[acitveQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[acitveQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectQuestion(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
