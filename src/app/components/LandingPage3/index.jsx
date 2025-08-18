'use client';
import styles from './style.module.css';
import Image from 'next/image';
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";




export default function LandingPage3() {








    return (


        <div className={styles.container}>


            <div className={styles.border}>



                <div className={styles.content1}>


                    <div className={styles.header}> 

                        <h1> Live visuals at tari3x studio 2025 </h1>


                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', border: 'black' } }}>

                        <h2> read more <BsArrowRightSquareFill />  </h2>

                        </IconContext.Provider>  

                    </div>

  

  

                <div className={styles.imageWrapper}> 

                     <Image
                    src="/images/visuals.jpg"
                    alt="tari3x"
                    width={4032}
                    height={2268}
                    className={styles.image}
                    priority 
                    />                   



                </div> 




                </div>






                <div className={styles.content2}>



                    <div className={styles.imageWrapper2}> 

                     <Image
                        src="/images/Layer1.png"
                        alt="tari3x"
                        width={4032}
                        height={2268}
                        className={styles.image2}
                        priority 
                    />                   



                    </div> 


                    <div className={styles.header}> 

                        <h1> Touchdesigner plugin                                  2024 </h1>


                        <IconContext.Provider value={{ style: { verticalAlign: 'middle', border: 'black' } }}>

                        <h2> read more <BsArrowRightSquareFill />  </h2>

                        </IconContext.Provider>  

                    </div>

  

  






                </div>


 


        





            </div>
















        </div>
    )

}