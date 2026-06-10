'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleSystem from '../three/ParticleSystem.jsx';
import { FaArrowDown } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Intro({ onLoaded }) {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: true,
                start: "top",
                end: "+=500px",
            },
        })

        timeline
            .from(background.current, {clipPath: `inset(15%)`})
            .to(introImage.current, {height: "200px"}, 0)
    }, [])


    

    return (
      

        <div className={styles.homeHeader}>
            <ParticleSystem onLoaded={onLoaded}/>

                <div className={styles.container}>


                    


                </div>







                
     


        </div>



        
    )
}