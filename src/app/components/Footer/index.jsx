import styles from './style.module.css';

const socials = [
  { label: 'GitHub',    href: 'https://github.com/Gcurtis95' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/garin-curtis-456038346/' },
  { label: 'Instagram', href: 'https://www.instagram.com/garincurtis/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
      <span className={styles.copy}>
        © 2026 Garin Curtis
      </span>
    </footer>
  );
}
