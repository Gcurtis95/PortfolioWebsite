'use client'

import styles from "./page.module.css";
import Intro from './components/Intro';
import Description from './components/Description';
import ReactLenis from "@studio-freight/react-lenis";
import Projects1 from './components/ProjectsList1';
import Preloader from './components/Preloader';
import AudioVisual from "./components/AudioVisual";
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LandingPage1 from "./components/LandingPage1";
import LandingPage2 from "./components/LandingPage2";
import LandingPage3 from "./components/LandingPage3";
import InfinteText from "./components/InfinteText";
import TechStack from "./components/TechStack";


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

        <InfinteText />
        <LandingPage1 />
        <LandingPage2 />
        {/* <Projects1 /> */}
        <LandingPage3 />
        {/* <TechStack /> */}


        <Footer />

      </main>
    </ReactLenis>
    
  )
}
