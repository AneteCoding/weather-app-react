import React from "react";
import "./Search.css";

export default function Seach() {
    return (
        <div>
            <form className="row">
                <div className="col-4">
                    <input
                        type="search"
                        placeholder="Search City..."
                        className="search-city"
                        autoComplete="off"
                    />
                </div>
                <button className="col-1">
                    <i className="fas fa-search"></i>
                </button>
                <button className="col-1">
                    <i className="fas fa-location-arrow"></i>
                </button>
            </form>
            <p>
                Last updated: Friday 15:15 <span className="date"></span>
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div className="clearfix" className="current-wx">
                        <h1>{"City"}</h1>
                        <i className="fas fa-sun icon" ></i>
                        <span className="temperature">
                            {10}
                        </span>
                        <span className="units">
                            <a href="/" className="active">
                                °C{" "}
                            </a>{" "}
          |
          <a href="/" >
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
                            Humidity: <span>{80}</span> %
                        </li>
                        <li>
                            Wind: <span>{3}</span> m/s
                        </li>
                        <li className="cloud-coverage">
                            {"Sunny"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    );
}
