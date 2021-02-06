import React, { useState } from "react";
import "./Weather.css";
import DateInfo from "./DateInfo";
import axios from "axios";
import WxInfo from "./WxInfo";
import WxForecast from "./WxForecast";

export default function Weather(props) {

    const [weather, setWeather] = useState({ loaded: false });
    const [city, setCity] = useState(props.defaultCity);


    function showWeather(response) {
        setWeather({
            loaded: true,
            temperature: response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            icon: response.data.weather[0].icon,
            city: response.data.name,
            timezone: response.data.timezone
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleChange(event) {
        setCity(event.target.value);
    }


    function findLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(searchLocation);

    }

    function searchLocation(position) {
        let apiKey = "e51c2a6a7756a9cab824e5d6224c7dcc";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);

    }


    function search() {
        let apiKey = "e51c2a6a7756a9cab824e5d6224c7dcc";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
    }


    if (weather.loaded) {
        return (
            <div className="Weather">

                <form onSubmit={handleSubmit}>
                    <div className="row" >
                        <div className="col-6">
                            <input
                                type="search"
                                placeholder="Search City..."
                                className="form-control"
                                autoFocus="on"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-2 search">
                            <input
                                type="submit"
                                className="btn"
                                value=" 🔍 "
                            />
                        </div>
                        <div className="col-2 location">
                            <input
                                type="button"
                                className="btn"
                                value=" 📍 "
                                onClick={findLocation}
                            />

                        </div>
                    </div>
                </form>
                <DateInfo date={weather.date} />
                <WxInfo info={weather} />
                <WxForecast city={weather.city} />
            </div>
        );
    }
    else {
        search();
        return null;
    }
}
