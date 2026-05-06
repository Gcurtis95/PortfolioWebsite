'use client';
import ParticleSystem from '../three/ParticleSystem';
import styles from './style.module.css';

export default function ParticleSection() {
  return (
    <section className={styles.section}>

      <div className={styles.left}>
        <ParticleSystem onLoaded={() => {}} />
      </div>

      <div className={styles.right}>
        {/* right half — fill with whatever you like */}
      </div>

    </section>
  );
}
