import ReactSwitch from "react-switch";
import { useState } from "react";


function ModeToggle() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
        <div className="modeToggle-container">
            <div>
                <img alt="sun icon" src={theme === "light" ? "assets/images/icon-sun-dark.svg" : "assets/images/icon-sun-light.svg"} />
            </div>
            <ReactSwitch
                onChange={toggleTheme}
                checked={theme === "dark"}
                onColor="#ffffff"
                onHandleColor="#020202"
                offHandleColor="#ffffff"
                offColor="#020202"
                height={40}
                width={80}
            />
            <div>
                <img alt="moon icon" src={theme === "light" ? "assets/images/icon-moon-dark.svg" : "assets/images/icon-moon-light.svg"} />
            </div>
        </div>
    );
}

export default ModeToggle;


