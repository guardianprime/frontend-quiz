import { useEffect } from "react";

function QuizQuestionStart({ questionTopic }) {
  const [error, setError] = useState("");
  const [questions, setQuestions] = useState({});
  const [questionSubmit, setQuestionSubmit] = useState(false);

  function handleSubmit() {
    console.log("Sumbmitted!!");
    setQuestionSubmit(true);
  }

  useEffect(function () {
    async function getQuestions() {
      try {
        res = await fetch("");
        data = await res.json();
        if (!res) {
        }
      } catch (error) {}
    }
  }, []);

  return (
    <div>
      <h2>Question number of 10</h2>
      <ul>
        <li>
          <span>A</span>
          <p></p>
        </li>
        <li>
          <span>B</span>
          <p></p>
        </li>
        <li>
          <span>C</span>
          <p></p>
        </li>
        <li>
          <span>D</span>
          <p></p>
        </li>
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {questionSubit && <button>answer</button>}
    </div>
  );
}

export default QuizQuestionStart;
