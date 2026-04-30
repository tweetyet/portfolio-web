export default function TechStackSection() {
  const techCategories = [
    {
      title: "Languages",
      items: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Frameworks",
      items: ["React","Next.js"],
    },
    {
      title: "State Management",
      items: ["Zustand","Context API"],
    },
    {
      title: "Styling",
      items: ["Tailwind CSS"],
    },
    {
      title: "Backend & APIs",
      items: ["REST APIs", "JSON"],
    },
    {
      title: "DevOps & Tools",
      items: ["Git", "GitHub", "Vercel","VS Code","Postman"],
    },
    {
      title: "Testing",
      items: ["Manual Testing"],
    },
    {
      title: "AI & Productivity",
      items: ["ChatGPT", "V.0","Claude"],
    },
    {
      title: "UI/UX",
      items: ["Figma", "Canva"],
    },
  ];

  return (
    <section id="tech" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Tech Stack
          </h2>

          <p className="text-gray-600">
            Technologies and tools I use to build modern applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="border rounded-xl p-5 transition-all duration-300
                         hover:shadow-xl hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="font-semibold mb-4 text-lg">
                {category.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 border rounded-full 
                               transition-all duration-300 ease-out
                               hover:bg-black hover:text-white 
                               hover:scale-105 hover:-translate-y-0.5 
                               hover:shadow-md cursor-default"
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