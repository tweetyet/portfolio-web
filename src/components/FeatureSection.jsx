
const FeatureSection = () => {
  return (
    <section id="features" className="min-h-screen flex items-center px-6 py-20">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - PHOTO */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="/me.png"
              alt="Profile"
              className="w-72 h-72 object-cover rounded-2xl shadow-xl 
              transition duration-300 group-hover:scale-105"
            />
            
            {/* Optional glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-black/5 blur-xl opacity-0 group-hover:opacity-100 transition"></div>
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Hi, I’m a passionate Frontend Developer who enjoys building clean,
            user-friendly, and visually engaging web applications. I focus on
            creating smooth user experiences using modern technologies like
            React and Tailwind CSS.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Outside of coding, I enjoy gardening and growing my own vegetables.
            It helps me develop patience, consistency, and attention to detail—
            qualities I bring into my work.
          </p>

          {/* WHY ME */}
          <h3 className="text-xl font-semibold mb-4">
            Why Me
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
              ✔ Clean & Responsive UI
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
              ✔ Maintainable Code
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
              ✔ Fast Learner
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
              ✔ Detail-Oriented
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition">
              ✔ Strong Work Ethic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;