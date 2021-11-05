import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CV from "./Pages/CV";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
