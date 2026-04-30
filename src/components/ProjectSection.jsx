import React from "react";

const projects = [
  {
    title: "Trackify Expense Tracker",
    description:
      "Smart expense tracker with analytics dashboard, categories, and clean UI.",
    live: "https://expense-tracker-qe5k.vercel.app",
    github: "https://github.com/tweetyet/expense_tracker",
    tech: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "MiniMart E-Commerce",
    description:
      "E-commerce app with cart system, product filtering, and admin dashboard.",
    live: "https://minimartie-app.vercel.app",
    github: "https://github.com/tweetyet/minimartie-app",
    tech: ["React", "Redux", "Firebase"],
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio with animations, 3D avatar, and interactive UI.",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourname/portfolio",
    tech: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "EV Car POS System",
    description:
      "POS system for EV car dealership with inventory, sales, and customer management.",
    live: "https://pos-system-17pw.vercel.app",
    github: "https://github.com/tweetyet/pos-system",
    tech: ["React", "TypeScript", "Supabase"],
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full py-20 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          My Projects
        </h2>
        <p className="text-gray-500 mt-3">
          Deployed apps built with real-world tech 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white border rounded-2xl p-5 shadow-sm hover:shadow-xl transition hover:-translate-y-1"
          >
            {/* Preview (Cute + Compact) */}
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <div className="h-28 rounded-xl mb-4 border bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center hover:scale-[1.02] transition duration-300">
                <div className="text-center">
                  <div className="text-xl">🚀</div>
                  <p className="text-xs text-gray-500 mt-1">
                    Open Live Demo
                  </p>
                </div>
              </div>
            </a>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-xs mt-1 line-clamp-2">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-black text-white py-1.5 rounded-lg text-xs hover:bg-gray-800 transition"
              >
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center border border-gray-300 py-1.5 rounded-lg text-xs hover:bg-gray-100 transition"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;