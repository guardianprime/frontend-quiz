/* eslint-disable react/prop-types */

function QuizMenu({ setTopic }) {

  function handleTopic(topic) {
    console.log(topic);
    setTopic(topic);
  }

  return (
    <div>
      <h1>Welcome to the Frontend Quiz!</h1>
      <p>Pick a subject to get started.</p>
      <ul>
        <li
          onClick={() => handleTopic("HTML")}
        >
          HTML
        </li>
        <li onClick={() => handleTopic("CSS")}>
          CSS
        </li>
        <li
          onClick={() => handleTopic("Javascript")}
        >
          JavaScript
        </li>
        <li
          onClick={() => handleTopic("Accessibility")}
        >
          Accessibility
        </li>
      </ul>
    </div >
  );
}

export default QuizMenu;
