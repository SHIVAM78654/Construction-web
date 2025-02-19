import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Import Home Page
import Header from "./components/Header";  // Import Header
import Footer from "./components/Footer";  // Import Footer
import "./index.css";  // Import Global CSS

const App = () => {
  return (
    <Router>
      <Header /> {/* Display Header on all pages */}
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
      </Routes>

      <Footer /> {/* Display Footer on all pages */}
    </Router>
  );
};

export default App;
