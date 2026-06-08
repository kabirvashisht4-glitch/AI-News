import React, { useState, useEffect } from "react";
export default function Body(props) {
    let {work} = props
    
    return (
        <main id="arena">
            <div className="sector1">{work}</div>
        </main>
    )
}
