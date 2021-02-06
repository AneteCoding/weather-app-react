import React from "react";
import WxIcon from "./WxIcon";
import LocalTime from "./LocalTime";
import WxTemperature from "./WxTemperature";

export default function Wxinfo(props) {
    return (
        <div className="Wxinfo">

            <div className="row">
                <div className="col-6">
                    <div className="current-wx">
                        <h1>{props.info.city}</h1>
                        <div className="float-left">
                            <WxIcon code={props.info.icon} />
                        </div>
                        <div className="float-left">
                            <WxTemperature celsius={props.info.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Local Time: <LocalTime tz={props.info.timezone} />
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