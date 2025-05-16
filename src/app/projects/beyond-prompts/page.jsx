"use client";

import Image from 'next/image';
import styles from './style.module.css';
import ReactLenis from "@studio-freight/react-lenis";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { slideUp } from './Animation3.jsx';
import { useInView, motion } from 'framer-motion';
import { useRef, useState} from 'react';


export default function HumanXiCocreation() {

  

  const phrase = `This work examines the creative potential of generative AI by exploring its capabilities beyond conventional applications. While most image generative models are trained to replicate patterns from vast datasets using text inputs, this installation invites participants to engage with the system in a more experimental and interactive way. Through a touch interface, visitors can directly explore the layers of a generative neural network, revealing unexpected behaviours and outcomes. `


  const phrase2 = `By making AI's underlying processes accessible, the installation aims to demystify how these systems operate and generate their outputs. It offers a hands-on way to think critically about the mechanics of AI, moving beyond its role as a tool for replication to highlight its potential as a medium for exploration and discovery. `
  
  
  const phrase3 = `Using network-bending techniques, which modify and manipulate the internal representation of a stable diffusion model during inference, this work Introduces novel interaction with the internal architecture of a deep generative model. The experience prompts visitors to reflect on the assumptions and possibilities of AI, fostering a deeper understanding of its potential role within the creative process`
  

  const phrase4 = `In the video above, the on-screen image can be manipulated by moving the XY coordinates on the touch interface. A series of machine learning regression algorithms simultaneously maps the XY coordinates to multiple network-bending transformations, which are applied to the image tensor within the U-Net. On the right-hand side of the interface, several buttons represent different layers of the downsampling block within the U-Net. When a button is pressed, the corresponding transformations are applied to that layer, shaping the final output and its visual characteristics.`
  
  const phrase5 = `The touch interface serves as an abstraction for the TouchDesigner plugin I developed during my dissertation at UAL’s Creative Computing Institute. The XY coordinates on the interface are mapped to transformations, which send their respective values via OSC into the U-Net of the diffusion model. The plugin also enables users to update the prompt and seed in real time, with the ability to save and load both presets and output.`

  const description = useRef(null);
  const description2 = useRef(null);
  const description3 = useRef(null);
  const description4 = useRef(null);
  const description5 = useRef(null);

  const isInView = useInView(description)
  const isInView2 = useInView(description2)
  const isInView3 = useInView(description3)
  const isInView4 = useInView(description4)
  const isInView5 = useInView(description5)


  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
        
  const toggleMute = () => {
        if (videoRef.current) {
          videoRef.current.muted = !videoRef.current.muted;
          setIsMuted(videoRef.current.muted);
          }
        }
  





  return (
    <ReactLenis root>
       <Header />
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/humanAI1.jpg"
          alt="Human - x - AI Installation"
          width={2500}
          height={1667}
          className={styles.image}
          priority // optional: preload for performance
        />
      </div>



      <div className={styles.text}>
        <h1>Human-X-AI-Installation</h1>
      </div>

      <div className={styles.exhibitions}>
        <p>
          CVPR 2025 AI Art Gallery <br></br>
          London Tech Week 2025 <br></br>
          UAL CCI Winterfestival 2024 <br></br>


        </p>

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


        <div ref={description2} className={styles.description2}>   
            <div className={styles.body2}>
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


        <div ref={description3} className={styles.description3}>   
            <div className={styles.body3}>
                <p>
                {
                    phrase3.split(" ").map( (word, index) => {
                        return <span key={index + phrase.split(" ").length + phrase2.split(" ").length} className={styles.mask}><motion.span variants={slideUp} custom={index + phrase.split(" ").length + phrase2.split(" ").length} animate={isInView3 ? "open" : "closed"}>{word}</motion.span></span>
                    })
                }
                </p>
           
                <div data-scroll data-scroll-speed={0.1}>
 
                </div>
            </div>
        </div>



      <div className={styles.dossier}>
        <a href="/documents/Beyond_Prompts_Project_Dossier.pdf" target="_blank" rel="noopener noreferrer">
        View the Project Dossier (PDF)
        </a>
      </div>



     <div className={styles.beyondPrompts}>
      <video
        className={styles.image3}
        src="/videos/websitelandscapevideo2.mp4" // or wherever your video is
        autoPlay
        loop
        playsInline
        controls // optional if you want user controls
        />
      </div>



        <div ref={description4} className={styles.description4}>   
            <div className={styles.body4}>
                <p>
                {
                    phrase4.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView4 ? "open" : "closed"}>{word}</motion.span></span>
                    })
                }
                </p>
           
                <div data-scroll data-scroll-speed={0.1}>
 
                </div>
            </div>
        </div>

    <div className={styles.AVHeader}>
      <h2> AudioVisual</h2>
      <p> Below is an audiovisual created using the same technique. Music written and performed by me</p> 
    </div>





        <div className={styles.AudioVisual}  >
        <video
     
          className={styles.AV}
          src="/videos/websiteaudiovisualhumanxai.mp4" 
          autoPlay
          loop
          muted={isMuted}
          playsInline
          controls 
          />

        </div  >


    <div className={styles.touchHeader}>
      <h2> Behind the scenes </h2>
    </div>

     <div className={styles.touchdesigner}>
      <video
        className={styles.image2}
        src="/videos/touchdesignerPlugin.mp4" 
        autoPlay
        loop
        playsInline
        //controls 
        />
      </div>



    
        <div ref={description5} className={styles.description5}>   
            <div className={styles.body5}>
                <p>
                {
                    phrase5.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView5 ? "open" : "closed"}>{word}</motion.span></span>
                    })
                }
                </p>
           
                <div data-scroll data-scroll-speed={0.1}>
 
                </div>
            </div>
        </div>


      
  

      
        
        </div>  


    <Footer/>
    </ReactLenis>
  );
}