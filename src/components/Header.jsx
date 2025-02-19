import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#2B2D42] text-white py-5 px-6 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold">Construction Co.</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-[#F77F00]">Home</Link></li>
          <li><Link to="/about" className="hover:text-[#F77F00]">About</Link></li>
          <li><Link to="/services" className="hover:text-[#F77F00]">Services</Link></li>
          <li><Link to="/projects" className="hover:text-[#F77F00]">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-[#F77F00]">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
