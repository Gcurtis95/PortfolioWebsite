'use client';
import styles from './style.module.css';

const links = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn',  href: '#' },
  { label: 'GitHub',    href: '#' },
];

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>CONTACT</span>
      </div>

      <a href="mailto:gcurtis154@gmail.com" className={styles.email}>
        gcurtis154@gmail.com
      </a>

      <ul className={styles.links}>
        {links.map(({ label, href }) => (
          <li key={label} className={styles.row}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <span>{label}</span>
              <span className={styles.arrow}>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
