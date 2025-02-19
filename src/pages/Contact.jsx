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