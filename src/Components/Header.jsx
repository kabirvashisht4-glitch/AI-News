import React, {useState, useEffect} from "react";

export default function Header(props) {
    let {c,f} = props.x
    return (
        <header id="gate" style={{
            backgroundColor: c ,
        }}>
            <h1>Artificial Intelligence</h1>
            <button className="passage" onClick={f}>Mode</button>
        </header>
    )
}
