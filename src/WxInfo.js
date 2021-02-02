import React from "react";
import WxIcon from "./WxIcon";
import WxTemperature from "./WxTemperature";

export default function Wxinfo(props) {
    return (
        <div className="Wxinfo">
            <div className="row">
                <div className="col-md-6">
                    <div className="current-wx">
                        <h1>{props.info.city}</h1>
                        <WxIcon code={props.info.icon} />
                        <WxTemperature celsius={props.info.temperature} />
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