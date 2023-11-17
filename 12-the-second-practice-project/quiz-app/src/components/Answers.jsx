import { useRef } from "react";

function Answers({ answers, answerState, selectedAnswer, onSelectAnswer }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  const setAnswerClass = (answer) => {
    const isSelected = selectedAnswer === answer;
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
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => (
        <li key={answer} className="answer">
          <button
            disabled={answerState !== ''}
            onClick={() => onSelectAnswer(answer)}
            className={setAnswerClass(answer)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Answers;
