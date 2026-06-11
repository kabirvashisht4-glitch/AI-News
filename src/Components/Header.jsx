import React, {useState, useEffect} from "react";
export default function Header(x) {
    let {col,fun} = x
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
            backgroundColor: col , 
            color: e,
        }}>
            <h1 style={{
                backgroundColor: col , 
                color: e ,
            }}>Artificial Intelligence</h1>
            <button className="passage" onClick={fun}>{d}</button>
        </header>
    )
}