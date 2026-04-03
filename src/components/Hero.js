import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import stockImg from '../assets/stock.png';
import quizImg from '../assets/quiz.png';
import newsImg from '../assets/news.png';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stackVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* --- LEFT CONTENT --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-left order-2 lg:order-1"
          >
            {/* Location Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white shadow-md border border-slate-100 rounded-lg mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[11px] font-bold text-slate-800">Gandhinagar, India</span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-bold text-[#1a202c] mb-8 leading-[1.1] tracking-tight"
            >
              Sarthak Bhuptani<br />
              Portfolio
            </motion.h1>

            {/* Bio */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-2xl mb-12"
            >
              <strong className="text-slate-900 font-bold">MERN stack developer & AI enthusiast.</strong> With <strong className="text-slate-900 font-bold">expertise in high-fidelity apps,</strong> I build scalable web applications using <span className="text-slate-900 font-medium underline decoration-slate-300 underline-offset-4">React, Node.js, and MongoDB.</span> I create REST APIs and high-performance system architectures.
            </motion.p>

            {/* Unique Resume Button */}
            <motion.div variants={itemVariants}>
              <a 
                href="Bhuptani_Sarthak.pdf" 
                target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#2a9d8f] to-[#264653] text-white rounded-full shadow-2xl hover:scale-105 transition-transform group"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white/50">
                  <img src={profileImg} alt="S" className="w-full h-full object-cover" />
                </div>
                <span className="font-bold text-sm tracking-wide">See my Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* --- RIGHT VISUAL: Overlapping Project Cards --- */}
          <motion.div 
            variants={stackVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 relative h-[250px] sm:h-[380px] w-full max-w-[420px] order-1 lg:order-2"
          >
            <div className="relative w-full h-full">
              {/* Bottom Card */}
              <motion.div 
                animate={{ rotate: -10, y: 15, x: -15 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-0"
              >
                <img src={newsImg} alt="P1" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </motion.div>

              {/* Middle Card */}
              <motion.div 
                animate={{ rotate: -5, y: 8, x: -8 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10"
              >
                <img src={quizImg} alt="P2" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10"></div>
              </motion.div>

              {/* Top Main Card */}
              <motion.div 
                animate={{ rotate: 5 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-white z-20"
              >
                <img src={stockImg} alt="P3" className="w-full h-full object-cover" />
              </motion.div>

              {/* Depth Decor (Optional) */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/10 blur-3xl rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;