import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";
import React , {useState, useEffect} from "react"
export default function App() {
  let [color,setColor] = useState("white")
  let y = () => {
    if (color == "white"){
      setColor("black")
    }
    else{
      setColor("white")
    }
  }
  return (
    <div style={{backgroundColor: color}}>
      <Header/>
      <Sidebar x = {{f: y}}/>
      <Body />
      <Footer />
    </div>
  )
}
