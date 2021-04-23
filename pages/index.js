import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NAME } from "../utils/constants.js";
import { LINKS } from "../utils/constants.js";
import {
  FaKey,
  FaSpotify,
  FaCamera,
  FaProductHunt,
  FaLinkedin,
  FaGoodreads,
  FaMedium,
  FaPencilAlt,
} from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { BiArrowToBottom } from "react-icons/bi";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
import { motion } from "framer-motion";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Image from 'next/image'

export default function Home() {
  const icons1 = {
    FaLinkedin: FaLinkedin,
    FaPencilAlt: FaPencilAlt,
    RiArticleFill: RiArticleFill,
    BiArrowToBottom: BiArrowToBottom,
    FaCamera: FaCamera,
    FaSpotify: FaSpotify,
    FaGoodreads: FaGoodreads,
    FaKey: FaKey,
    FaProductHunt: FaProductHunt,
  };
  const data = LINKS;

  return (
    <div className={styles.container}>
      <Head>
        <title>Sachit Bhat</title>
        <link rel="icon" href="/favSB.png" />
        <meta name="description" content="Personal Website for Sachit Bhat" />
      </Head>
      <main className={styles.main}>
        <Link href="/about">
          <a className={styles.topLink}>About</a>
        </Link>

        <div className={styles.mainHead}>
          <hr className={styles.headerLine} />
          <div className = {styles.logo}>
            <Image 
              src="/prof.png"
              alt="Sachit Bhat Profile"
              width={200}
              height={200}
              className = {styles.logo}
            />
          </div>
          <h1 className={styles.h1}>Sachit Bhat </h1>
          <hr className={styles.line1} />
          <h2 className={styles.h2}>{NAME.subText}</h2>
          <hr className={styles.headerLine} />
        </div>

        {
          <div className={styles.buttonList}>
            {data.map((item, index) => {
              const Icon = icons1[item.icon];
              return (
                <div key={index}>
                  <Tooltip title={item?.tooltip}>
                    <div title={item.title} className={styles.button} >
                      <a href={item.link} target="_blank" aria-label={item.name}> 
                        <motion.div
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon key={index} size={30} />
                        </motion.div>
                      </a>
                    </div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        }
      </main>

      <footer className={styles.footer}>
        <h2 className={styles.h2}>&copy; 2021 Sachit Bhat</h2>
      </footer>
    </div>
  );
}
