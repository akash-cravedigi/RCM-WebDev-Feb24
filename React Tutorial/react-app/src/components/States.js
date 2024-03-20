import React, { useState } from "react";

const States = () => {
    let [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());
    let [userName, setUserName] = useState("");

    setInterval(() => {
        setCurrentDateTime(new Date().toLocaleString());
    }, 1000)

    const handleUnameChange = (event) => {
        setUserName(event.target.value)
    }

    return (
        <div>
            {currentDateTime}
            Hello {userName}!
            <input type="text" id="uname" onChange={handleUnameChange} />
        </div>
    )
}
export default States;