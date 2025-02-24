import { useState } from "react";

import QuizMenu from "./components/QuizMenu";
import QuizQuestionStart from "./components/QuizQuestionStart";
import QuizQuestionEnd from "./components/QuizQuestionEnd";

function App() {
  const [topic, setTopic] = useState("");
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  return (
    <>
      {!topic && <QuizMenu setTopic={setTopic} />}
      {topic && next < 9 ? <QuizQuestionStart questionTopic={topic} next={next} setNext={setNext} setScore={setScore} /> : topic == "" ? null : <QuizQuestionEnd setTopic={setTopic} setNext={setNext} score={score} setScore={setScore} />}
    </>
  );
}

export default App;
