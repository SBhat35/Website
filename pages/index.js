import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {NAME} from '../utils/constants.js'
import {LINKS} from '../utils/constants.js'
import { FaKey, FaSpotify, FaCamera, FaProductHunt, FaLinkedin, FaGoodreads, FaMedium, FaPencilAlt } from 'react-icons/fa';
import { RiArticleFill } from "react-icons/ri";
import { BiArrowToBottom } from "react-icons/bi";
import Tooltip from '@material-ui/core/Tooltip';
import Link from 'next/link'
import { motion } from "framer-motion"
import {withStyles, makeStyles} from '@material-ui/core/styles'


export default function Home() {
  const icons1={
    'FaLinkedin': FaLinkedin,
    'FaPencilAlt': FaPencilAlt,
    'RiArticleFill': RiArticleFill,
    'BiArrowToBottom': BiArrowToBottom,
    'FaCamera': FaCamera,
    'FaSpotify':  FaSpotify,
    'FaGoodreads': FaGoodreads,
    'FaKey': FaKey,
    'FaProductHunt': FaProductHunt
  }
  const data = LINKS;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Sachit Bhat</title>
        <link rel="icon" href="/favSB.png" />
      </Head>
      


      <main className={styles.main}>
        <Link href="/about">
          <a className={styles.topLink}>
            About
          </a>
        </Link>
        <hr className={styles.headerLine}/>
            <img src="/prof.png" alt="Sachit Profile" className={styles.logo} />
        <h1 className={styles.h1}>{NAME.name} </h1>
        <hr className={styles.line1}/>
        <h2 className={styles.h2}>{NAME.subText}</h2>
        <hr className={styles.headerLine}/>
        { <div className = {styles.buttonList}>
            {data.map((item, index) => {
              console.log(item)
              const Icon = icons1[item.icon]
              return (
                <div>
                <Tooltip title={item?.tooltip} >
                  <div title={item.title} className={styles.button}>
                    <a href={item.link} target='_blank'>
                      <motion.div
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      >
                        <Icon key={index} size={30}/>
                      </motion.div>
                    </a>
                  </div>
                </Tooltip>
                </div>
              )
            })}
        </div>
        
        }


       
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
