import React, { useState, useEffect } from "react";
import Body from "./Body";

export default function Sidebar(props) {
    let {col, fen} = props
    let q = ""
    if (col == "white"){
        q = "black"
    }
    else{
        q = "white"
    }
    return (
        <>
        <nav id="trainer1" style={{backgroundColor: col, border: `2px solid ${q}`, color: q}}>
            <div className="trainer2" >
                <button style={{backgroundColor: col, border: `2px solid ${q}`, color: q}} id="student1" onClick={() => fen("Space")}>{"Space"}</button>
                <button style={{backgroundColor: col, border: `2px solid ${q}`, color: q}} id="student1" onClick={() => fen("Robotics")}>{"Robotics"}</button>
                <button style={{backgroundColor: col, border: `2px solid ${q}`, color: q}} id="student1" onClick={() => fen("DevOps")}>{"DevOps"}</button>
                <button style={{backgroundColor: col, border: `2px solid ${q}`, color: q}} id="student1" onClick={() => fen("Cyber Security")}>{"Cyber Security"}</button>
                <button style={{backgroundColor: col, border: `2px solid ${q}`, color: q}} id="student1" onClick={() => fen("Biology")}>{"Biology"}</button>
            </div>
        </nav>
        </>
    );
}