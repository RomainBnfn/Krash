import "./SplashScreen.scss";
import { useApp } from "../../contexts/AppContext";

const SplashScreen = () => {
    const { appName } = useApp();
    return (
        <div className="SplashScreen">
            <svg className={"SplashScreen-background"} viewBox="0 0 200 200">
                <path
                    d="M40.6,-73.9C50.3,-64.8,54.2,-49.2,59.5,-35.8C64.7,-22.4,71.4,-11.2,72,0.3C72.5,11.9,67.1,23.7,59.4,33C51.8,42.3,42,49,31.7,57.4C21.5,65.7,10.7,75.7,-1.5,78.3C-13.7,80.9,-27.4,76,-37.6,67.6C-47.7,59.2,-54.4,47.2,-60.2,35.3C-66.1,23.5,-71.2,11.7,-70.6,0.4C-70,-11,-63.6,-22,-57.6,-33.7C-51.6,-45.3,-46,-57.7,-36.5,-66.9C-26.9,-76.1,-13.5,-82.3,1,-84C15.5,-85.7,31,-83.1,40.6,-73.9Z"
                    transform={"translate(100 100)"}
                />
            </svg>
            <h1 className={"SplashScreen-title"}>{appName}</h1>
        </div>
    );
};

export default SplashScreen;
