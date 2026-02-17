export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Prerana <span className="text-indigo-400">Mitra</span>
          </h1>

          <p className="text-xl text-gray-300 mb-4">
            Electronics & Communication Engineering Student
          </p>

          <p className="text-gray-400 leading-7 max-w-md text-lg mb-8">
            Enthusiastic student passionate about web development, MERN stack,
            and building interactive, scalable user experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 text-lg bg-indigo-500 rounded-lg hover:scale-105 transition"
            >
              View Projects
            </a>
            <a
              href="/Prerana Resume1.pdf"
              download
              className="px-6 py-3 border text-lg border-indigo-400 rounded-lg hover:bg-indigo-400/10 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-indigo-500 blur-3xl opacity-30"></div>

          <img
            src="/passport_photo.jpg" // replace with your image
            className="w-75 h-80 rounded-full object-center border-4 border-indigo-400 relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
