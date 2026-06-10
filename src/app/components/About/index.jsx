'use client';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './style.module.css';

const details = [
  { label: 'Role',         value: 'Fullstack AI Developer' },
  { label: 'Based',        value: 'London, UK' },
  { label: 'Education',    value: 'MSc Creative Computing · UAL CCI' },
  { label: 'Availability', value: 'Open to opportunities' },
];

export default function About() {
  const reducedMotion = useReducedMotion();

  const variants = reducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit:    { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
        exit:    { opacity: 0, y: -8, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
      };

  return (
    <motion.section
      className={styles.section}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >

      <div className={styles.portrait}>
        <img
          src="/favicon.ico"
          alt="Garin Curtis"
          className={styles.portraitImg}
        />
      </div>

      <div className={styles.header}>
        <span className={styles.label}>About</span>
        <span className={styles.index}>01</span>
      </div>

      <div className={styles.statementWrap}>
        <p className={styles.statement}>
          I'm a full-stack AI engineer and creative technologist
          building end-to-end machine-learning systems, real-time
          interactive pipelines, and generative audio-visual applications.
        </p>
      </div>

      <div className={styles.rule} />

      <div className={styles.grid}>
        {details.map(({ label, value }) => (
          <div key={label} className={styles.cell}>
            <span className={styles.cellLabel}>{label}</span>
            <span className={styles.cellValue}>{value}</span>
          </div>
        ))}
      </div>

      <div className={styles.rule} />

      <div className={styles.emailRow}>
        <span className={styles.cellLabel}>Email</span>
        <a href="mailto:garincurtis@gmail.com" className={styles.emailLink}>
          garincurtis@gmail.com
        </a>
      </div>

      <div className={styles.rule} />

      <div className={styles.bio}>
        <p>
          I specialise in Python, PyTorch, and modern web frameworks,
          developing robust AI workflows from data preparation and model
          experimentation to API deployment and responsive front-end
          integration. My work spans production-ready tools for
          installations, research, and cloud-based AI services.
        </p>
      </div>

    </motion.section>
  );
}
