'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './style.module.css';

export default function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section className={styles.gallery}>
      <div className={styles.frame}>
        <Image
          src={images[current]}
          alt={`${title} — ${current + 1} of ${images.length}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'contain' }}
          priority={current === 0}
        />

        <button className={`${styles.btn} ${styles.btnPrev}`} onClick={prev} aria-label="Previous image">
          <FiArrowLeft />
        </button>
        <button className={`${styles.btn} ${styles.btnNext}`} onClick={next} aria-label="Next image">
          <FiArrowRight />
        </button>
      </div>

      <div className={styles.indicators}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
