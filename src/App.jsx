import { useState } from "react";

import QuizMenu from "./components/QuizMenu";
import QuizQuestionStart from "./components/QuizQuestionStart";
import QuizQuestionEnd from "./components/QuizQuestionEnd";

function App() {
  const [topic, setTopic] = useState("");
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [isDark, setIsDark] = useState(true);

  function handleTheme() {
    setIsDark(!isDark);
  }

  return (
    <>
      {!topic && <QuizMenu setTopic={setTopic} isDark={isDark} setIsDark={setIsDark} handleTheme={handleTheme} />}
      {topic && next < 10 ? (
        <QuizQuestionStart
          questionTopic={topic}
          next={next}
          setNext={setNext}
          setScore={setScore}
          questionsArray={questionsArray}
          setQuestionsArray={setQuestionsArray}
          setIsDark={setIsDark}
          isDark={isDark}
          handleTheme={handleTheme}
        />
      ) : topic == "" ? null : (
        <QuizQuestionEnd
          setTopic={setTopic}
          setNext={setNext}
          score={score}
          setScore={setScore}
          questionTopic={topic}
          questionArray={questionsArray}
          setIsDark={setIsDark}
          isDark={isDark}
          handleTheme={handleTheme}
        />
      )}
    </>
  );
}

export default App;
