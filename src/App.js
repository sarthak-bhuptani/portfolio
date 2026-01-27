// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

function App() {
  return (
    <Router>
      <div className="relative antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col">
        <Preloader />

        {/* Global Background */}
        <AnimatedBackground />
        <CustomCursor />
        <CommandPalette />
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content - Single Page Layout */}
        <main className="relative z-10 flex-grow">
          {/* Sections with IDs for scrolling */}
          <section id="home">
            <Hero />
          </section>

          <section id="about" className="pt-20">
            <About />
            <Timeline />
          </section>

          <section id="skills" className="pt-20">
            <Skills />
          </section>

          <section id="projects" className="pt-20">
            <Projects />
          </section>


          <section id="contact" className="pt-20">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;