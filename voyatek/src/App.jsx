import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <div className="layout">
        <Header /> 
        </div>
        <div style={{ display: "flex" }}>
        <Sidebar />
        </div> 
    </div>
  );
}

export default App;
