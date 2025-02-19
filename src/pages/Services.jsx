import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/services-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-4xl font-bold">Our Services</h1>
      </div>

      {/* Services Overview */}
      <section className="text-center max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-[#2B2D42]">Comprehensive Construction Solutions</h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          We specialize in high-quality construction services tailored to residential, commercial, and industrial projects. Our expertise ensures durability, innovation, and efficiency.
        </p>
      </section>

      {/* Individual Services */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {[
          { title: "Residential Construction", desc: "From custom homes to apartments, we build with precision and quality.", img: "/residential.jpg" },
          { title: "Commercial Projects", desc: "Office buildings, shopping malls, and more—crafted for business success.", img: "/commercial.jpg" },
          { title: "Industrial Facilities", desc: "Warehouses, factories, and logistics hubs built to high standards.", img: "/industrial.jpg" },
          { title: "Infrastructure Development", desc: "Roads, bridges, and urban projects engineered for the future.", img: "/infrastructure.jpg" },
          { title: "Renovation & Remodeling", desc: "Transforming spaces with modern designs and efficient solutions.", img: "/renovation.jpg" },
        ].map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={service.img} alt={service.title} className="w-full h-[200px] object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#2B2D42]">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#8D99AE] text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold">Why Choose Our Construction Services?</h2>
        <p className="mt-4 text-lg max-w-4xl mx-auto">
          With 20+ years of experience, cutting-edge technology, and a commitment to excellence, we deliver projects that stand the test of time.
        </p>
      </section>
    </div>
  );
};

export default Services;
