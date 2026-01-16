"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Portfolio() {
  const projects = [
    {
      name: "HRM App",
      description: "A complete HR management system with Flask, MySQL, and Tailwind CSS.",
      demo: "https://your-live-demo-link.com",
      image: "/projects/hrm.png",
    },
    {
      name: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing data insights with charts and graphs.",
      demo: "https://your-live-demo-link.com",
      image: "/projects/dashboard.png",
    },
    {
      name: "Next.js Portfolio",
      description: "My personal portfolio website built with Next.js and Tailwind CSS.",
      demo: "https://your-live-demo-link.com",
      image: "/projects/portfolio.png",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full bg-black text-white py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Background Glow (Same as Skills Section) */}
      <div className="absolute top-20 left-12 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            Portfolio
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:text-xl">
            Some of my projects showcasing skills in web development, data
            analytics, and full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-500/20 overflow-hidden hover:shadow-blue-500/40 transition duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 font-semibold hover:underline"
                  >
                    Live Demo <FaExternalLinkAlt />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 font-semibold hover:text-blue-400"
                  >
                    GitHub <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
