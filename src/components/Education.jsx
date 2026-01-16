"use client";

import { FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Data Science MSDS",
      institute: "ABASYN UNIVERSITY PESHAWER ISB CAMPUS",
      year: "2018 – 2020",
      description:
        "Specialized in Data Analytics, Machine Learning, Artificial Intelligence, and Big Data technologies.",
      icon: <FaGraduationCap />,
    },
    {
      degree: "Master of Science in Computer Science MSCS",
      institute: "UNIVERSITY OF WAH",
      year: "2016 – 2028",
      description:
        "Focused on UXUI, Data Visualization, Information Architecture, and Image Processing.",
      icon: <FaUniversity />,
    },
    {
      degree: "Master of Computer Science MCS",
      institute: "COMSATS UNIVERSITY",
      year: "2014– 2016",
      description:
        "Built strong foundations in programming, algorithms, databases, Software Engineering, Networks, and Enterprise Systems.",
      icon: <FaUniversity />,
    },
    {
      degree: "Diploma in Information Technology",
      institute: "PUNJAB BOARD OF TECHNICAL EDUCATION LAHORE",
      year: "2013 – 2014",
      description:
        "Built strong foundations in programming, algorithms, networking, and computer systems.",
      icon: <FaUniversity />,
    },
  ];

  return (
    <section
      id="education"
      className="relative w-full bg-black text-white py-28 overflow-hidden"
    >
      {/* Background Glow Effects (Same as About Section) */}
      <div className="absolute top-24 left-12 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            Education
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:text-2xl">
            My academic journey that built a strong foundation in technology,
            data, and problem-solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600/30"></div>

          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                }`}
              >
                {/* Card */}
                <div className="md:w-1/2 w-full">
                  <div className="bg-gray-800 rounded-xl p-8 shadow-xl hover:shadow-blue-500/30 transition duration-500 transform hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300 font-semibold">
                      {edu.institute}
                    </p>
                    <p className="text-sm text-gray-400 mb-4">{edu.year}</p>
                    <p className="text-gray-300 leading-relaxed md:text-xl">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="md:w-1/2 w-full flex justify-center my-6 md:my-0">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white text-2xl shadow-lg shadow-blue-600/40">
                    {edu.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
