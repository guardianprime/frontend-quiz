/* eslint-disable react/prop-types */
function QuizQuestionEnd({ setNext, setTopic }) {

  function handleReset() {
    setNext(0);
    setTopic("");
  }

  return (
    <div>
      <h1>Quiz completed</h1>
      <p>You scored... score out of 10</p>
      <button onClick={handleReset}>Play Again</button>
    </div>
  );
}

export default QuizQuestionEnd;
