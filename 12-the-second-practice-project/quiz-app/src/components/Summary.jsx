import QUESTION from "../question";

import quizCompleteImg from "../assets/quiz-complete.png";

function Summary({ userAnswers }) {
  const setAnswerClass = (answer) => {
    let cssClass = "user-answer ";

    if (answer === null) {
      cssClass += "skipped";
    } else if (answer === "correct") {
      cssClass += "correct";
    } else {
      cssClass += "wrong";
    }

    return cssClass;
  };

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quiz complete" />
      <h2>Quiz Completed!!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => (
          <li key={`${answer}-${index}`}>
            <h3>{index + 1}</h3>
            <p className="question">{QUESTION[index].text}</p>
            <p className={setAnswerClass(answer)}>{answer ?? "Skipped"}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Summary;
