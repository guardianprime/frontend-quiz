/* eslint-disable react/prop-types*/
import { useEffect, useState } from "react";

function QuizQuestionStart({ questionTopic }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionsArray, setQuestionsArray] = useState([]);

  function handleSubmit() {
    console.log("Submitted!!");
  }

  useEffect(function () {
    async function getQuestions() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://localhost:9000/quizzes`);

        if (!res.ok) throw new Error("couldn't fetch the questions");
        const data = await res.json();
        const topicObject = { HTML: 0, CSS: 1, Javascript: 2, Accessibility: 3 };
        const clean = data[topicObject[questionTopic]]; // this is the array of questions for the topic
        console.log("finally!!!", clean);
        setQuestionsArray(clean)
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getQuestions();

  }, [questionTopic]);

  return (
    isLoading ? <div>loading spanner</div> : error ? <div>{error}</div> :
      (<div>
        <span>please work</span>
        <div>
          <span>{questionTopic}</span>
        </div>
        <h2>Question 1 of 10</h2>
        <p>
          {questionsArray && questionsArray.questions && questionsArray.questions.length > 0 && questionsArray.questions.at(0).question
            ? questionsArray.questions.at(0).question
            : "No questions available"}
        </p>
        <ul>
          {
            questionsArray && questionsArray.questions && questionsArray.questions.length > 0 && questionsArray.questions[0].options
              ? questionsArray.questions[0].options.map((option) => {
                return <li key={option}>{option}</li>;
              })
              : <div>No questions options available</div>
          }
        </ul>
        <button onClick={handleSubmit}>Submit Answer</button>
      </div>)
  );
}

export default QuizQuestionStart;