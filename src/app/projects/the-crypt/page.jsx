"use client";

import styles from './style.module.css';
import ReactLenis from "@studio-freight/react-lenis";
import Header from '../../components/Header';
import React, { useRef, useState } from 'react';
import { slideUp } from './Animation.jsx';
import { useInView, motion } from 'framer-motion';

import Footer from '../../components/Footer';


export default function TheCrypt() {




    const description = useRef(null);
    const description2 = useRef(null);

    const phrase = `The Crypt Project offers a digital portrayal of St. Giles Church's crypt, blending its rich history with modern technology. This multi-modal installation includes 3D and LiDAR scans, AI, and local environmental data to create an interactive experience that visualizes the space through sound and visuals. By merging past and future, the installation honors the church's legacy while highlighting modern innovation. The project uses Unity to craft live audiovisuals from 3D scans, converting them into point clouds that respond to audio via the Unity VFX graph.`;

     const phrase2 = `Additionally, it features an interactive component where users can explore the 3D scans of the crypt. Field recordings from the church and its surroundings, including a live performance in the crypt, were used to train an AI generative model using the RAVE framework. The player’s movements in the virtual space are mapped to the model’s latent space in Max 8, causing the audio to change dynamically as the player navigates the crypt. This audio output then influences the 3D model in real-time through Unity’s VFX graph, creating a seamless, immersive experience.`;

    

    const isInView = useInView(description)
    const isInView2 = useInView(description2)




  return (
    <ReactLenis root>
       <Header />
    <div className={styles.container}>


      <div className={styles.text}>
        <h1> The Crypt </h1>
  

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

        <div ref={description2} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase2.split(" ").map( (word, index) => {
                        return <span key={index + phrase.split(" ").length} className={styles.mask}><motion.span variants={slideUp} custom={index + phrase.split(" ").length} animate={isInView2 ? "open" : "closed"}>{word}</motion.span></span>
                    })
                }
                </p>
           
                <div data-scroll data-scroll-speed={0.1}>
 
                </div>
            </div>
        </div>


        <div className={styles.videoWrapper}>
          <iframe
            className={styles.video}
            src="https://player.vimeo.com/video/1047257778?badge=0" 
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo video"
          ></iframe>
        </div>

      </div>



    </div>
    <Footer/>
    </ReactLenis>
  );
}
