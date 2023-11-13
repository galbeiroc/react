import { useCallback, useState } from "react";

import QuestionTimer from "./QuestionTimer";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";
import Answers from "./Answers";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const acitveQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsCompleted = acitveQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState("answered");
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[acitveQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        // runs after content timer ends
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [acitveQuestionIndex]
  );

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
        answers={QUESTIONS[acitveQuestionIndex].answers}
        answerState={answerState}
        questionText={QUESTIONS[acitveQuestionIndex].text}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        handleSelectAnswer={handleSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
