/* eslint-disable react/prop-types */
import ModeToggle from "./ModeToggle";

const imageClass = { HTML: "one", CSS: "two", Javascript: "three", Acessibility: "four" };

function QuizQuestionEnd({ setNext, setTopic, score, setScore, questionTopic, questionArray }) {

  function handleReset() {
    setNext(0);
    setTopic("");
    setScore(0);
  }

  return (
    <div className="container">
      <div className="header-subcontainer">
        <div className="image-container__flex">
          <div className={`main-image--container ${imageClass[questionTopic]}`}>
            {questionArray && questionArray.icon && (
              <img alt="topic icon" src={questionArray.icon} />
            )}
          </div>
          <span>{questionTopic}</span>
        </div>
        <ModeToggle />
      </div>
      <div className="wrapper-end">
        <div className="heading-container">
          <h2 className="center">Quiz completed</h2>
          <h1 className="center">You scored..</h1>
        </div>
        <div className="score-wrapper">
          <div className="score-container">
            <div className="image-container__flex">
              <div className={`main-image--container ${imageClass[questionTopic]}`}>
                {questionArray && questionArray.icon && (
                  <img alt="topic icon" src={questionArray.icon} />
                )}
              </div>
              <span>{questionTopic}</span>
            </div>
            <span className="score">{score}</span>
            <p>out of 10</p>
          </div>
          <button onClick={handleReset}>Play Again</button>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestionEnd;
