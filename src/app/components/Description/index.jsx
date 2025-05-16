"use client"

import React, { useLayoutEffect, useRef, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = ["I am a London-based creative developer exploring ", "the intersection of machine learning and new ", "media technologies. My work focuses on Building", "creative ai tools, immersive 3D environments", "and innovative sound design experiences."]

export default function Index() {

    const interactiveRef = useRef(null);

    useEffect(() => {
      const interBubble = interactiveRef.current;
      let curX = 0, curY = 0, tgX = 0, tgY = 0;
  
      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(move);
      }
  
      const onMouseMove = (e) => {
        tgX = e.clientX;
        tgY = e.clientY;
      };
  
      window.addEventListener('mousemove', onMouseMove);
      move();
  
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, []);




  return (



    <div className={styles.projectTheme}>

            <div className={styles.description} >
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
        </div>   
         </div>
        


)
}

//     <div className={styles.projectTheme}>
//         <div className={styles.heroWrapper}>
//         {/* Background */}
//             <div className={styles.gradientBg}>
//                  <svg className={styles.gradientSvg}>
//                  <defs>
//                 <filter id="goo">
//                 <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//                 <feColorMatrix
//                 in="blur"
//                 mode="matrix"
//                 values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
//                 result="goo"
//                 />
//                 <feComposite in="SourceGraphic" in2="goo" operator="atop" />
//                 </filter>
//                 </defs>
//                 </svg>

//                 <div className={styles.gradientsContainer}>
//                     <div className={styles.g1}></div>
//                     <div className={styles.g2}></div>
//                     <div className={styles.g3}></div>
//                     <div className={styles.g4}></div>
//                     <div className={styles.g5}></div>
//                     <div ref={interactiveRef} className={styles.interactive}></div>
//                 </div>
//                 <div className={styles.description} >
//             {
//                 phrases.map( (phrase, index) => {
//                     return <AnimatedText key={index}>{phrase}</AnimatedText>
//                 })
//             }
//             </div>   
//              </div>
             

//         </div>
//     </div>

//   )
// }

function AnimatedText({children}) {
    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                start: "0px bottom",
                end: "bottom+=400px bottom",
            },
            opacity: 0,
            left: "-200px",
            ease: "power3.Out"
        })
    }, [])

    return <p ref={text}>{children}</p>
}