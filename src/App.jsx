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
  const handleClick = async (value) => {
    if (value == "Space") {
        let qw = await fetch("https://api.spacexdata.com/v4/launches")
        let er = await qw.json()
        setBat(er.explanation) 
    }
    else if (value == "Robotics") {
        let qe = await fetch("https://export.arxiv.org/api/query?search_query=AI+robotics&max_results=1")
        let rt = await qe.text() 
        setBat(rt)
    }
    else if (value == "DevOps") {
        let as = await fetch("https://api.github.com/search/repositories?q=devops+AI")
        let we = await as.json()
        setBat(we.items[0].description) 
    }
    else if (value == "Cyber Security") {
        let yu = await fetch("https://services.nvd.nist.gov/rest/json/cves/2.0")
        let ui = await yu.json()
        setBat(ui.vulnerabilities[0].cve.descriptions[0].value) 
    }
    else if (value == "Biology") {
        let o = await fetch("https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=AI+biology&retmode=json")
        let p = await o.json()
        setBat(JSON.stringify(p.esearchresult.idlist)) 
    }
}
  return (
    <div style={{backgroundColor: c}}>
      <Header col = {c} fun ={y}/>
      <Sidebar col= {c} fen ={handleClick}/>
      <Body col={c} work = {bat}/>
    </div>
  )
}
