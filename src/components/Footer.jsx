import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2B2D42] text-white text-center py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Company Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2 text-gray-300">
              We are a trusted construction company delivering high-quality, sustainable, and innovative building solutions for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="text-gray-300 hover:text-[#F77F00]">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F77F00]">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F77F00]">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F77F00]">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#F77F00]">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2 text-gray-300">📍 123 Main Street, City, Country</p>
            <p className="text-gray-300">📞 +91 9999999999</p>
            <p className="text-gray-300">✉️ s0xyz@gmail.com</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Copyright & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© 2024 Construction Co. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-[#F77F00]">Facebook</a>
            <a href="#" className="hover:text-[#F77F00]">LinkedIn</a>
            <a href="#" className="hover:text-[#F77F00]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
