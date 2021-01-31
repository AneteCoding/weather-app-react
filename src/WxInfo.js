import React from "react";
import WxIcon from "./WxIcon";

export default function Wxinfo(props) {
    return (
        <div className="Wxinfo">
            <div className="row">
                <div className="col-md-6">
                    <div className="current-wx">
                        <h1>{props.info.city}</h1>
                        <WxIcon code={props.info.icon} />
                        <span className="temperature">
                            {Math.round(props.info.temperature)}
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
                            Humidity: <span>{props.info.humidity}</span> %
                        </li>
                        <li>
                            Wind: <span>{Math.round(props.info.wind)}</span> m/s
                        </li>
                        <li className="text-capitalize">
                            {props.info.description}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}