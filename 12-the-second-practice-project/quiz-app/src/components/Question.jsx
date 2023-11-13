import { useState } from "react";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

import QUESTION from "../question";

function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });

  const handleSelectAnswer = (selectedAnswer) => {
    setAnswer({ selectedAnswer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect: QUESTION[index].answers[0] === selectedAnswer,
      });
    }, 1000);

    setTimeout(() => {
      onSelectAnswer(answer);
    }, 2000);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTION[index].text}</h2>
      <Answers
        answers={QUESTION[index].answers}
        answerState={answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
