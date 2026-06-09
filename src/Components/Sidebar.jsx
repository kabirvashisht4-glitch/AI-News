import React, { useState, useEffect } from "react";
import Body from "./Body";

export default function Sidebar() {
    const [bat, setBat] = useState("");

    const handleClick = (value) => {
        setBat(value);
    };

    return (
        <nav id="trainer1">
            <Body work={bat} />
            <div className="trainer2">
                <button onClick={() => handleClick("Space")}>{"Space"}</button>
                <button onClick={() => handleClick("Robotics")}>{"Robotics"}</button>
                <button onClick={() => handleClick("DevOps")}>{"DevOps"}</button>
                <button onClick={() => handleClick("Cyber Security")}>{"Cyber Security"}</button>
                <button onClick={() => handleClick("Biology")}>{"Biology"}</button>
            </div>
        </nav>
    );
}