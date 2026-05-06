'use client';
import styles from './style.module.css';
import LondonClock from './LondonClock';
import Link from 'next/link';

const navItems = [
  { label: 'Work',  key: 'work' },
  { label: 'About', key: 'about' },
  // { label: 'Music', key: 'music' },
];

// Home page: pass `active` + `onNavigate` to control section state.
// Project pages: no props needed — items become links back to home.
export default function Navbar({ active, onNavigate }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {navItems.map(({ label, key }) =>
          onNavigate ? (
            <li key={key}>
              <button
                className={`${styles.link} ${active === key ? styles.active : ''}`}
                onClick={() => onNavigate(key)}
              >
                {label}
              </button>
            </li>
          ) : (
            <li key={key}>
              <Link href={`/#${key}`} className={styles.link}>{label}</Link>
            </li>
          )
        )}
      </ul>

      {/* <span className={styles.name}>GARIN CURTIS</span> */}

      <div className={styles.location}>
        <span className={styles.city}>LONDON</span>
        <LondonClock />
      </div>
    </nav>
  );
}
