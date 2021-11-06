import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CV from "./Pages/CV";
import logo from "./Assets/logo.png";
import Contact from "./Pages/Contact";


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
     
{loading ? ( <>
          <div className="container-fluid text-center loading_wrapper">
            <img src={logo} alt="Loading..." className="loading_logo" />
            
          </div>
        </>):(<Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>)}

      
    </div>
  );
}

export default App;
