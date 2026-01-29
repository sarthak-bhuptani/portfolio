// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Home, User, Briefcase, Cpu, Mail, Sun, Moon, Github, Linkedin } from "lucide-react";
import profileImg from '../assets/profile.jpg';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Define menu items with Anchor Links
  const menuItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Cpu },
    { label: "Projects", href: "#projects", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Premium Cyber-Glass Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${isScrolled
            ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-slate-200 dark:border-white/5 shadow-lg shadow-black/5 py-4"
            : "bg-transparent border-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-black bg-white dark:bg-black">
                <img src={profileImg} alt="Sarthak" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold text-slate-900 dark:text-white leading-none tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                Sarthak
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mt-1">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 px-2 py-1.5 rounded-full border border-slate-200/50 dark:border-white/5 backdrop-blur-sm">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="relative px-5 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white transition-all rounded-full hover:bg-white dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-amber-400 transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/5"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="/Bhuptani_Sarthak.pdf"
              target="_blank"
              className="relative px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/25 active:scale-95 transition-all flex items-center gap-2 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative">Resume</span>
              <Download size={16} className="relative group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggles */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 rounded-full"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-slate-900 dark:text-white"
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </div>
      </motion.nav>


      {/* Mobile Offcanvas Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[115] bg-black/60 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-3/4 max-w-sm z-[120] bg-white dark:bg-[#0a0a0a] shadow-2xl flex flex-col md:hidden border-l border-slate-200 dark:border-white/10"
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Navigation</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      handleScrollTo(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-4 px-6 py-4 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500">
                      <item.icon size={20} />
                    </div>
                    <span className="font-semibold text-base">{item.label}</span>
                  </a>
                ))}
              </div>

              <div className="p-6 border-t border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/20">
                <a
                  href="/Bhuptani_Sarthak.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold tracking-wide shadow-xl active:scale-95 transition-all"
                >
                  <Download size={18} />
                  <span>Resume / CV</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;