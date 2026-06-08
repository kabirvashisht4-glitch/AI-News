import React, {useState, useEffect} from "react";
import Body from "./Body";
export default function Sidebar() {
    const [bat , setBat] = useState("")
    const y = (bat) => {
        setBat(bat)
    }
    return (
        <nav id="trainer1">
            <body work={bat}/>
            <div className="trainer2">
                <button onClick={() => {y}}>{"Space"}</button>
                <button onClick={() => {y}}>{"Robotics"}</button>
                <button onClick={() => {y}}>{"DevOps"}</button>
                <button onClick={() => {y}}>{"Cyber Security"}</button>
                <button onClick={() => {y}}>{"Biology"}</button>
            </div>
        </nav>
    )
}