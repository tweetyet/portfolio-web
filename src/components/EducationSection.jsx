export default function EducationSection() {
  const data = [
    {
      title: "Bachelor in Computer Science",
      school: "University of the People",
      year: "in progress",
    },
    {
      title: "Artificial Intelligence and Data Science",
      school: "North Chiang Mai University",
      year: "2025 - 2026",
    },
    {
      title: "Diploma in Computing Business IT(UK)",
      school: "MST College",
      year: "2023 - 2024",
    },
    {
      title: "Information Technology Passport Examination(Japan)",
      school: "MST College",
      year: "2023 - 2024",
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Education
        </h2>

        <div className="space-y-6">
          {data.map((e, i) => (
            <div key={i} className="border-l-2 pl-4">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-gray-600">{e.school}</p>
              <span className="text-sm text-gray-500">{e.year}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <h3 className="text-2xl font-bold text-center mb-10">
            Languages
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="border px-4 py-2 rounded-full text-sm">
              English — Upper-Intermediate
            </span>

            <span className="border px-4 py-2 rounded-full text-sm">
              Burmese — Native
            </span>
            <span className="border px-4 py-2 rounded-full text-sm">
             Japanese - N4-Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}