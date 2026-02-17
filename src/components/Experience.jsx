import { FiDownload } from "react-icons/fi";

export default function Experience() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-5xl font-semibold text-center mb-12">Experience</h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Internship 1 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Intern – IEM Research Foundation
            </h3>
            <p className="text-gray-400 text-lg mb-3">
              MERN Stack | Duration: 3 Months
            </p>
            <p className="text-gray-300 leading-7 text-lg">
              Worked on developing an ERP system using the MERN stack.
              Contributed to frontend and backend modules, API integration, and
              collaborated with team members using Git and GitHub.
            </p>
          </div>

          {/* Download Icon */}
          <a
            href="/certificates/iem-internship.pdf"
            download
            title="Download Internship Certificate"
            className="text-indigo-400 hover:text-indigo-300 transition text-xl"
          >
            <FiDownload />
          </a>
        </div>

        {/* Internship 2 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">
              Summer Intern – Embedded Systems & IoT
            </h3>
            <p className="text-gray-400 text-lg mb-3">
              Jadavpur University | Duration: 1 Month
            </p>
            <p className="text-gray-300 leading-7 text-lg">
              Gained hands-on exposure to embedded systems and IoT concepts,
              understanding sensors, controllers, and real-world device
              integration.
            </p>
          </div>

          {/* Download Icon */}
          <a
            href="/certificates/jadavpur-iot.pdf"
            download
            title="Download Internship Certificate"
            className="text-indigo-400 hover:text-indigo-300 transition text-xl"
          >
            <FiDownload />
          </a>
        </div>
      </div>
    </section>
  );
}
