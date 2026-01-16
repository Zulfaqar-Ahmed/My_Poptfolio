"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-500 tracking-wide">
          ZULFAQAR AHMED
        </h1>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl md:text-2xl">
          <a
            href="https://www.linkedin.com/in/zulfaqar-ahmed-07474b299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Zulfaqar-Ahmed"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:your.zulfiqarwec@gmail.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-blue-500/30"></div>

      {/* Copyright */}
      <p className="text-center text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Zulfaqar Ahmed. All rights reserved.
      </p>
    </footer>
  );
}
