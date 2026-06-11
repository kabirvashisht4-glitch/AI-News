import React, {useState, useEffect} from "react";
export default function Header({x}) {
    let d = "";
    let e = "";
    if (x.col == "white"){
        d = "Dark Reader";
        e = "black"
    }
    else{
        d = "White Reader";
        e = "white"
    }
    return (
        <header id="gate" style={{
            backgroundColor: x.col , 
            color: e,
        }}>
            <h1 style={{
                backgroundColor: x.col , 
                color: e ,
            }}>Artificial Intelligence</h1>
            <button className="passage" onClick={x.fun}>{d}</button>
        </header>
    )
}