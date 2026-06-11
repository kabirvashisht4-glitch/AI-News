import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";
import React , {useState, useEffect} from "react";
export default function App() {
  let [c, setC] = useState("white")
  const [bat, setBat] = useState("");
  let y = () => {
    if (c == "white"){
      setC("black")
    }
    else{
      setC("white")
    }
  }
  const handleClick = (value) => {
    setBat(value);
  };
  return (
    <div style={{backgroundColor: c}}>
      <Header col = {c} fun ={y}/>
      <Sidebar col= {c} fen= {handleClick}/>
      <Body col={c} work = {bat}/>
    </div>
  )
}
