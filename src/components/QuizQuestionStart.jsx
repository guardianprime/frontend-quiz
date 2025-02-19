import { useEffect, useState, useRef } from "react";

function QuizQuestionStart({ questionTopic, next, setNext, setScore }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [answer, setAnswer] = useState("");
  const [done, setDone] = useState(false);
  const choosenOption = useRef("");

  function handleSubmit() {
    if (choosenOption.current === answer) setScore((s) => s + 1);
    setDone(true);
  }

  function handleOptionChoosing(e) {
    choosenOption.current = e.target.innerText;
  }

  function handleQuestionChange() {
    setNext((n) => n + 1);
    setDone(false);
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

  useEffect(() => {
    if (questionsArray?.questions?.[next]) {
      setAnswer(questionsArray.questions[next].answer);
    }
  }, [next, questionsArray]);

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
            options.map((option) => <li key={option} onClick={handleOptionChoosing}>{option}</li>)
          ) : (
            <div>No question options available</div>
          )}
        </ul>
        <button onClick={done ? handleQuestionChange : handleSubmit}>{done ? "Next Question" : "Submit Answer"}</button>
      </div>
    );
  };

  return renderContent();
}

export default QuizQuestionStart;