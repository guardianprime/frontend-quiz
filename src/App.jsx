import { useState } from "react";

import QuizMenu from "./components/QuizMenu";
import QuizQuestionStart from "./components/QuizQuestionStart";

function App() {
  const [topic, setTopic] = useState("");
  return (
    <>
      {!topic && <QuizMenu setTopic={setTopic} />}
      {topic && <QuizQuestionStart questionTopic={topic} />}
    </>
  );
}

export default App;
