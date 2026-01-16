"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaChartLine,
  FaChartBar,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiOracle } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: 88, icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", level: 85, icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", level: 82, icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Node.js", level: 80, icon: <FaNodeJs className="text-green-500" /> },
    { name: "MySQL", level: 85, icon: <SiMysql className="text-blue-400" /> },
    { name: "Databases", level: 88, icon: <FaDatabase className="text-purple-400" /> },
    { name: "Python", level: 75, icon: <FaPython className="text-yellow-300" /> },
    { name: "Django", level: 70, icon: <FaPython className="text-yellow-300" /> },
    { name: "Flask", level: 80, icon: <FaPython className="text-yellow-300" /> },
    { name: "Data Analytics", level: 82, icon: <FaChartLine className="text-pink-400" /> },
    { name: "Data Visialization", level: 85, icon: <FaChartBar className="text-pink-400" /> },
    { name: "MS Power BI", level: 80, icon: <FaChartBar className="text-pink-400" /> },
    { name: "Oracle", level: 70, icon: <SiOracle className="text-pink-400" /> },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-black text-white py-28 overflow-hidden"
    >
      {/* Background Glow Effects (Same as About & Education) */}
      <div className="absolute top-20 left-12 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            Skills
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:text-2xl">
            Technologies and tools I use to build scalable, high-performance
            applications and data-driven solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl hover:shadow-blue-500/30 transition duration-500"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-xl font-semibold">
                  <div className="text-3xl">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
                <span className="text-sm text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
