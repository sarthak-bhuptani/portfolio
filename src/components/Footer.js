import React from "react";
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8f8f8] py-16 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-6">

        {/* Branding & Status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-lg font-bold text-[#111827] mb-1">Sarthak Bhuptani</span>
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">MERN Stack Developer — 2026</p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.1em]">
          <a href="https://github.com/sarthak-bhuptani" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">LinkedIn</a>
          <a href="mailto:mrsarthak825@gmail.com" className="text-slate-400 hover:text-black transition-colors">Email</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-[#111827] hover:bg-black hover:text-white transition-all group"
          title="Back to top"
        >
          <FiArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>

      {/* Very Bottom Credit */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-100 flex justify-center text-[10px] text-slate-300 uppercase tracking-widest font-bold">
        Designed & Built by Sarthak Bhuptani
      </div>
    </footer>
  );
};

export default Footer;
