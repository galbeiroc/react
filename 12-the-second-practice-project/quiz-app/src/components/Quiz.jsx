import { useCallback, useState } from "react";

import Question from "./Question";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const acitveQuestionIndex = userAnswers.length;
  const quizIsCompleted = acitveQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswers((prevUserAnswers) => [
      ...prevUserAnswers,
      answer
    ]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz complete" />
        <h2>Quiz Completed!!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={acitveQuestionIndex}
        index={acitveQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
