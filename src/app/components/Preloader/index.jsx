'use client';
import styles from './style.module.css';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';





const words = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]



export default function Preloader() {

    const [index, setIndex] = useState(0);

    const [dimension, setDimension] = useState({width: 0, height:0});



    useEffect( () => {

        setDimension({width: window.innerWidth, height: window.innerHeight})

    }, [])



    useEffect( () => {

        if(index == words.length - 1) return;

        setTimeout( () => {

            setIndex(index + 1)

        }, index == 0 ? 1000 : 150)

    





    }, [index])






    return (


      <main>

        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>

            {dimension.width > 0 && 

            <>

                {/* <motion.p variants={opacity} initial="initial" animate="enter"><span></span>{words[index]}</motion.p> */}
                <motion.p variants={opacity} initial="initial" animate="enter"> Garin Curtis</motion.p>

                <svg>



                </svg>

            </>

            }

        </motion.div>

        </main>

    )

}