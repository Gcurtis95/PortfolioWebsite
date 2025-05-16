'use client'

import styles from "./page.module.css";
import Intro from './components/Intro';
import Description from './components/Description';
import ReactLenis from "@studio-freight/react-lenis";
import Projects2 from './components/ProjectsList1';
import Preloader from './components/Preloader';
import AudioVisual from "./components/AudioVisual";
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);




  return (
  
    <ReactLenis root>
      <main className={styles.main}>
        <AnimatePresence>
        { 
        isLoading && <Preloader />
        }
        </AnimatePresence>
        <Intro 
        onLoaded={() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
        }}/>

        <Projects2 />

        <Footer />

      </main>
    </ReactLenis>
    
  )
}
