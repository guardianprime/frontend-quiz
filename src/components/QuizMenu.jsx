/* eslint-disable react/prop-types */

function QuizMenu({ setTopic }) {

  function handleTopic(topic) {
    console.log(topic);
    setTopic(topic);
  }

  return (
    <div className="container">
      <h1>Welcome to the Frontend Quiz!</h1>
      <p>Pick a subject to get started.</p>
      <ul>
        <li onClick={() => handleTopic("HTML")}>
          <img alt="html icon" src="/assets/images/icon-html.svg" />
          <span>HTML</span>
        </li>
        <li onClick={() => handleTopic("CSS")}>
          <img alt="css icon" src="/assets/images/icon-css.svg" />
          <span>CSS</span>
        </li>
        <li onClick={() => handleTopic("Javascript")}>
          <img alt="js icon" src="/assets/images/icon-js.svg" />
          <span>JavaScript</span>
        </li>
        <li onClick={() => handleTopic("Accessibility")}>
          <img alt="accessibility icon" src="/assets/images/icon-accessibility.svg" />
          <span>Accessibility</span>
        </li>
      </ul>
    </div >
  );
}

export default QuizMenu;
