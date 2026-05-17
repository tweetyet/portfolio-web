export default function TechStackSection() {
  const techCategories = [
    {
      title: "Languages",
      items: ["JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React.js", "Next.js"],
    },
    {
      title: "State Management",
      items: ["Zustand", "Context API"],
    },
    {
      title: "Styling",
      items: ["Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend & APIs",
      items: ["REST APIs", "JSON", "Node.js (Basic)"],
    },
    {
      title: "Database",
      items: [
        "PostgreSQL",
        "Supabase",
        "SQL (Basic)",
        "NoSQL (Basic)",
      ],
    },
    {
      title: "Cloud & Deployment",
      items: [
        "AWS (EC2, S3 Basics)",
        "Vercel",
        "Netlify",
        "CI/CD Fundamentals",
      ],
    },
    {
      title: "Developer Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Chrome DevTools",
      ],
    },
    {
      title: "Testing & Debugging",
      items: ["Manual Testing", "Debugging"],
    },
    {
      title: "AI & Productivity",
      items: ["ChatGPT", "Claude"],
    },
    {
      title: "UI/UX Design",
      items: ["Figma", "Canva"],
    },
  ];

  return (
    <section
      id="tech"
      className="relative py-24 "
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 font-medium">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Tech Stack
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
            Technologies, frameworks, and tools I use to build modern,
            scalable, and responsive web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="
                group
                rounded-3xl
                border border-gray-200
                bg-white/80
                backdrop-blur-sm
                p-6
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                {category.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="
                      rounded-full
                      border
                      border-gray-200
                      bg-gray-50
                      px-3 py-1.5
                      text-sm
                      font-medium
                      text-gray-700
                      transition-all duration-300
                      hover:bg-black
                      hover:text-white
                      hover:border-black
                      hover:scale-105
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}