"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-white py-28 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            About Me
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto md:text-xl">
            Who I am, what I do, and how I create value through technology.
          </p>
        </div>

        {/* Content Card */}
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 shadow-2xl">
          {/* Image */}
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/assets/about.jpg"
              alt="Workspace & Skills"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              I build <span className="text-blue-400">smart</span> &{" "}
              <span className="text-purple-400">scalable</span> digital solutions
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              I’m <span className="text-blue-400 font-semibold">Zulfiqar Ahmed</span>,
               a highly skilled Data Visualization and Analytics Professional with expertise in <span className="text-pink-400 font-semibold">Power BI</span> , <span className="text-blue-400 font-semibold">dashboard design</span> ,<span className="text-pink-400 font-semibold">Databases</span>, <span className="text-blue-400 font-semibold">Docker</span>, and <span className="text-pink-400 font-semibold">decision support systems</span>. I specialize in converting complex and scattered data into clear, interactive, and insightful visualizations that support strategic decision-making.

              With strong command over data analysis, data modeling, and containerized environments, I design scalable and efficient analytics solutions that bridge the gap between technical systems and business users. My focus is always on accuracy, clarity, performance, and business value.

              I am passionate about using data as a strategic asset and delivering solutions that enable organizations to make confident, data-driven decisions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-black/40 rounded-xl p-5 text-center border border-white/10 hover:border-blue-500 transition">
                <h4 className="text-3xl font-extrabold text-blue-400">10+</h4>
                <p className="text-gray-400 text-sm mt-1">Years Experience</p>
              </div>

              <div className="bg-black/40 rounded-xl p-5 text-center border border-white/10 hover:border-purple-500 transition">
                <h4 className="text-3xl font-extrabold text-purple-400">30+</h4>
                <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
              </div>

              <div className="bg-black/40 rounded-xl p-5 text-center border border-white/10 hover:border-green-500 transition">
                <h4 className="text-3xl font-extrabold text-green-400">15+</h4>
                <p className="text-gray-400 text-sm mt-1">Technologies</p>
              </div>

              <div className="bg-black/40 rounded-xl p-5 text-center border border-white/10 hover:border-pink-500 transition">
                <h4 className="text-3xl font-extrabold text-pink-400">100%</h4>
                <p className="text-gray-400 text-sm mt-1">Commitment</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/30 hover:border-white rounded-lg font-semibold transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
