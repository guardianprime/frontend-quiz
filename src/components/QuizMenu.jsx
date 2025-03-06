/* eslint-disable react/prop-types */
import ModeToggle from "./ModeToggle";
import { useEffect } from "react";

function QuizMenu({ setTopic, isDark, handleTheme }) {

  function handleTopic(topic) {
    setTopic(topic);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        event.target.click();
      }
    };

    const listItems = document.querySelectorAll('li[tabindex="0"]');
    listItems.forEach(item => {
      item.addEventListener('keydown', handleKeyDown);
    });

    return () => {
      listItems.forEach(item => {
        item.removeEventListener('keydown', handleKeyDown);
      });
    };
  }, []);

  return (
    <div className="container" data-theme={isDark ? "dark" : "light"}>
      <ModeToggle isDark={isDark} handleTheme={handleTheme} />
      <div className="wrapper margin-top">
        <div className="heading-container">
          <h2>Welcome to the </h2>
          <h1>Frontend Quiz!</h1>
          <p className="italic">Pick a subject to get started.</p>
        </div>
        <ul>
          <li onClick={() => handleTopic("HTML")} tabIndex="0">
            <div className="main-image--container one">
              <img alt="html icon" src="/assets/images/icon-html.svg" />
            </div>
            <span className="option-lang">HTML</span>
          </li>
          <li onClick={() => handleTopic("CSS")} tabIndex="0">
            <div className="main-image--container two">
              <img alt="css icon" src="/assets/images/icon-css.svg" />
            </div>
            <span className="option-lang">CSS</span>
          </li>
          <li onClick={() => handleTopic("Javascript")} tabIndex="0">
            <div className="main-image--container three">
              <img alt="js icon" src="/assets/images/icon-js.svg" />
            </div>
            <span className="option-lang">JavaScript</span>
          </li>
          <li onClick={() => handleTopic("Accessibility")} tabIndex="0">
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
