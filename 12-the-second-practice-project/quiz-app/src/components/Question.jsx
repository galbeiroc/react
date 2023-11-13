import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

function Question({
  answers,
  answerState,
  questionText,
  selectedAnswer,
  handleSelectAnswer,
  handleSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        handleSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
