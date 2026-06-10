'use client';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './style.module.css';

export default function HeroIdentity({ onNavigate }) {
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit:    { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        exit:    { opacity: 0, y: -8,  transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
      };

  return (
    <motion.section
      className={styles.section}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.identity}>
        <h1 className={styles.name}>Garin<br />Curtis</h1>
        <p className={styles.role}>Creative Technologist · Full-Stack AI Developer · London</p>
      </div>

      <nav className={styles.nav}>
        <button className={styles.navItem} onClick={() => onNavigate('work')}>
          <span className={styles.navLabel}>Work</span>
          <span className={styles.navMeta}>04 selected projects</span>
        </button>
        <button className={styles.navItem} onClick={() => onNavigate('about')}>
          <span className={styles.navLabel}>About</span>
          <span className={styles.navMeta}>Profile · contact</span>
        </button>
      </nav>
    </motion.section>
  );
}
