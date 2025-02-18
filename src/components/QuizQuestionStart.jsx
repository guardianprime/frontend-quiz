/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function QuizQuestionStart({ questionTopic, next, setNext }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionsArray, setQuestionsArray] = useState([]);

  function handleSubmit() {
    console.log("Submitted!!");
    setNext((n) => n = n + 1);
  }

  useEffect(() => {
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
        setQuestionsArray(clean);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getQuestions();
  }, [questionTopic]);

  const renderContent = () => {
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const question = questionsArray?.questions?.[next]?.question || "No questions available";
    const options = questionsArray?.questions?.[next]?.options || [];

    return (
      <div>
        <span>please work</span>
        <div>
          <span>{questionTopic}</span>
        </div>
        <h2>Question {next + 1} of 10</h2>
        <p>{question}</p>
        <ul>
          {options.length > 0 ? (
            options.map((option) => <li key={option}>{option}</li>)
          ) : (
            <div>No question options available</div>
          )}
        </ul>
        <button onClick={handleSubmit}>Submit Answer</button>
      </div>
    );
  };

  return renderContent();
}

export default QuizQuestionStart;