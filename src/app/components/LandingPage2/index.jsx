'use client';
import styles from './style.module.css';
import Image from 'next/image';
import { IconContext } from "react-icons";
import { BsArrowRightSquareFill } from "react-icons/bs";




export default function LandingPage2() {

return ( 

    <div className={styles.container}>

        <div className={styles.header}>

            <h1> CVPR 2025 </h1>


            <h3> AI art gallery </h3>





        </div>

        <div className={styles.projects}>

            <div className={styles.cvpr}>


                <div className={styles.cvprImage}>  

                    <Image
                    src="/images/RWAZ5117.jpg"
                    alt="Ancestral (R)evocations"
                    width={3024}
                    height={4032}
                    className={styles.image}
                    priority 
                    />

                </div>


                <div className={styles.cvprText}> 


                <IconContext.Provider value={{ style: { verticalAlign: 'middle', border: 'black' } }}>

                <h2> read more <BsArrowRightSquareFill />  </h2>

                </IconContext.Provider>                   



                </div>







            </div>



        </div> 





    </div>





)

}