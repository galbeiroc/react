import { useCallback, useState } from "react";

import QuestionTimer from "./QuestionTimer";

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const acitveQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsCompleted = acitveQuestionIndex === QUESTIONS.length;

  const handleSelectQuestion = useCallback(
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

  const setAnswerClass = (answer) => {
    const isSelected = userAnswers[userAnswers.length - 1] === answer;
    let cssClass = "";

    if (answerState === "answered" && isSelected) {
      cssClass = "selected";
    }
    if ((answerState === "correct" || answerState === "wrong") && isSelected) {
      cssClass = answerState;
    }

    return cssClass;
  };

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={acitveQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[acitveQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectQuestion(answer)} className={setAnswerClass(answer)}>
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
