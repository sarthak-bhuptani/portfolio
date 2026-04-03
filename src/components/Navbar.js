import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Code, Briefcase, Mail, FileText, ChevronRight } from "lucide-react";
import profileImg from "../assets/profile.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home", icon: <Home size={20} /> },
    { label: "About", href: "#about", icon: <User size={20} /> },
    { label: "Projects", href: "#projects", icon: <Briefcase size={20} /> },
    { label: "Skills", href: "#skills", icon: <Code size={20} /> },
    { label: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <div className="container mx-auto px-6 flex justify-center">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`flex items-center justify-between gap-8 px-5 py-2.5 rounded-full border transition-all duration-500 shadow-sm ${
              scrolled 
              ? 'bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-lg w-full max-w-2xl' 
              : 'bg-white/60 backdrop-blur-md border-white/20 w-fit'
            }`}
          >
            {/* Logo area */}
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-slate-100 shadow-sm transition-transform group-hover:scale-110">
                <img src={profileImg} alt="S" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-slate-800 tracking-tight hidden sm:block">Sarthak.</span>
            </a>

            {/* Desktop Center Links */}
            <ul className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="text-[13px] font-bold text-slate-500 hover:text-black transition-colors uppercase tracking-widest"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side: Action */}
            <div className="flex items-center gap-3">
               <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-slate-900 shadow-sm hover:bg-white transition-all"
               >
                  <Menu size={20} />
               </motion.button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* REFINED SIDEBAR (MATCHING REFERENCE) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsMobileMenuOpen(false)}
               className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-sm md:hidden"
            />
            
            {/* Sidebar (LIGHT MODE - PRODUCT STYLE) */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-screen w-[280px] sm:w-[350px] z-[130] bg-white shadow-[-20px_0_40px_rgba(0,0,0,0.1)] p-6 sm:p-8 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 overflow-hidden">
                    <img src={profileImg} alt="logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#1a202c]">Sarthak B.</span>
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Master Architect</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Section */}
              <div className="flex-1 overflow-y-auto no-scrollbar">
                <div className="mb-10">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block">Main Navigation</span>
                  <ul className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={(e) => handleScrollTo(e, item.href)}
                          className="flex items-center justify-between p-3 rounded-xl text-slate-500 hover:bg-blue-50/50 hover:text-blue-600 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                            <span className="text-[15px] font-semibold">{item.label}</span>
                          </div>
                          <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-10">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block">Professional Hub</span>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="https://github.com/sarthak-bhuptani" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
                        <User size={20} />
                        <span className="text-[15px] font-semibold">GitHub Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="Bhuptani_Sarthak.pdf" target="_blank" className="flex items-center gap-3 p-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all">
                        <FileText size={20} />
                        <span className="text-[15px] font-semibold">View Documents</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA Footer */}
              <div className="mt-auto pt-6 border-t border-slate-100">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="Bhuptani_Sarthak.pdf"
                  target="_blank"
                  className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-[13px] shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  Download Full CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;