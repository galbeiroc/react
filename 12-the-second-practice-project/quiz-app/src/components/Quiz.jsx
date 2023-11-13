import { useCallback, useState } from "react";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";
import QuestionTimer from "./QuestionTimer";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const acitveQuestionIndex = userAnswers.length;
  const quizIsCompleted = acitveQuestionIndex === QUESTIONS.length;

  const handleSelectQuestion = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectQuestion(null),
    [handleSelectQuestion]
  );

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
        <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
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
