import Head from 'next/head'
import Image from 'next/image'
import { Canvas, useThree } from "@react-three/fiber";
import { Loader } from '@react-three/drei';
import styles from '../styles/Home.module.scss'

import {Suspense} from 'react' 


import Floor from "../components/Floor";
import LightBulb from '../components/LightBulb';
import Box from '../components/Box';
import OrbitControls from "../components/OrbitControls";
import Draggable from '../components/Draggable';

import MU from '../public/models/Mu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Maxim Usik</title>
        <meta name="My portfolio website " content="My portfolio website " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftSideContent}>

        </div>
        <div className={styles.scene}>
          <Canvas
            shadows={true}
            className={styles.canvas}
            camera={
              { fov: 75, 
                near: 0.1, 
                far: 500, 
                // position: [0, 0, 0]
              }
            }
         >
           
            <ambientLight color={"white"} intensity={0.2} />
            <LightBulb position={[0, 10, 0]} />
            
            <Suspense>
              {/* Run a function here when suspent ends */}
              
              <MU position={[0, 0, -20]} rotation={[0, -Math.PI / 2, 0]}/>
            </Suspense>
           

        
            {/* <Floor position={[0, -1, 0]} /> */}


           </Canvas>
          
        </div>
      
      </main>

      {/* <Loader /> */}
    </div>
  )
}
