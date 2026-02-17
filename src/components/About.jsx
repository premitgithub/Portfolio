export default function About() {
  return (
    <section className="py-1 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT – TEXT */}
        <div>
          <h2 className="text-5xl font-semibold mb-6">
            About <span className="text-indigo-400">Me</span>
          </h2>

          <p className="text-gray-300 leading-7 mb-4 text-lg">
            I am an Electronics and Communication Engineering student at the
            Institute of Engineering and Management, Kolkata, currently in my
            7th semester with a CGPA of 9.33.
          </p>

          <p className="text-gray-300 leading-7 mb-4 text-lg">
            Alongside my core ECE background, I have developed a strong interest
            in software development and problem-solving. I enjoy building
            full-stack web applications using the MERN stack and creating clean,
            interactive user experiences.
          </p>

          <p className="text-gray-400 leading-7 text-lg">
            I am a quick learner, enjoy working in collaborative environments,
            and like understanding how technology can solve real business
            problems — which is why I’m keen on technology and consulting-driven
            roles.
          </p>
        </div>

        {/* RIGHT – GLASS INFO CARD */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400 text-lg">Degree</span>
            <span>ECE (B.Tech)</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400 text-lg">Institute</span>
            <span>IEM, Kolkata</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400 text-lg">CGPA</span>
            <span>9.33</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400 text-lg">Focus Areas</span>
            <span>MERN · DSA · Problem Solving</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400 text-lg">Languages</span>
            <span>English · Bengali · Hindi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
