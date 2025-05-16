'use client'

import styles from './style.module.css'
import Project from './components';
import { useTransitionRouter } from 'next-view-transitions';

export default function Projects2() {

  const projects = [
    {
      title1: "Ancestral (R)evocations  ",
      title2: "- Tate Modern",
      src: "../../images/ancestral picture.png",
      slug: "/projects/ancestral-(r)evocations-tate-modern",
      external: false
    },
    {
      title1: "Human × AI",
      title2: " Installation",
      src: "../../images/humanAI1.JPG",
      slug: "/projects/beyond-prompts",
      external: false
    },
    {
      title1: "The ",
      title2: "Crypt",
      src: "../../images/TheCrypt.png",
      slug: "/projects/the-crypt",
      external: false
    },
    {
      title1: "DAMEFRISØR",
      title2: "",
      src: "../../images/Damefrisor.jpeg",
      slug: "https://open.spotify.com/artist/6pUBYQ7PwPZpq7TzLd7Nr6",
      external: true
    }
    
  ]




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



    <main className={styles.main}>


    <div className={styles.intro}>
        <h1 className={styles.title}>Projects</h1>
        {/* <p className={styles.description}>A collection of my work, including installations, exhibitions, and collaborations.</p> */}
    </div>




      <div className={styles.gallery}>
          {
            projects.map( (project, index) => {
              return <a
              
              onClick={(e) => {
                e.preventDefault();

                if (project.external) {
                  window.open(project.slug, "_blank", "noopener,noreferrer");
                } else {

                router.push(project.slug, {
                  onTransitionReady: slideInOut
                });
                }
              }} 
              href={project.slug} key={index} 

              > 
              
              <Project project={project}/>
              </a>
            })
          }
      </div>
    </main>
  )
}