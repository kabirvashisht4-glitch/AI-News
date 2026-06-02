import React, {useState, useEffect} from "react";

export default function Body() {
    return (
        <main id="arena">
            <div className="sector1"></div>
            <div className="sectorx">
                <button className="sector2">Chat GPT</button>
                <button className="sector2">Gemini</button>
                <button className="sector2">Claude</button>
                <button className="sector2">Kimi</button>
                <button className="sector2">Deepseek</button>
                <button className="sector2">Llama</button>
                <button className="sector2">Grok</button>
                <button className="sector2">Phi</button>
            </div>
        </main>
    )
}