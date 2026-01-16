"use client";

import {
  FaChartLine,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaUniversity,
} from "react-icons/fa";

export default function Experience() {
  const experienceData = [
    {
      role: "Business Intellegegent Consultant BI Apps",
      company: "Peshawer Electric Supply Company PESCO",
      duration: "2025 – Present",
      icon: <FaChartLine/>,
      highlights: [
        "Designing  and deploying  Decision Support System",
        "Data Analysis ",
        "Data Visualization",
        "Customizing decision support system ",
      ],
    },
    {
      role: "Network & System Administrator",
      company: "National University of Modern Language Islamabad NUML ",
      duration: "2024 – 2025",
      icon: <FaServer />,
      highlights: [
        "Network and System Design and Deployment ",
        "Maintinence and Mangement of System, Networks",
        "End Users Support ",
        "Automated system administration workflows",
      ],
    },
    {
      role: "Technical Officer / Network Engineer",
      company: "National University of Medical Sciences NUMS ",
      duration: "2020 – 2024",
      icon: <FaNetworkWired />,
      highlights: [
        "Deployment of software on Server",
        "Desiged and Deployed System & Network",
        "End User Support",
        "Vendor Management",
      ],
    },
    {
      role: "IT Support & IT Labs Incharge",
      company: "Academic Institutions",
      duration: "2010 – 2020",
      icon: <FaShieldAlt />,
      highlights: [
        "Lab installation & maintenance",
        "User support & troubleshooting",
        "OS, software & security updates",
        "Technical assistance for faculty & students",
        "IT Stock Mangement",
        "IT Audit Coordination",
        "Offices backup management",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full bg-black text-white py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Background Glow Effects (Same as Skills) */}
      <div className="absolute top-20 left-12 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            Experience
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:text-xl">
            Real-world experience building, securing, and managing enterprise
            IT infrastructure and systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-800/70 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/40 transition duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/40 mb-6 text-2xl">
                {exp.icon}
              </div>

              {/* Role */}
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="flex items-center gap-2 text-gray-200 font-semibold">
                <FaUniversity className="text-blue-400" />
                {exp.company}
              </p>

              {/* Duration */}
              <p className="text-sm text-gray-400 mb-4">
                {exp.duration}
              </p>

              {/* Highlights */}
              <ul className="space-y-3 text-gray-300 md:text-lg">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
