import { useState } from "react";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

import QUESTION from "../question";

function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (selectedAnswer) => {
    setAnswer({ selectedAnswer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect: QUESTION[index].answers[0] === selectedAnswer,
      });
    }, 1000);

    setTimeout(() => {
      onSelectAnswer(selectedAnswer);
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
      <QuestionTimer
        key={timer}
        mode={answerState}
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null}
      />
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
