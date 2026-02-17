const skills = [
  "Java",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Git",
  "GitHub",
  "SQL",
  "DSA",
];

export default function Skills() {
  return (
    <section className="py-10">
      <h2 className="text-5xl font-semibold text-center mb-10">Skills</h2>

      <div className="flex flex-wrap text-xl justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((s, i) => (
          <span
            key={i}
            className="px-10 py-6 rounded-4xl bg-white/5 backdrop-blur-md border border-white/10 text-gray-200"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
