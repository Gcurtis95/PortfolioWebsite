'use client';

import styles from './style.module.css';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";






export default function LandingPage1() {


    const firstText = useRef(null);

    const secondText = useRef(null);

    const slider = useRef(null);

    let direction = -1;

    let xPercent = 0;



    useEffect( () => {

        gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})

        requestAnimationFrame(animate);

    }, [])



    const animate = () => {

        if(xPercent > 0){

            xPercent = -100;

        }

        gsap.set(firstText.current, {xPercent: xPercent})

        gsap.set(secondText.current, {xPercent: xPercent})

        requestAnimationFrame(animate);

        xPercent += 0.1 * direction;

}

return ( 


<div className={styles.container}> 

      <div className={styles.sliderContainer}>

        <div ref={slider} className={styles.slider}>

          <p ref={firstText}>WORK &nbsp;&nbsp; FEATURED PROJECTS </p>

          <p ref={secondText}>WORK &nbsp;&nbsp; FEATURED PROJECTS </p>

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
                    className={styles.image}
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
                    className={styles.image}
                    priority 
                />


                <h4>Human X AI Interface &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024</h4>


                <IconContext.Provider value={{ style: { verticalAlign: 'middle', border: 'black' } }}>

                <h5> read more <BsArrowRightSquareFill />  </h5>

                </IconContext.Provider>

                


            </div>




        </div>



    </div>



</div>
        
    






)
}
       