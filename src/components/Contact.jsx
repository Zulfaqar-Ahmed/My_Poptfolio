"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1j8t0ao",
        "template_m0pj358",
        formData,
        "0JSPRbjDV1lB2x_li"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert("Oops! Something went wrong.", err);
      });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black text-white py-28 scroll-mt-24 overflow-hidden"
    >
      {/* Background Glow Layers */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-12 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-12 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 md:text-xl">
            Have a project or want to say hi? Drop me a message and I’ll get
            back to you.
          </p>
        </div>

        {/* Glass Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-blue-500/20 flex flex-col gap-6 hover:shadow-blue-500/40 transition-transform duration-500 transform hover:-translate-y-1"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className="bg-gray-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-1"
          >
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
}
