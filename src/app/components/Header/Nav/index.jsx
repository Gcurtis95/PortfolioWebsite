'use client'

import styles from './style.module.css';
import { motion } from 'framer-motion';
import { links } from './data';
import { perspective } from "./anim";
import { useTransitionRouter } from 'next-view-transitions';

export default function index() {


      const router = useTransitionRouter();



      function slideInOut() {
        document.documentElement.animate(
      
          [
            {
              opacity: 1,
              transform: "translateY(0)",
            },
            {
              opacity:0.2,
              transform: "translateY(-35%)",
            }
          ],
      
          {
            duration: 1500,
            easing: "cubic-bezier(0.87, 0, 0.13, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
          });
      
        document.documentElement.animate(
      
          [
            {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
            },
            {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%,0 0%)",
            }
          ],
          {
            duration: 1500,
            easing: "cubic-bezier(0.87, 0, 0.13, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
      
          });
      };







  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                        <div key={i} className={styles.linkContainer}>
                          <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          >
                            <a onClick={(e) => {
                                e.preventDefault();
                                // if (link.href === '/') {
                                //     window.location.href = '/';
                                //   } else {
                                  if (link.external) {
                                    window.open(link.href, "_blank", "noopener,noreferrer");
                                  } else {
                  
                                  router.push(link.href, {
                                    onTransitionReady: slideInOut
                                  });
                                  }
              
                                  // }
 
                                }} href={link.href}> {link.title}</a>
                    
                        </motion.div>
                        </div>
                        )
            })
        }
       </div>
    </div>
  )
}
