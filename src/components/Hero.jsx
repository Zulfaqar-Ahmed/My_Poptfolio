"use client";

import { useEffect, useState } from "react";

const roles = ["Developer", "Data Analyst", "Dicision Support System Developer", "BI Apps Developer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < roles[roleIndex].length) {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [charIndex, roleIndex]);

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/hero.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-6 text-white z-10 max-w-3xl ">
        <h2 className="text-sm uppercase tracking-widest text-gray-300 md:text-2xl">
          I am Professional
        </h2>

        <h1 className="text-4xl md:text-4xl font-bold mt-4 text-orange">
          {text}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </h1>

        <p className="mt-6 text-gray-200 md:text-xl">
          Passionate about building fast, scalable, and intelligent  dicision Support Systems.
        </p>

           <br/>
          <a
           href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1"
           >
          View My Work
         </a>
        
      </div>
    </section>
  );
}
