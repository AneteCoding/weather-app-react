import React from "react";
import WxIcon from "./WxIcon";

export default function WxForecastInfo(props) {
    function hours() {
        let date = new Date(props.info.dt * 1000);
        let hrs = date.getHours();
        if (hrs < 10) {
            hrs = `0${hrs}`;
        }
        return `${hrs}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.info.main.temp);
        return `${temperature}°C`;
    }

    return (
        <div className="WxForecastInfo col">
            {hours()}
            <WxIcon code={props.info.weather[0].icon} />
            {temperature()}
        </div>
    );
}