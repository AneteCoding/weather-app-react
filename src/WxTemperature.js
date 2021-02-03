import React, { useState } from "react";

export default function WxTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
        return (
            <div className="WxTemperature">
                <span>
                    {Math.round(props.celsius)}
                </span>
                <span className="units"> °C
                |
          <a href="/" onClick={convertToFahrenheit}>
                        °F
          </a>
                </span>
            </div>
        );
    } else {
        return (
            <div className="WxTemperature">
                <span>
                    {Math.round(fahrenheit())}
                </span>
                <span className="units">
                    <a href="/" onClick={convertToCelsius}>
                        °C
                    </a>
          |
                    °F
                </span>
            </div>
        );
    }
}