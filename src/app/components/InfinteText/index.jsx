'use client'
import Image from 'next/image'
import styles from './style.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";

export default function infinteText() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <main className={styles.main}>

      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>WORK &nbsp;&nbsp; FEATURED PROJECTS &nbsp;&nbsp;&nbsp;</p>
          <p ref={secondText}>WORK &nbsp;&nbsp; FEATURED PROJECTS &nbsp;&nbsp;&nbsp;</p>
        </div>
      </div>


    <div className={styles.projects}>


        <div className={styles.project1}>

            <div className={styles.Tate}>

                <Image
                    src="/images/Erika_Tan_Ancestral.jpg"
                    alt="Ancestral (R)evocations"
                    width={1382}
                    height={922}
                    className={styles.image1}
                    priority 
                />


                <h2>Ancestral (R)evocations - Tate Modern &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024</h2>


                <IconContext.Provider value={{ style: { verticalAlign: 'middle', border: 'black' } }}>

                <h3> read more <BsArrowRightSquareFill />  </h3>

                </IconContext.Provider>

                




            </div>

        </div>

        <div className={styles.project2}>

            <div className={styles.XAI}>


                <Image
                    src="/images/humanAI1.jpg"
                    alt="XAI"
                    width={1382}
                    height={922}
                    className={styles.image2}
                    priority 
                />


                <h4>Human X AI Interface &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024</h4>


                <IconContext.Provider value={{ style: { verticalAlign: 'middle', border: 'black' } }}>

                <h5> read more <BsArrowRightSquareFill />  </h5>

                </IconContext.Provider>

                


            </div>




        </div>



    </div>















    </main>
  )
}