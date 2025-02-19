import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImage from "../assets/hero.jpg";
import backgroundImage from "../assets/background.jpg"; 
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.jpg";




const Home = () => {
  return (
    <Layout>
      {/* <Header /> */}
      
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}

      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-black mt-24">
        <h1 className="text-4xl font-bold ">Building the Future with Strength</h1>
        <p className="mt-4 text-2xl font-medium">High-quality construction services you can trust.</p>
        <button className="mt-6 bg-[#F77F00] hover:bg-[#E56A00] text-white font-bold py-3 px-6 rounded-lg shadow-md">
          Get a Quote
        </button>
      </div>
    </div>

      {/* Company Introduction */}
{/* Company Introduction */}
<section className="bg-[#2B2D42] py-16 px-6 text-center max-w-4xl mx-auto mt-12">
  <h2 className="text-3xl font-bold text-white">Who We Are</h2>
  <p className="mt-4 text-lg text-white">
    We are a leading construction company with 20+ years of experience in industrial, commercial, and residential projects.
  </p>

  {/* Additional Construction Text */}
  <div className="mt-6 text-lg text-gray-800">
    <p className="mt-4 text-[#F77F00] font-bold">
      "Quality construction that stands the test of time."
    </p>
    <p className="mt-2 text-white">
      From skyscrapers to residential homes, we ensure precision, safety, and sustainability in every build.
    </p>
  </div>

  {/* Image Section */}
  <div className="mt-6 w-full h-[300px] flex items-center justify-center">
    <img src={backgroundImage} alt="Company Image" className="w-full h-full object-cover rounded-lg shadow-md" />
  </div>
</section>
{/* Why Choose Us Section */}
<section className="bg-[#2B2D42] text-white py-16 px-6 text-center mt-12">
  <h2 className="text-3xl font-bold text-[#F77F00]">Why Choose Us?</h2>
  
  <div className="mt-6 space-y-6 max-w-4xl mx-auto">
    <p className="text-lg font-semibold">
      🏗️ **Expertise You Can Trust** – With over two decades of experience, we deliver projects that combine quality and innovation.
    </p>
    
    <p className="text-lg text-gray-300">
      🏢 **From Blueprint to Reality** – We transform ideas into exceptional structures, ensuring durability and efficiency.
    </p>
    
    <p className="text-lg font-semibold text-[#F77F00]">
      🛠️ **Precision Engineering & Superior Craftsmanship** – Our team ensures flawless execution in every detail.
    </p>
    
    <p className="text-lg">
      🌱 **Eco-Friendly & Sustainable Construction** – We integrate green building practices for a better future.
    </p>
    
    <p className="text-lg font-semibold text-gray-300">
      🚀 **Timely Delivery & Cost Efficiency** – We complete projects on time without compromising quality.
    </p>
  </div>

  <div className="mt-8">
    <button className="bg-[#F77F00] hover:bg-[#E56A00] text-white font-bold py-3 px-6 rounded-lg shadow-md">
      Learn More
    </button>
  </div>
</section>




      {/* Call to Action Section */}
      <section className=" text-white text-center py-16">
      <div className="text-center mt-12 px-6">
  <h2 className="text-4xl font-extrabold text-[#F77F00] uppercase tracking-wide">
    What We Build
  </h2> 

  <p className="mt-6 text-lg text-gray-800 font-medium leading-8 max-w-3xl mx-auto">
    We don't just construct buildings—we create lasting, high-quality structures 
    that stand the test of time. Our expertise spans **residential, commercial, 
    and industrial projects**, ensuring that every detail is built with precision.
  </p>

  <div className="mt-8">
    <button className="bg-[#2B2D42] hover:bg-[#1F2633] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all">
      Explore Our Work
    </button>
  </div>
</div>



        
        {/* Image Placeholder */}
        {/* Project Showcase Section */}
<div className="mt-12 w-full bg-[#2B2D42] py-12 px-6">
  <h2 className="text-4xl font-bold text-center text-white mb-8">Our Recent Projects</h2>
  <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
    From residential buildings to industrial warehouses, we specialize in delivering high-quality construction projects that stand the test of time.
  </p>

  <div className="grid grid-cols-3 gap-8 gap-y-12 mt-10">
    {/* Project 1 */}
    <div className="text-center transform transition duration-300 hover:scale-105">
      <img src={img1} alt="Project 1" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
      <p className="mt-4 text-xl font-bold text-white">🏡 Residential Building Construction</p>
      <p className="text-gray-300 text-sm mt-1">Crafting comfortable homes with modern architecture.</p>
    </div>

    {/* Project 2 */}
    <div className="text-center transform transition duration-300 hover:scale-105">
      <img src={img2} alt="Project 2" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
      <p className="mt-4 text-xl font-bold text-white">🏢 Commercial Building Project</p>
      <p className="text-gray-300 text-sm mt-1">High-quality commercial spaces built for success.</p>
    </div>

    {/* Project 3 */}
    <div className="text-center transform transition duration-300 hover:scale-105">
      <img src={img3} alt="Project 3" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
      <p className="mt-4 text-xl font-bold text-white">🌉 Bridge Construction Work</p>
      <p className="text-gray-300 text-sm mt-1">Connecting cities with durable bridge infrastructure.</p>
    </div>

    {/* Project 4 */}
    <div className="text-center transform transition duration-300 hover:scale-105">
      <img src={img4} alt="Project 4" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
      <p className="mt-4 text-xl font-bold text-white">🏗️ Skyscraper Development</p>
      <p className="text-gray-300 text-sm mt-1">Innovative designs that touch the skyline.</p>
    </div>

    {/* Project 5 */}
    <div className="text-center transform transition duration-300 hover:scale-105">
      <img src={img5} alt="Project 5" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
      <p className="mt-4 text-xl font-bold text-white">🛣️ Road & Highway Construction</p>
      <p className="text-gray-300 text-sm mt-1">Building strong and safe road networks.</p>
    </div>

    {/* Project 6 */}
    <div className="text-center transform transition duration-300 hover:scale-105">
      <img src={img6} alt="Project 6" className="w-full h-[250px] object-cover rounded-lg shadow-lg" />
      <p className="mt-4 text-xl font-bold text-white">🏭 Industrial Warehouse Construction</p>
      <p className="text-gray-300 text-sm mt-1">Spacious warehouses designed for efficiency.</p>
    </div>
  </div>
</div>




    
      </section>
      {/* Our Commitment to Excellence Section */}
<div className="bg-[#EDF2F4] py-16 px-6 text-center">
  <h2 className="text-4xl font-bold text-[#2B2D42]">Our Commitment to Excellence</h2>
  <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
    At the heart of every project, we prioritize safety, innovation, and durability. 
    Our team of experts works tirelessly to deliver top-notch construction solutions that stand the test of time.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10 max-w-5xl mx-auto">
    {/* Safety Standards */}
    <div className="text-center">
      <div className="w-16 h-16 bg-[#2B2D42] text-white flex items-center justify-center mx-auto rounded-full shadow-lg">
        🏗️
      </div>
      <h3 className="text-xl font-bold text-[#2B2D42] mt-4">Safety First</h3>
      <p className="text-gray-600 mt-2 text-sm">We follow strict safety guidelines to ensure a secure working environment.</p>
    </div>

    {/* Sustainable Construction */}
    <div className="text-center">
      <div className="w-16 h-16 bg-[#2B2D42] text-white flex items-center justify-center mx-auto rounded-full shadow-lg">
        🌿
      </div>
      <h3 className="text-xl font-bold text-[#2B2D42] mt-4">Eco-Friendly Solutions</h3>
      <p className="text-gray-600 mt-2 text-sm">We integrate sustainable materials and energy-efficient designs.</p>
    </div>

    {/* Experienced Team */}
    <div className="text-center">
      <div className="w-16 h-16 bg-[#2B2D42] text-white flex items-center justify-center mx-auto rounded-full shadow-lg">
        👷‍♂️
      </div>
      <h3 className="text-xl font-bold text-[#2B2D42] mt-4">Expert Engineers</h3>
      <p className="text-gray-600 mt-2 text-sm">Our skilled professionals bring experience and expertise to every project.</p>
    </div>

    {/* Client Satisfaction */}
    <div className="text-center">
      <div className="w-16 h-16 bg-[#2B2D42] text-white flex items-center justify-center mx-auto rounded-full shadow-lg">
        ⭐
      </div>
      <h3 className="text-xl font-bold text-[#2B2D42] mt-4">Guaranteed Satisfaction</h3>
      <p className="text-gray-600 mt-2 text-sm">We are committed to exceeding client expectations with every build.</p>
    </div>
  </div>
</div>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
  <h2 className="text-3xl font-bold text-[#2B2D42] text-center mb-6">Get in Touch</h2>
  
  <form className="space-y-4">
    {/* Name Input */}
    <div>
      <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
      <input 
        type="text" 
        placeholder="Enter your name" 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F77F00]" 
      />
    </div>

    {/* Email Input */}
    <div>
      <label className="block text-gray-700 font-semibold mb-1">Email</label>
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F77F00]" 
      />
    </div>

    {/* Message Textarea */}
    <div>
      <label className="block text-gray-700 font-semibold mb-1">Message</label>
      <textarea 
        rows="4" 
        placeholder="Write your message..." 
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F77F00]" 
      ></textarea>
    </div>

    {/* Submit Button */}
    <div className="text-center">
      <button className="bg-[#F77F00] hover:bg-[#E56A00] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
        Send Message
      </button>
    </div>
  </form>
</div>


      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
