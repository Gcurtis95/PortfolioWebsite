'use client';
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { opacity, slideUp } from './anim';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const exitVariants = reducedMotion
    ? { exit: { opacity: 0, transition: { duration: 0.3 } } }
    : slideUp;

  return (
    <main>
      <motion.div
        variants={exitVariants}
        initial="initial"
        exit="exit"
        className={styles.introduction}
      >
        {mounted &&
          <motion.p variants={opacity} initial="initial" animate="enter">Garin Curtis</motion.p>
        }
      </motion.div>
    </main>
  );
}
