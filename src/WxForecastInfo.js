import React from "react";
import WxIcon from "./WxIcon";

export default function WxForecastInfo(props) {
    function hrs() {
        let date = new Date(props.info.dt * 1000);
        let hrs = date.getHours();
        return `${hrs}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.info.main.temp);
        return `${temperature}°C`;
    }

    return (
        <div className="WxForecastInfo col">
            {hrs()}
            <WxIcon code={props.info.weather[0].icon} />
            {temperature()}
        </div>
    );
}