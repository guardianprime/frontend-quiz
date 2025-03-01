/* eslint-disable react/prop-types */
import ModeToggle from "./ModeToggle";

function QuizMenu({ setTopic }) {

  function handleTopic(topic) {
    setTopic(topic);
  }

  return (
    <div className="container">
    <ModeToggle/>
    <div className="wrapper">
      <div className="heading-container">
        <h2>Welcome to the </h2>
        <h1>Frontend Quiz!</h1>
        <p>Pick a subject to get started.</p>
      </div>
      <ul>
        <li onClick={() => handleTopic("HTML")}>
          <div className="main-image--container one">
            <img alt="html icon" src="/assets/images/icon-html.svg" />
          </div>
          <span className="option-lang">HTML</span>
        </li>
        <li onClick={() => handleTopic("CSS")}>
          <div className="main-image--container two">
            <img alt="css icon" src="/assets/images/icon-css.svg" />
          </div>
          <span className="option-lang">CSS</span>
        </li>
        <li onClick={() => handleTopic("Javascript")}>
          <div className="main-image--container three">
            <img alt="js icon" src="/assets/images/icon-js.svg" />
          </div>
          <span className="option-lang">JavaScript</span>
        </li>
        <li onClick={() => handleTopic("Accessibility")}>
          <div className="main-image--container four">
            <img alt="accessibility icon" src="/assets/images/icon-accessibility.svg" />
          </div>
          <span className="option-lang">Accessibility</span>
        </li>
      </ul>
    </div>
    </div >
  );
}

export default QuizMenu;
