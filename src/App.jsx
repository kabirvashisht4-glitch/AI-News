import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";
import React , {useState, useEffect} from "react";
export default function App() {
  let [c, setC] = useState("white")
  let y = () => {
    if (c == "white"){
      setC("black")
    }
    else{
      setC("white")
    }
  }
  return (
    <div style={{backgroundColor: c}}>
      <Header x = {{col : c , fun : y }}/>
      <Sidebar />
      <Body />
      <Footer />
    </div>
  )
}
