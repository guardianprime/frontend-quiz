/* eslint-disable react/prop-types */
function QuizQuestionEnd({ setNext, setTopic, score, setScore }) {

  function handleReset() {
    setNext(0);
    setTopic("");
    setScore(0);
  }

  return (
    <div>
      <h1>Quiz completed</h1>
      <p>You scored</p>
      <p> {score} out of 10</p>
      <button onClick={handleReset}>Play Again</button>
    </div>
  );
}

export default QuizQuestionEnd;
