import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql, SiGit, SiGithub,
  SiVisualstudiocode, SiPython, SiDjango, SiPostman
} from 'react-icons/si';
import { FiLayers, FiSettings, FiServer, FiZap } from 'react-icons/fi';

const techIcons = [
  { icon: SiReact, name: 'React' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiCss3, name: 'CSS3' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiGit, name: 'Git' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiVisualstudiocode, name: 'VS Code' },
  { icon: SiPython, name: 'Python' },
  { icon: SiDjango, name: 'Django' },
  { icon: SiPostman, name: 'Postman' }
];

const capabilities = [
  {
    title: "Full Stack Development",
    description: "Building scalable web applications using MERN stack with clean architecture and high performance.",
    icon: FiLayers
  },
  {
    title: "Backend Core",
    description: "Structuring reliable and maintainable backend logic, working with databases like MongoDB and MySQL.",
    icon: FiSettings
  },
  {
    title: "REST API Development",
    description: "Developing secure and efficient APIs for dashboards, campaign systems, and third-party integrations.",
    icon: FiServer
  },
  {
    title: "Performance Optimization",
    description: "Improving application speed, database queries, and system scalability for high-load environments.",
    icon: FiZap
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] gap-12 lg:gap-16 items-start">

        {/* --- LEFT: Tech Stack Grid --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-4xl md:text-5xl font-normal text-[#111827] mb-2 leading-tight text-center md:text-left">
            Engineering<br className="hidden md:block" />
            <span className="text-slate-500 font-light">Toolkit</span>
          </h2>

          <p className="text-[15px] text-slate-500 mt-8 mb-6 text-center md:text-left">My tech stack</p>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 overflow-hidden">
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.03)] border border-slate-200/60 hover:shadow-md transition-shadow group cursor-pointer mx-auto"
                title={tech.name}
              >
                <tech.icon className="text-xl sm:text-2xl text-slate-800 group-hover:text-black transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT: Capabilities List --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="space-y-8 sm:space-y-10 pt-8 lg:pt-16"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-start"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[#111827] flex-shrink-0 flex items-center justify-center text-white shadow-md relative top-0.5">
                <cap.icon size={18} />
              </div>
              <div>
                <h3 className="text-[1.1rem] font-bold text-slate-900 mb-1">{cap.title}</h3>
                <p className="text-[1rem] sm:text-[1.05rem] text-slate-600 font-light leading-[1.6] max-w-lg">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;