// src/components/Projects.js
import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, LayoutGroup } from 'framer-motion';
import { ExternalLink, Github, X, Layers, Code, Sparkles, FolderOpen, CheckCircle2, Zap } from 'lucide-react';

// Import images
import stockImg from '../assets/stock.png';
import voiceImg from '../assets/voice.png';
import libraryImg from '../assets/library.png';
import newsImg from '../assets/news.png';
import quizeImg from '../assets/quiz.png';

// --- DATA ---
const projects = [
  {
    title: 'Stock Predictor',
    description: 'ML-enabled web app forecasting market trends with LSTM models and interactive Plotly visualizations.',
    tech: ['Python', 'Django', 'ML', 'Plotly'],
    category: 'Python',
    gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    icon: '📈',
    img: stockImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani?tab=repositories',
    features: ['Real-time Data Fetching', 'LSTM/Linear Regression', 'Interactive Charts', 'Market Trend Analysis']
  },
  {
    title: 'Voice Assistant',
    description: 'Python-based AI assistant that processes voice commands for web search, media control, and automation.',
    tech: ['Python', 'NLP', 'SpeechRec', 'APIs'],
    category: 'Python',
    gradient: 'from-pink-400 via-rose-500 to-red-600',
    icon: '🎤',
    img: voiceImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/Voice-Assistance',
    features: ['Voice Command Recognition', 'Automated Web Search', 'System Control', 'Natural Language Processing']
  },
  {
    title: 'News Hub',
    description: 'Responsive React news aggregator featuring real-time headlines, category filtering, and instant search.',
    tech: ['React.js', 'Tailwind', 'REST API'],
    category: 'React',
    gradient: 'from-amber-400 via-orange-500 to-red-600',
    icon: '📰',
    img: newsImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/News-App--HelloNews',
    features: ['Live News Feed', 'Category Filtering', 'Search Functionality', 'Responsive Grid Layout']
  },
  {
    title: 'Library Manager',
    description: 'Comprehensive system for managing academic library resources, student records, and fine calculations.',
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    category: 'Full Stack',
    gradient: 'from-green-400 via-emerald-500 to-teal-600',
    icon: '📚',
    img: libraryImg,
    demo: '#',
    repo: 'https://github.com/sarthak-bhuptani/Library-Managment-System',
    features: ['Role-based Login', 'Book CRUD Operations', 'Issue/Return Tracking', 'Fine Calculation Logic']
  },
  {
    title: 'Quize Platform',
    description: 'A high-fidelity, full-stack examination ecosystem engineered for modern education. This platform leverages the MERN stack to deliver a seamless, low-latency experience for both educators and students, featuring AI-powered quiz generation and robust anti-cheating mechanisms.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini AI', 'Netlify'],
    category: 'Full Stack',
    gradient: 'from-violet-400 via-fuchsia-500 to-pink-600',
    icon: '🧩',
    img: quizeImg,
    demo: 'https://quizeemaster.netlify.app/',
    repo: 'https://github.com/sarthak-bhuptani',
    features: [
      'AI Quiz Architect: Generate complete assessments using Gemini AI.',
      'Proctoring Engine: Integrated security logic to detect tab-switching.',
      'Dynamic Dashboards: Real-time tracking with interactive charts.',
      'Automated Evaluation: Instant grading with downloadable PDF reports.'
    ]
  }
];

const FilterTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab
            ? 'text-white'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'
            }`}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-slate-900 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-full shadow-lg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
};

const ProjectCard = React.forwardRef(({ project, onClick }, ref) => {
  // Motion values for 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    // Update Tilt values
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Transform math
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full w-full cursor-pointer perspective-1000 group"
    >
      <div className="relative h-full bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-xl transform-gpu transition-all duration-300 hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">

        {/* Spotlight Gradient Layer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 blur-xl`}></div>
        </div>

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-slate-900/90 via-transparent to-transparent z-10" />
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1 shadow-lg">
            {project.icon} <span className="hidden sm:inline">Project</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6 z-10 flex flex-col h-[calc(100%-12rem)]">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-cyan-700 dark:text-cyan-200 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/20 px-2 py-1 rounded-md">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-1 rounded-md">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          {/* Hover CTA */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
            <div className="p-2 bg-white text-black rounded-full shadow-lg shadow-cyan-500/50">
              <ExternalLink size={20} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2 max-h-[90vh] md:max-h-[800px] overflow-y-auto"
        >
          {/* Left Side: Visuals */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-90 md:opacity-60" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 drop-shadow-lg">{project.title}</h2>
              <div className={`h-1.5 w-24 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="p-8 md:p-10 flex flex-col bg-slate-50 dark:bg-slate-900/50">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-2 text-yellow-400">
                <Sparkles size={20} className="animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Featured Project</span>
              </div>
              <button onClick={onClose} className="p-2 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full hover:bg-red-500/80 hover:text-white hover:border-red-500 transition-all text-slate-500 dark:text-slate-400">
                <X size={20} />
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-3">
                  <Layers size={18} className="text-cyan-600 dark:text-cyan-400" /> Key Features
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm group/feat">
                      <div className={`mt-1 flex-shrink-0 p-0.5 rounded-full bg-gradient-to-br ${project.gradient}`}>
                        <div className="bg-white dark:bg-slate-900 rounded-full p-0.5">
                          <CheckCircle2 size={12} className="text-cyan-600 dark:text-cyan-400" />
                        </div>
                      </div>
                      <span className="group-hover/feat:text-slate-900 dark:group-hover/feat:text-white transition-colors">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-3">
                  <Code size={18} className="text-purple-600 dark:text-purple-400" /> Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-white/20 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-white/30 dark:hover:bg-white/10 transition-all cursor-default shadow-sm mb-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex gap-4 pt-6 border-t border-white/5">
              <a
                href={project.demo}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-bold shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all`}
              >
                <ExternalLink size={18} /> Live Demo
              </a>
              <a
                href={project.repo}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-all border border-slate-300 dark:border-white/5"
              >
                <Github size={18} /> Code
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  // Filter Logic
  const tabs = ['All', 'Full Stack', 'React', 'Python'];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="relative py-24 bg-transparent overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="inline-block p-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-4 backdrop-blur-md"
          >
            <FolderOpen className="text-cyan-600 dark:text-cyan-400" size={24} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            My Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 dark:from-cyan-400 dark:to-purple-500">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A collection of applications that solve real-world problems, built with modern tech stacks and a focus on user experience.
          </p>
        </motion.div>

        {/* Filters */}
        <FilterTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Animated Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title} // Use Title as unique key for stable ID across filters
                  project={project}
                  onClick={() => setSelected(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Empty State Help */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center text-slate-500 dark:text-slate-500 py-20"
          >
            No projects found in this category.
          </motion.div>
        )}

      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}