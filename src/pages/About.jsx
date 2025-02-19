import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/path-to-your-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2B2D42] "></div>
        <div className="relative z-10 text-center">
  <h1 
    className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
    style={{
      background: "linear-gradient(to right, #F77F00, #E56A00)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    About Us
  </h1>
  <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
    Building the future with innovation and expertise. <br />
    We blend creativity with technology to craft solutions that inspire and transform.  
    Join us on this journey of excellence, where every idea turns into reality.  
  </p>
  <div className="mt-6">
    <a
      href="#our-mission"
      className="bg-[#F77F00] hover:bg-[#E56A00] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
    >
      Learn More
    </a>
  </div>
</div>

      </section>

      {/* Company Overview */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2B2D42]">Who We Are</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          With over 20 years of experience, we specialize in commercial, residential, 
          and industrial projects. Our team is dedicated to delivering excellence, 
          innovation, and sustainability in every project.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#2B2D42]">Meet Our Team</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "John Doe", role: "Founder & CEO", img: "/team1.jpg" },
            { name: "Jane Smith", role: "Chief Architect", img: "/team2.jpg" },
            { name: "Michael Johnson", role: "Project Manager", img: "/team3.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-[#2B2D42]"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#2B2D42]">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2B2D42]">Our Mission</h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          We strive to create high-quality, sustainable, and innovative construction solutions. 
          Our focus is on safety, efficiency, and environmental responsibility.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
