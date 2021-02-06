import React from "react";
import WxIconForecast from "./WxIconForecast";

export default function WxForecastInfo(props) {
    function day() {
        let date = new Date(props.info.dt * 1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        return `${day}`
    }

    function temperature() {
        let temperature = Math.round(props.info.main.temp);
        return `${temperature}°C`;
    }

    return (
        <div className="WxForecastInfo col">
            {day()}
            <div>
                <WxIconForecast code={props.info.weather[0].icon} />
            </div>
            {temperature()}
        </div>
    );
}