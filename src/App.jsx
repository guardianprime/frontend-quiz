import { useState } from "react";
import useLocalStorage from "use-local-storage";

import QuizMenu from "./components/QuizMenu";
import QuizQuestionStart from "./components/QuizQuestionStart";
import QuizQuestionEnd from "./components/QuizQuestionEnd";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [topic, setTopic] = useState("");
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);


  function handleTheme() {
    setIsDark(!isDark);
  }

  return (
    <>
      {!topic && <QuizMenu setTopic={setTopic} isDark={isDark} handleTheme={handleTheme} />}
      {topic && next < 10 ? (
        <QuizQuestionStart
          questionTopic={topic}
          next={next}
          setNext={setNext}
          setScore={setScore}
          questionsArray={questionsArray}
          setQuestionsArray={setQuestionsArray}
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
          isDark={isDark}
          handleTheme={handleTheme}
        />
      )}
    </>
  );
}

export default App;
