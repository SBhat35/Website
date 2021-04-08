import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {ABOUT} from '../utils/constants.js'

const about = () => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Sachit Bhat</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className={styles.main}>
        <Link href="/">
          <a id='top' className={styles.topLink}>
            Home
          </a>
        </Link>
        <hr className={styles.headerLine}/>
        <div className={styles.aboutText}>
          <h1 className={styles.h1}>Hello and Welcome! </h1>          
          <h3 className={styles.h2, styles.bodyText}>
        Before anything else, a quick note on my name. I usually introduce myself as 'Sachit, like Watch-it', so most people know me as that. My correct birth-name is actually pronounced a bit differently: 
        the 'a' is pronounced like a 'uh' and the 't' is pronounced like 'th' (S-uh-chith). It's not entirely intuitive, but follows the same pattern as many other East Asian/Indian names. I have been recently been going by Sach (pronounced like 'Such').
</h3>

<h3 className={styles.h2, styles.bodyText}>
The purpose of the this site is to simply consolidate pieces of life I enjoy and create a springboard for future ideas and experiences. I like to try new things, and built this site to exist as my home base.
</h3>
<h3 className={styles.h2, styles.bodyText}>

I have interests spanning industries, companies and concepts. I am a sucker for B2C/B digital startups, asymmetric risk, early-stage venture capital, and systems-thinking. I currently work as a software engineer in <a className={styles.aboutLink} href="https://https://www.deloittedigital.com/" target="_blank">Deloitte's Digital studio</a>, though continue to push myself to view everything through the eyes of a product manager (including my own life). 

In the past, I've worked as an engineer at <a className={styles.aboutLink} href="https://opennetworking.org/" target="_blank">ON.Lab</a>, a software networking consortium continuing to disrupt traditional network infrastructure. More recently, I was a fellow in the <a className={styles.aboutLink} href="https://vimeo.com/295238898" target="_blank">True Ventures Entrepreneurship Corps</a>, where I was paired with <a className={styles.aboutLink} href="https://https://www.airship.com/" target="_blank">Airship</a> to help with product engineering and analytics. I graduated from <a className={styles.aboutLink} href="https://www.vanderbilt.edu/" target="_blank">Vanderbilt University</a> in 2019, where I studied computer science and economics.
</h3>
<h3 className={styles.h2, styles.bodyText}>

Outside of tech, I thoroughly enjoy reading, writing, walking, board games, HIIT, and self-tracking. I challenged myself to write a <a className={styles.aboutLink} href="http://newsletter.sachitbhat.com/" target="_blank">newsletter</a> for a year during quarantine, both to track my own progress but also incentive curiosity and learning. More recently, I created a <a className={styles.aboutLink} href="https://coda.io/@sachit-bhat/sb" target="_blank">page</a> to store articles and podcasts as well as a quick blurb of my thoughts. I crave spice, and have addiction to Cholula, eggs, and avocado (I have a cholula bottle graveyard and eat 3 eggs a day). My recent focus has been web development and prototyping. I used
Next.js to build this site and am continuing to experiment with <a className={styles.aboutLink} href="https://nextjs.org/Next" target="_blank">Next</a> and React.

If you'd like to connect, you can message me <a href="mailto:sachitbhat.sb@gmail.com">here</a>  or connect with me on <a className={styles.aboutLink} href="https://www.linkedin.com/in/sachitbhat/" target="_blank">LinkedIn</a>. Else, hope you enjoyed reading🙂    
          
          
          </h3>

        </div>        
        <hr className={styles.headerLine}/>
        <div className={styles.toTop}>
          <a href='#top'>Back to top</a>
        </div>
    </main>


  </div>
  )
}

export default about
