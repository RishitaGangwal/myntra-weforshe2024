




import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import "./App.css";
import NavbarSearch from "./Components/Navbar/NavbarSearch";
import Home from "./Components/Home/Home";
import Ranking from "./Components/common/Ranking"; // Adjust path if 'Ranking' component is in a different location
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarSearch />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;