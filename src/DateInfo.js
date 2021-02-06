import React from "react";

export default function DateInfo(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let year = props.date.getFullYear();
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
            {hrs}:{min} {day}, {month} {date}, {year}
        </div>

    );

}