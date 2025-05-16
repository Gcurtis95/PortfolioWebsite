"use client"
import React, { useState, useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import gsap from 'gsap';
import { useTransitionRouter } from 'next-view-transitions';
import localFont from 'next/font/local'



const myFont = localFont({ src: './digital.ttf' })

const projects = [
    {
      title: "Ancestral (R)evocations - Tate Modern",
      color: "#F06318",
      slug: "/projects/ancestral-revocations"
    },
    {
      title: "Human AI CO-Creation Tool",
      color: "#DCF018",
      slug: "/projects/Human-X-Ai-Installation"
    },
    {
      title: "The Crypt",
      color: "#18F0E8",
      slug: "/projects/the-crypt"
    },
    {
      title: "Immersive Audiovisual",
      color: "#0554F2",
      slug: "/projects/immersive-audiovisual"
    },
    {
      title: "DAMEFRISOR",  
      color: "#F0183C",
      slug: "/projects/damefrisor"
    }
]






export default function Home() {

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



  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: projects[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {top: "0", backgroundColor: "black", duration: 0.3, delay: 0.1})
  }

  return (
    // <main className= {myFont.className}>
    <div className={styles.container}>
        <div className={styles.projectContainer}>
            {
              projects.map( (project, index) => {

              return <a 
              
              onClick={(e) => {
                e.preventDefault();
                router.push(project.slug, {
                  onTransitionReady: slideInOut
                });
              }} href={project.slug} key={index}>

                <div onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <p>{project.title}</p>
                </div>
              </a>
              })
            }
        </div>
    </div>
    // </main>
  )
}