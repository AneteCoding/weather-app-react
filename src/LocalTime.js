import React from "react";

export default function LocalTime(props) {


    function getTimestamp(targetTimestampInSec, targetOffsetInSec) {
        let now = new Date();
        if (targetTimestampInSec !== null) {
            now = new Date(targetTimestampInSec * 1000);
        }
        return now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + (targetOffsetInSec * 1000);
    }

    let timestamp = getTimestamp(null, props.tz);
    let now = new Date(timestamp);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    let hrs = now.getHours();
    let min = now.getMinutes()
    if (hrs < 10) {
        hrs = `0${hrs}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }

    return (
        <span>
            {day} {hrs}:{min}
        </span>
    );

}