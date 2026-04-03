import React from "react";
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  const EMAIL = "mrsarthak825@gmail.com";

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#f8f8f8] flex items-center justify-center px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-16 flex flex-col items-center text-center relative overflow-hidden"
      >

        {/* Subtle top decoration if needed */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

        {/* Profile Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 bg-slate-50 pr-4 rounded-full border border-slate-100 p-1"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
            <img src={profileImg} alt="Sarthak" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">Sarthak Bhuptani</p>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium">MERN Stack Developer</p>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl sm:text-4xl md:text-5xl font-medium text-[#111827] mb-6 leading-tight max-w-2xl px-2 sm:px-0"
        >
          Have an idea or need something built?<br />
          <span className="text-[#64748b]">Let's work together.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-600 text-base sm:text-lg md:text-xl font-light mb-10 sm:mb-12 max-w-2xl px-2 sm:px-0"
        >
          I build fast, scalable web apps and functional systems with React, Node.js, and MongoDB. Currently available for work and open to teams that value performance, reliability, and clean code.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#111827] text-white rounded-full font-medium shadow-lg hover:bg-black transition-all hover:-translate-y-0.5">
            <FiMail size={18} />
            Email me
          </a>

          <div className="flex gap-3 w-full sm:w-auto justify-center">
            <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5">
              <FiLinkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a href="https://github.com/sarthak-bhuptani" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5">
              <FiGithub size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}