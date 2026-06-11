import React, { useState, useEffect } from "react";
import Body from "./Body";

export default function Sidebar() {
    const [bat, setBat] = useState("");

    const handleClick = (value) => {
        setBat(value);
    };

    return (
        <>
        <Body work={bat} />
        <nav id="trainer1">
            <div className="trainer2">
                <button id="student1" onClick={() => handleClick("Space")}>{"Space"}</button>
                <button id="student1" onClick={() => handleClick("Robotics")}>{"Robotics"}</button>
                <button id="student1" onClick={() => handleClick("DevOps")}>{"DevOps"}</button>
                <button id="student1" onClick={() => handleClick("Cyber Security")}>{"Cyber Security"}</button>
                <button id="student1" onClick={() => handleClick("Biology")}>{"Biology"}</button>
            </div>
        </nav>
        </>
    );
}