import React, { useState } from "react";
import "./WxForecast.css";
import axios from "axios";
import WxForecastInfo from "./WxForecastInfo";

export default function WxForecast(props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecast(response) {
        setForecast(response.data);
        setIsLoaded(true);
    }

    if (isLoaded && props.city === forecast.city.name) {
        return (
            <div className="WxForecast row">
                <WxForecastInfo info={forecast.list[0]} />
                <WxForecastInfo info={forecast.list[1]} />
                <WxForecastInfo info={forecast.list[2]} />
                <WxForecastInfo info={forecast.list[3]} />
                <WxForecastInfo info={forecast.list[4]} />
                <WxForecastInfo info={forecast.list[5]} />
            </div>
        );
    } else {
        let keyApi = "e51c2a6a7756a9cab824e5d6224c7dcc";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${keyApi}&units=metric`;
        axios.get(url).then(handleForecast);

        return null;
    }

}