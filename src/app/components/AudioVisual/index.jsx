'use client'
import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './style.module.css';

export default function AudioVisual() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.imageWrapper} onClick={toggleMute}>
        <video
          ref={videoRef}
          className={styles.image}
          src="/videos/websiteaudiovisual.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className={styles.muteIndicator}>
          {isMuted ? 'Muted · Click to unmute' : 'Audio on · Click to mute'}
        </div>
      </div>
    </motion.div>
  );
}
