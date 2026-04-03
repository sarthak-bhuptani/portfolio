// src/components/Projects.js
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

import stockImg from '../assets/stock.png';
import voiceImg from '../assets/voice.png';
import libraryImg from '../assets/library.png';
import newsImg from '../assets/news.png';
import quizeImg from '../assets/quiz.png';
import mindcareImg from '../assets/mindcare.png';

const projects = [
  {
    title: 'MindCare',
    description: 'A modern mental wellness web application offering AI-driven support, therapeutic resources, and mental health tracking.',
    category: 'Full Stack',
    img: mindcareImg,
    demo: 'https://minddcare.netlify.app/',
    repo: 'https://github.com/sarthak-bhuptani/MindCare',
  },
  {
    title: 'Quize Platform',
    description: 'A high-fidelity, full-stack examination ecosystem engineered for modern education with AI-powered quiz generation.',
    category: 'Full Stack',
    img: quizeImg,
    demo: 'https://quizeemaster.netlify.app/',
    repo: 'https://github.com/sarthak-bhuptani/QuizeMaster',
  },
  {
    title: 'Stock Predictor',
    description: 'ML-enabled web app forecasting market trends with LSTM models and interactive Plotly visualizations.',
    category: 'Python',
    img: stockImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani?tab=repositories',
  },
  {
    title: 'Voice Assistant',
    description: 'Python-based AI assistant that processes voice commands for web search, media control, and automation.',
    category: 'Python',
    img: voiceImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/Voice-Assistance',
  },
  {
    title: 'News Hub',
    description: 'Responsive React news aggregator featuring real-time headlines, category filtering, and instant search.',
    category: 'React',
    img: newsImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/News-App--HelloNews',
  },
  {
    title: 'Library Manager',
    description: 'Comprehensive system for managing academic library resources, student records, and fine calculations.',
    category: 'Full Stack',
    img: libraryImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/Library-Managment-System',
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const tabs = ['All', 'Full Stack', 'React', 'Python'];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  const projectsToDisplay = showAll ? filteredProjects : filteredProjects.slice(0, 3);
  const hasMore = filteredProjects.length > 3;

  return (
    <section id="projects" className="relative py-24 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#111827] mb-4">
            Selected<br />
            <span className="font-semibold text-[#111827]">Works</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg font-light">
            A small gallery of recent projects chosen by me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false); // Reset when tab changes
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode='popLayout'>
            {projectsToDisplay.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-900 font-semibold shadow-sm hover:bg-slate-50 transition-all group"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              {showAll ? <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> : <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />}
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
}