import React from 'react';
import style from './style.module.css';

export default function Footer() {
  return (
    <div className={style.footerWrapper}>
      <div className={style.FooterFixed} >
      {/* <div className={style.container}> */}


        <div className={style.main}>

        <nav className={style.navBar}>
            <ul>
              <li><a href="https://github.com/Gcurtis95" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="/documents/CV_2025_AIEng.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
              <li><a href="https://www.linkedin.com/in/garin-curtis-456038346/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </nav>



          <h1>Email: <a href="mailto:garincurtis@gmail.com">garincurtis@gmail.com</a></h1>
          {/* <h1>Email: garincurtis@gmail.com</h1> */}

          <p>© All rights reserved by Garin Curtis</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
