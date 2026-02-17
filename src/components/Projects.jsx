// const projects = [
//   {
//     title: "My Portfolio",
//     desc: "Responsive portfolio using React & Tailwind with animations.",
//   },
//   {
//     title: "Animated Gaming Website",
//     desc: "Immersive UI with smooth CSS & JS animations.",
//   },
//   {
//     title: "Airbnb Clone",
//     desc: "Full-stack MERN app with authentication and bookings.",
//   },
//   {
//     title: "Grocera",
//     desc: "AI-assisted grocery ordering platform using MERN stack.",
//   },
// ];
 import { projects } from "../data/projects";
export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-5xl font-semibold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-lg">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
