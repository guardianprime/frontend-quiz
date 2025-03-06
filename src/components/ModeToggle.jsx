/* eslint-disable react/prop-types */


import ReactSwitch from "react-switch";


function ModeToggle({ handleTheme, isDark }) {

    return (
        <div className="modeToggle-container">
            <div className="toggle-img--container">
                <img alt="sun icon" src={!isDark ? "assets/images/icon-sun-dark.svg" : "assets/images/icon-sun-light.svg"} />
            </div>
            <ReactSwitch
                onChange={handleTheme}
                checked={isDark}
                uncheckedIcon={false}
                checkedIcon={false}
                className="handle"
                onColor="#a729f5"
                onHandleColor="#ffffff"
                offHandleColor="#ffffff"
                offColor="#a729f5"
                handleDiameter={28}
                height={30}
                width={55}
            />
            <div className="toggle-img--container">
                <img alt="moon icon" src={!isDark ? "assets/images/icon-moon-dark.svg" : "assets/images/icon-moon-light.svg"} />
            </div>
        </div>
    );
}

export default ModeToggle;


