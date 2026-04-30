import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer (Personal Projects)",
    company: "Self-Directed",
    period: "2025 - Present",
    description:
      "Built multiple React apps focusing on UI/UX, API integration, and performance optimization.",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    role: "Frontend Developer Training ",
    company: "MMS It solutions",
    period: "2024 - 2025",
    description:
      "Developed 3+ responsive web apps using React, Tailwind, and JavaScript.",
    tech: ["React", "Tailwind", "JavaScript", "API integration", "Zustand", "Restful APIs", "Supabase"],
  },
 
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-24 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Experience
        </h2>
        <p className="text-gray-500 mt-3">
          My development journey with real projects 🚀
        </p>
      </div>

      {/* Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            {/* Role */}
            <h3 className="text-lg font-semibold text-gray-900">
              {exp.role}
            </h3>

            {/* Company */}
            <p className="text-sm text-gray-500 mt-1">
              {exp.company} • {exp.period}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {exp.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;