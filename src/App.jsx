import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";  // Import Header
import Footer from "./components/Footer";  // Import Footer
import Home from "./pages/Home";           // Import Home Page
import About from "./pages/About";         // Import About Page
import Services from "./pages/Services";   // Import Services Page
import Projects from "./pages/Projects";   // Import Projects Page
import Contact from "./pages/Contact";     // Import Contact Page
import "./index.css";  // Import Global CSS

const App = () => {
  return (
    <Router>
      {/* Header appears on all pages */}
      <Header />

      {/* Main Content - Page Routing */}
      <main className="flex-grow px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
