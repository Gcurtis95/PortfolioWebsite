'use client';
import styles from './style.module.css';
import Link from 'next/link';
import Marquee from '../Marquee';
import LondonClock from './LondonClock';

const navItems = [
  { label: 'Home',  key: 'home' },
  { label: 'Work',  key: 'work' },
  { label: 'About', key: 'about' },
];

export default function Navbar({ active, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <Marquee />
      <div className={styles.bar}>
        <div className={styles.logo}>
          <span className={styles.logoText}>GARIN CURTIS</span>
          <span className={styles.logoSub}>Creative Technologist · Full-Stack AI Developer</span>
        </div>

        <div className={styles.right}>
          <div className={styles.location}>
         
            <span className={styles.city}>LONDON</span>
            <LondonClock />
          </div>
          <span className={styles.sep}>|</span>
          <a href="mailto:garincurtis@gmail.com" className={styles.contact}>
            garincurtis@gmail.com
          </a>
          <span className={styles.sep}>|</span>

          {navItems.map(({ label, key }) => (
            onNavigate ? (
              <button
                key={key}
                className={`${styles.link} ${active === key ? styles.active : ''}`}
                onClick={() => onNavigate(key)}
              >
                {label}
              </button>
            ) : (
              <Link key={key} href={`/#${key}`} className={styles.link}>
                {label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
}
