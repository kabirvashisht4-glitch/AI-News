import React, {useState, useEffect} from "react";

export default function Header(x) {
    let d = "";
    if (x.col == "white"){
        d = "Dark Reader";
    }
    else{
        d = "White Reader";
    }
    return (
        <header id="gate" style={{
            backgroundColor: x.col , 
        }}>
            <h1>Artificial Intelligence</h1>
            <button className="passage" onClick={() => {x.fun}}>{d}</button>
        </header>
    )
}