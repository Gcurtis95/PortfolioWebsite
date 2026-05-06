'use client'
import React, { useLayoutEffect, useRef, useState} from 'react'
import styles from './style.module.css';




export default function AudioVisual()


{

        const videoRef = useRef(null);
        const [isMuted, setIsMuted] = useState(true);
      
        const toggleMute = () => {
          if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
          }
        }

    return (
        <div className={styles.container}>
        <div className={styles.imageWrapper}  onClick={toggleMute}>
        <video
          ref={videoRef}
          className={styles.image}
          src="/videos/websiteaudiovisual.mp4" // or wherever your video is
          autoPlay
          loop
          muted={isMuted}
          playsInline
          //controls // optional if you want user controls
          />
          <div className={styles.muteIndicator}>
          {isMuted ? "Muted (Click to unmute)" : "Playing audio (Click to mute)"}
          </div>
        </div  >
        </div>
    );

}

