import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">Building the future with innovation and expertise</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2B2D42]">Who We Are</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          With over 20 years of experience in the construction industry, we specialize in commercial,
          residential, and industrial projects. Our team is committed to delivering excellence,
          innovation, and sustainability in every project we undertake.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#2B2D42]">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/team1.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold text-[#2B2D42]">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/team2.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold text-[#2B2D42]">Jane Smith</h3>
            <p className="text-gray-600">Chief Architect</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/team3.jpg" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
            <h3 className="mt-4 text-xl font-semibold text-[#2B2D42]">Michael Johnson</h3>
            <p className="text-gray-600">Project Manager</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2B2D42]">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          Our mission is to create high-quality, sustainable, and innovative
          construction solutions that exceed our clients' expectations.
          We are dedicated to safety, efficiency, and the environment in all our projects.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
