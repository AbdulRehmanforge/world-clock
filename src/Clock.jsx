import { useState, useEffect } from "react";

export default function Clock ({ timeZone = "UTC", showDate = false }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(new Date());
        },1000);
        return () => {
            clearInterval(timerId);
        };
    },[]);

    if (showDate) {
        const dateString = date.toLocaleDateString("en-US", { timeZone });
        return <span>{dateString}</span>;
    }

    const timeString = date.toLocaleString("en-US", { timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
    return <span>{timeString}</span>;
}