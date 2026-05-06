'use client';
import Image from 'next/image';
import styles from './style.module.css';

const details = [
  { label: 'ROLE',         value: 'Fullstack AI Developer' },
  { label: 'BASED',        value: 'London, UK' },
  { label: 'EDUCATION',    value: 'MSc Creative Computing · UAL CCI' },
  { label: '',    value: 'BEng Mechanical Engineering · Cardiff University' },
  { label: 'EMAIL',        value: 'garincurtis@gmail.com', href: 'mailto:garincurtis@gmail.com' },
  { label: 'AVAILABILITY', value: 'Open to opportunities' },
];

export default function About() {
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <span className={styles.label}>ABOUT</span>
        <span className={styles.count}>01</span>
      </div>

      <div className={styles.body}>
        <p className={styles.statement}>
          I’m a full-stack AI engineer and creative technologist with practical experience building end-to-end
          machine-learning systems, real-time interactive pipelines, and generative audio-visual applications. 
          I specialise in Python, PyTorch, and modern web frameworks, developing robust AI workflows from data preparation 
          and model experimentation to API deployment and responsive front-end integration. My work spans production-ready 
          tools for installations, research, and cloud-based AI services, and I thrive in collaborative, multidisciplinary 
          environments with a strong, solution-focused approach to problem-solving
        </p>

        <div className={styles.imageWrap}>
          <Image
            src="/favicon.ico"
            alt="Garin Curtis"
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <ul className={styles.list}>
        {details.map(({ label, value, href }) => (
          <li key={label} className={styles.row}>
            <span className={styles.rowLabel}>{label}</span>
            {href ? (
              <a href={href} className={`${styles.rowValue} ${styles.rowLink}`}>{value}</a>
            ) : (
              <span className={styles.rowValue}>{value}</span>
            )}
          </li>
        ))}
      </ul>

    </section>
  );
}
