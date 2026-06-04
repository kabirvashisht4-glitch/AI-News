import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis } from 'recharts'
export default function Body() {
    const data = [
        { time: 1, value: 100 },
        { time: 2, value: 120 },
        { time: 3, value: 115 },
        ]
    const [d, setData] = useState("")
    const y = (a) => {
        setData(a)
    }

    return (
        <main id="arena">
            
            <div className="sector1">{d}
            </div>
            <div className="sectorx">
                <button className="sector2" onClick={() => y("Chat GPT")}>Chat GPT</button>
                <button className="sector2" onClick={() => y("Gemini")}>Gemini</button>
                <button className="sector2" onClick={() => y("Claude")}>Claude</button>
                <button className="sector2" onClick={() => y("Kimi")}>Kimi</button>
                <button className="sector2" onClick={() => y("Deepseek")}>Deepseek</button>
                <button className="sector2" onClick={() => y("Llama")}>Llama</button>
                <button className="sector2" onClick={() => y("Grok")}>Grok</button>
                <button className="sector2" onClick={() => y("Phi")}>Phi</button>
            </div>
        </main>
    )
}