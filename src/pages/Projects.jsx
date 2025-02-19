import React from "react";

const Projects = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2B2D42]">Our Projects</h1>
        <p className="mt-4 text-lg text-gray-700">
          Explore our diverse portfolio showcasing excellence in construction.
        </p>
      </div>

      {/* Project Categories */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <button className="bg-[#F77F00] hover:bg-[#E56A00] text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Residential
        </button>
        <button className="bg-[#F77F00] hover:bg-[#E56A00] text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Commercial
        </button>
        <button className="bg-[#F77F00] hover:bg-[#E56A00] text-white font-semibold py-2 px-4 rounded-lg shadow-md">
          Infrastructure
        </button>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`https://source.unsplash.com/400x300/?construction,building${index}`}
              alt={`Project ${index + 1}`}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[#2B2D42]">Project {index + 1}</h2>
              <p className="text-gray-600 mt-2">
                A top-tier construction project focusing on quality and innovation.
              </p>
              <button className="mt-4 bg-[#F77F00] hover:bg-[#E56A00] text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
