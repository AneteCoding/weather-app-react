import React, { useState } from "react";
import "./Weather.css";
import DateInfo from "./DateInfo";
import axios from "axios";


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
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            city: response.data.name
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleChange(event) {
        setCity(event.target.value);
    }

    function search() {
        const apiKey = `e51c2a6a7756a9cab824e5d6224c7dcc`;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showWeather);
    }


    if (weather.loaded) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row" >
                        <div className="col-8">
                            <input
                                type="search"
                                placeholder="Search City..."
                                className="search-city"
                                autoFocus="on"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-2 w-100">
                            <button>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div className="col-2 w-100">
                            <button >
                                <i class="fas fa-location-arrow" id="location"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <p>
                    <DateInfo date={weather.date} />
                </p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="current-wx">
                            <h1>{weather.city}</h1>
                            <img src={weather.icon} alt={weather.description} />
                            <span className="temperature">
                                {Math.round(weather.temperature)}
                            </span>
                            <span className="units">
                                <a href="/" className="active" rel="noreferrer">
                                    °C{" "}
                                </a>{" "}
          |
          <a href="/" rel="noreferrer">
                                    °F
          </a>
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>
                                Local time: <span>{"Friday 15:15"}</span>
                            </li>
                            <li>
                                Humidity: <span>{weather.humidity}</span> %
                        </li>
                            <li>
                                Wind: <span>{Math.round(weather.wind)}</span> m/s
                        </li>
                            <li className="text-capitalize">
                                {weather.description}
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
    else {
        search();
        return "loading...";
    }
}
