"use client";

import Image from 'next/image';
import styles from './style.module.css';
import ReactLenis from "@studio-freight/react-lenis";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { slideUp } from './Animation2.jsx';
import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';


export default function AncestralRevocations() {




  

  const phrase = 'Collaborated with artist Erika Tan to realise a semantic sound data sonification system as part of her Ancestral (R)evocations installation at Tate Modern’s Tanks (October 2024). I trained Ircam’s Realtime Audio Variational AutoEncoder (RAVE) on a custom dataset recorded on-site, and engineered an interactive machine learning-based audio system that enabled real-time manipulation of the model’s latent space. The system mapped archival metadata to generative audio parameters, integrated with granular synthesis in Pure Data, and was optimised for live gallery performance with stable responsiveness across hardware and software layers. This DIY diagnostic tool, comprising fragmented instruments and mechanised components, functioned as a live, hybrid intervention into ancestral and archival traces—bridging performance, sound, video, and computational labour. Tools used included Python, PyTorch, Pure Data, and OSC.';

  const description = useRef(null);

  const isInView = useInView(description)
  





  return (
    <ReactLenis root>
       <Header />
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/ancestral picture.png"
          alt="Ancestral (R)evocations"
          width={2557}
          height={1595}
          className={styles.image}
          priority 
        />
      </div>



      <div className={styles.text}>
        <h1>Ancestral (R)evocations - Tate Modern</h1>
      </div>




      <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span></span>
                    })
                }
                </p>
           
                <div data-scroll data-scroll-speed={0.1}>
 
                </div>
            </div>
        </div>



      <div className={styles.info}>
        <a href="https://www.tate.org.uk/visit/tate-modern/display/tanks/museum-x-machine-x-me" target="_blank" rel="noopener noreferrer">
        Museum-X-Machine-X-Me
        </a>
      </div>


        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src="https://player.vimeo.com/video/1082600535?h=e511342e6b" 
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo video"
          ></iframe>
        </div>




        
        </div>  


    <Footer/>
    </ReactLenis>
  );
}
