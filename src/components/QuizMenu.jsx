/* eslint-disable react/prop-types */

function QuizMenu({setTopic }) {
  return (
    <div>
      <h1>Welcome to the Frontend Quiz!</h1>
      <p>Pick a subject to get started.</p>
      <ul>
        <li
          onClick={() => {
            setTopic("html");
          }}
        >
          HTML
        </li>
        <li
          onClick={() => {
            setTopic("css");
          }}
        >
          CSS
        </li>
        <li
          onClick={() => {
            setTopic("javascript");
          }}
        >
          JavaScript
        </li>
        <li
          onClick={() => {
            setTopic("accessibility");
          }}
        >
          Accessibility
        </li>
      </ul>
    </div>
  );
}

export default QuizMenu;
