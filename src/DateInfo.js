import React from "react";

export default function DateInfo(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hrs = props.date.getHours();
    if (hrs < 10) {
        hrs = `0${hrs}`;
    }
    let min = props.date.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }

    return (
        <div>
            {day} {hrs}:{min}
        </div>

    );

}