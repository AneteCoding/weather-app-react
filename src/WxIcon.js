import React from "react";
import WeatherIcon from 'react-open-weather-icon';


export default function WxIcon(props) {
    const iconCode = {
        "01d": "Day sunny",
        "01n": "Night clear",
        "02d": "Day cloudy",
        "02n": "Night cloudy",
        "03d": "Day cloudy high",
        "03n": "Night cloudy high",
        "04d": "Day overcast",
        "04n": "Night partly cloudy",
        "09d": "Day showers",
        "09n": "Night showers",
        "10d": "Day rain",
        "10n": "Night rain",
        "11d": "Day thunderstorm",
        "11n": "Night thunderstorm",
        "13d": "Day snow",
        "13n": "Night snow",
        "50d": "Day rain mix",
        "50n": "Night rain mix"
    }
    return (
        <WeatherIcon name={iconCode[props.code]} className="my-awesome-icon" />
    );
}