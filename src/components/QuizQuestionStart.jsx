/* eslint-disable react/prop-types*/
import { useEffect, useState } from "react";

function QuizQuestionStart({ questionTopic }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState({});
  const [questionSubmit, setQuestionSubmit] = useState(false);

  function handleSubmit() {
    console.log("Sumbmitted!!");
    setQuestionSubmit(true);
  }

  useEffect(function () {
    const controller = new AbortController();
    async function getQuestions() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://localhost:9000/quizzes`, {
          signal: controller.signal
        });

        if (!res.ok) throw new Error("couldn't fetch the questions");
        const data = await res.json();
        console.log(data);
        setQuestions(data)
      } catch (err) {
        setError(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    getQuestions();
    return () => {
      controller.abort();
    }
  }, [questionTopic]);

  questions.map(())

  return (
    isLoading ? <div>loading spanner</div> : error ? <div>{error}</div> :
      (<div>
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
        {questionSubmit && <button>answer</button>}
      </div>)
  );
}

export default QuizQuestionStart;
