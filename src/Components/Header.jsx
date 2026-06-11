import React, {useState, useEffect} from "react";

export default function Header(x) {
    let {f} = x
    return (
        <header id="gate">
            <h1>Artificial Intelligence</h1>
            <button className="passage" onClick={f}>Mode</button>
        </header>
    )
}