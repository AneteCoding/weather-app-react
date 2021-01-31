import React from "react";
import * as Icons from "@intern0t/react-weather-icons";


export default function WxIcon(props) {
    const iconCode = {
        "01d": "day-sunny",
        "01n": "night-clear",
        "02d": "day-cloudy",
        "02n": "night-cloudy",
        "03d": "day-cloudy",
        "03n": "night-cloudy",
        "04d": "cloudy",
        "04n": "night-partly-cloudy",
        "09d": "rain",
        "09n": "rain",
        "10d": "day-rain",
        "10n": "rain",
        "11d": "thunderstorm",
        "11n": "thunderstorm",
        "13d": "day-snow",
        "13n": "snow",
        "50d": "fog",
        "50n": "fog"
    }
    return (
        <Icons.NightCloudyGusts name={iconCode[props.code]} color="#000" size={30} />

    );
}