import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const experienceData = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    date: "2025 - Present"
  },
  {
    company: "LDRP Institute of Technology",
    role: "Bachelor of Engineering",
    date: "2023 - 2026"
  },
  {
    company: "BBIT Institute of Technology",
    role: "Diploma in Engineering",
    date: "2020 - 2023"
  }
];

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? experienceData : experienceData.slice(0, 1);

  return (
    <section id="about" className="relative py-16 sm:py-24 px-6 bg-[#f4f4f5]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
        
        {/* --- LEFT COLUMN: Profile & Experience --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-5/12 space-y-8"
        >
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#111827] leading-tight break-words">
              About
              <br />
              <span className="font-semibold tracking-tight text-[#111827]">Sarthak Bhuptani</span>
            </h2>

            <div className="relative w-full max-w-[240px] sm:max-w-[300px] aspect-square rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 bg-white mx-auto md:mx-0 group">
              <img src={profileImg} alt="Sarthak Bhuptani" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
              
              {/* Desktop Only Social Overlay (Hidden on Mobile as per user request to 'fix image') */}
              <div className="absolute hidden md:flex bottom-4 left-0 right-0 justify-center gap-3">
                <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-md hover:bg-slate-50 transition-colors">
                  <FiLinkedin size={18} />
                </a>
                <a href="https://github.com/sarthak-bhuptani" target="_blank" rel="noreferrer" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-md hover:bg-slate-50 transition-colors">
                  <FiGithub size={18} />
                </a>
                <a href="#contact" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-md hover:bg-slate-50 transition-colors">
                  <FiMail size={18} />
                </a>
              </div>
            </div>

            <div className="pt-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-800">Sarthak Bhuptani</h3>
              <p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Full Stack Developer</p>
              
              {/* Mobile Social Row (Clean and off the image face) */}
              <div className="flex md:hidden justify-center gap-4 mt-6">
                <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 shadow-sm active:scale-95 transition-all">
                  <FiLinkedin size={20} />
                </a>
                <a href="https://github.com/sarthak-bhuptani" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 shadow-sm active:scale-95 transition-all">
                  <FiGithub size={20} />
                </a>
                <a href="#contact" className="w-11 h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 shadow-sm active:scale-95 transition-all">
                  <FiMail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-4">
            <h4 className="text-lg font-bold text-[#111827] mb-6 flex items-center gap-3 justify-center md:justify-start">
              <span className="w-8 h-[2px] bg-[#111827] hidden md:block"></span>
              Experience & Education
            </h4>
            
            <div className="space-y-3 px-2 sm:px-0">
              {visibleExperiences.map((item, index) => (
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.1 }}
                   key={index} 
                   className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.015)] border border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 group hover:border-slate-300 transition-colors"
                >
                  <div className="flex-1">
                    <h5 className="font-bold text-base sm:text-lg text-[#111827] mb-0.5">{item.company}</h5>
                    <p className="text-slate-500 font-medium text-[13px] sm:text-sm">{item.role}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-bold bg-slate-50 px-3 py-1 rounded-full whitespace-nowrap">{item.date}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-2.5 rounded-full text-slate-900 font-bold shadow-sm hover:shadow-md transition-all text-sm"
              >
                {showAll ? 'Show less' : 'Show all'}
                <div className="w-5 h-5 bg-[#111827] text-white rounded-full flex items-center justify-center">
                  {showAll ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </div>
              </button>
            </div>

          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: Narrative --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-7/12 space-y-6 sm:space-y-10 text-[1rem] sm:text-[1.15rem] text-slate-600 font-light leading-[1.8] pt-2 md:pt-44 text-center md:text-left"
        >
          <p>
            I’m a <strong className="font-semibold text-slate-900">Full Stack Developer</strong> specializing in the MERN stack, with experience building real-world applications like AI Quiz platforms, stock systems, and modern web apps. I focus on creating scalable and user-friendly solutions.
          </p>
          
          <p>
            My core skills include <span className="font-semibold text-slate-800">React, Node.js, MongoDB</span>, and REST API development. I enjoy working on both frontend and backend, ensuring clean code, performance, and maintainability.
          </p>

          <p>
            I’m always learning and exploring new technologies, aiming to build impactful products and improve my development skills continuously.
          </p>

          <div className="mt-8 sm:mt-16 pt-8 border-t border-slate-200/60 inline-block w-full">
            <span className="font-[signature-font] italic text-4xl sm:text-5xl text-slate-300 opacity-80 pointer-events-none block" style={{ fontFamily: "'Dancing Script', cursive" }}>Sarthak Bhuptani</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;