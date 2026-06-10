'use client'

import styles from "./page.module.css";
import Intro from './components/Intro';
import Preloader from './components/Preloader';
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";
import About from "./components/About";
import AudioVisual from "./components/AudioVisual";
import HeroIdentity from "./components/HeroIdentity";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (['home', 'work', 'about', 'music'].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className={styles.hero}>
        <Intro
          onLoaded={() => {
            setIsLoading(false);
            document.body.style.cursor = 'default';
          }}
        />

        <Navbar active={activeSection} onNavigate={setActiveSection} />

        <div className={styles.sectionOverlay}>
          <AnimatePresence mode="wait">
            {activeSection === 'home'  && <HeroIdentity    key="home"  onNavigate={setActiveSection} />}
            {activeSection === 'work'  && <ProjectsSection key="work" />}
            {activeSection === 'about' && <About           key="about" />}
            {activeSection === 'music' && <AudioVisual     key="music" />}
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </main>
  );
}
