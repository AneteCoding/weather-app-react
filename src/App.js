import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
    return (
        <div className="App">
            <div className="AppDesign">
                <Weather />
            </div>
            <small>
                <a href="https://github.com/AneteCoding/weather-app-react" target="_blank" rel="noreferrer">Open-source code</a>, by  <a href="https://www.linkedin.com/in/anete-bogdanova-a5ba366a/" target="_blank" rel="noreferrer">Anete</a>
            </small>
        </div>
    );
}