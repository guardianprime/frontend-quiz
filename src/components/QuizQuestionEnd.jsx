/* eslint-disable react/prop-types */
function QuizQuestionEnd({ setNext, setTopic, score, setScore }) {

  function handleReset() {
    setNext(0);
    setTopic("");
    setScore(0);
  }

  return (
    <div className="container">
      <div className="heading-container">
        <h2>Quiz completed</h2>
        <h1>You scored..</h1>
      </div>
      <div className="score-container">
        <span className="score">{score}</span>
        <p>out of 10</p>
      </div>
      <button onClick={handleReset}>Play Again</button>
    </div>
  );
}

export default QuizQuestionEnd;
