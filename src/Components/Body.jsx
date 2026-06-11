import React, { useState, useEffect } from "react";
export default function Body(props) {
    let {col, work} = props
    let a = ""
    if (col == "white"){
        a = "black"
    }
    else{
        a = "white"
    }
    return (
        <main id="arena" style={{ backgroundColor: col , color: a}}>
            <div style={{ backgroundColor: col , color: a , border: `2px solid ${a}`}} className="sector1">{work}</div>
        </main>
    )
}
