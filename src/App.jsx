import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </>
  );
}