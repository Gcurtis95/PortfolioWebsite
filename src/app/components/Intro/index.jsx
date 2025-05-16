'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParticleSystem from '../three/ParticleSystem.jsx';
import localFont from 'next/font/local'
import LondonClock from './LondonClock.jsx';
import VideoParticleSystem from '../MainPageVideo/VideoParticleSystem.jsx';

const myFont = localFont({ src: './fonts/PoeticalRegular.otf' })

export default function Intro({ onLoaded }) {

    const background = useRef(null);
    const introImage = useRef(null);

    useLayoutEffect( () => {
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
        <main >


            <div className={styles.headerTop}>
                <h1> LONDON </h1>

                <div className={styles.clock}>

                <LondonClock />
            </div>


            </div>

            <div className={styles.topLine} />
        <div className={styles.homeHeader}>
            <ParticleSystem onLoaded={onLoaded}/>
            <div className={styles.intro}>

            <h1>GARIN </h1>
            <h2>CURTIS</h2>

            <h3>CREATIVE </h3>
            <h4>DEVELOPER</h4>
            </div>

        </div>
        
        </main>
    )
}