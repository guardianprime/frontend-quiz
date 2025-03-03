import { useEffect, useState, useRef } from "react";
import LoadingBar from "./LoadingBar";
import ModeToggle from "./ModeToggle";
import LoaderSpinner from "./LoaderSpinner";

const imageClass = { HTML: "one", CSS: "two", Javascript: "three", Accessibility: "four" };

function QuizQuestionStart({ questionTopic, next, setNext, setScore, questionsArray, setQuestionsArray, isDark, handleTheme }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [done, setDone] = useState(false);
  const [selectionError, setSelectionError] = useState("");
  const previousOption = useRef(null);

  function handleSubmit() {
    if (!previousOption.current) {
      setSelectionError("Please select an option.");
      return;
    }
    setSelectionError("");
    previousOption.current.classList.remove("pick");
    const selectedOptionText = previousOption.current.querySelector(".option-lang").innerText;
    if (selectedOptionText === answer) {
      setScore((s) => s + 1);
    }
    setDone(true);
  }

  function handleChangeNext() {
    setNext((n) => n + 1);
    setDone(false);
    previousOption.current = null;
  }

  function handleSelectingOption(e) {
    if (previousOption.current) {
      previousOption.current.classList.remove("pick");
    }
    e.currentTarget.classList.add("pick");
    previousOption.current = e.currentTarget;
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
        setQuestionsArray(clean);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getQuestions();
  }, [questionTopic, setQuestionsArray]);

  useEffect(() => {
    if (questionsArray?.questions?.[next]) {
      setAnswer(questionsArray.questions[next].answer);
    } else {
      setAnswer("");
    }
  }, [next, questionsArray]);

  const renderContent = () => {
    if (isLoading) return <LoaderSpinner isDark={isDark}/>;
    if (error) return <div>{error}</div>;

    const question = questionsArray?.questions?.[next]?.question || "No questions available";
    const options = questionsArray?.questions?.[next]?.options || [];

    const letters = ["A", "B", "C", "D"];
    return (
      <div className="container" data-theme={isDark? "dark": "light"}>
        <div className="header-subcontainer">
          <div className="image-container__flex">
            <div className={`main-image--container ${imageClass[questionTopic]}`}>
              <img alt="topic icon" src={questionsArray.icon} />
            </div>
            <span>{questionTopic}</span>
          </div>
          <ModeToggle isDark={isDark} handleTheme={handleTheme} />
        </div>
        <div className="wrapper">
          <div className="question-container">
            <h2>Question {next + 1} of 10</h2>
            <p className="question">{question}</p>
            <LoadingBar next={next} />
          </div>
          <div className="options-container">
            <ul className="question-ul" id="question-ul">
              {options.length > 0 ? (
                options.map((option, index) => (
                  <li
                    key={option}
                    onClick={handleSelectingOption}
                    className={done ? (option === answer ? "correct" : "fail") : "question-ul-li"}
                  >
                    <div className="li__div-first">
                      <div className="letter-container"><span>{letters[index]}</span></div>
                      <span className="option-lang">{option}</span>
                    </div>
                    {done && <div className="li__div-second">
                      <img alt="icon" src={option === answer ? "assets/images/icon-correct.svg" : "assets/images/icon-incorrect.svg"} />
                    </div>
                    }
                  </li>
                ))
              ) : (
                <div>No question options available</div>
              )}
            </ul>
            <button onClick={done ? handleChangeNext : handleSubmit}>{done ? "Next Question" : "Submit Answer"}</button>
            {selectionError && <div className="error-message">{selectionError}</div>}
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
}

export default QuizQuestionStart;