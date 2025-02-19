import React from "react";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";

const Services = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-[500px] flex flex-col items-center justify-center bg-cover bg-center text-black"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
        <h1 className="relative z-10 text-6xl font-extrabold drop-shadow-lg text-white text-center">
          Our Services
        </h1>
        <p className="relative z-10 text-lg text-gray-200 mt-4 max-w-2xl text-center">
          Delivering excellence in construction with innovative solutions and unparalleled expertise. 
          Your vision, our commitment.
        </p>
        <button className="relative z-10 mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300">
          Explore More
        </button>
      </div>

      {/* Services Overview */}
      <section className="text-center max-w-5xl mx-auto py-20 px-8">
        <h2 className="text-5xl font-bold text-[#2B2D42]">Comprehensive Construction Solutions</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          We provide top-tier construction services tailored for residential, commercial, and industrial projects. With an emphasis on <strong>quality, sustainability, and innovation</strong>, our projects stand the test of time.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Whether it's modern architecture, large-scale infrastructure, or customized renovations, our expert team ensures seamless execution from design to completion.
        </p>
      </section>

      {/* Individual Services */}
      <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-20">
        {[img1, img2, img3, img4, img5, img6].map((image, index) => (
          <div key={index} className="text-center transform transition duration-300 hover:scale-105 bg-[#2B2D42] p-6 rounded-lg shadow-xl">
            <img src={image} alt={`Project ${index + 1}`} className="w-full h-[280px] object-cover rounded-lg shadow-lg" />
            <p className="mt-6 text-2xl font-bold text-white">
              {[ 
                "🏡 Residential Building Construction", 
                "🏢 Commercial Building Project", 
                "🌉 Bridge Construction Work", 
                "🏗️ Skyscraper Development", 
                "🛣️ Road & Highway Construction", 
                "🏭 Industrial Warehouse Construction" 
              ][index]}
            </p>
            <p className="text-white text-md mt-2 leading-relaxed">
              {[ 
                "Crafting comfortable homes with modern architecture, blending functionality with elegance.", 
                "Designing and constructing commercial spaces that drive business success and innovation.", 
                "Building strong, durable bridges that connect communities and improve transportation.", 
                "Creating landmark skyscrapers with cutting-edge designs and sustainable materials.", 
                "Developing high-quality roads and highways for efficient and safe travel.", 
                "Constructing industrial warehouses with optimized space and logistics efficiency." 
              ][index]}
            </p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#2B2D42] text-white py-20 px-8 text-center">
        <h2 className="text-5xl font-bold">Why Choose Our Construction Services?</h2>
        <p className="mt-6 text-lg max-w-5xl mx-auto leading-relaxed">
          With <strong>over two decades of expertise</strong>, we leverage cutting-edge technology and best practices to deliver world-class projects. Our team is dedicated to providing sustainable, durable, and cost-effective solutions tailored to your needs.
        </p>
        <p className="mt-6 text-lg max-w-4xl mx-auto">
          From small-scale developments to massive infrastructure projects, our commitment to <strong>quality, safety, and customer satisfaction</strong> remains unwavering. Let’s build the future together!
        </p>
      </section>
    </div>
  );
};

export default Services;
