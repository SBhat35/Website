import styles from "../styles/Home.module.css";


export const NAME = {
  name: 'Sachit Bhat',
  subText: 'Idiosyncratically curious'
}


export const aboutText = 
      <div className={styles.aboutText}>
          <h1 className={styles.h1}>Hello and Welcome! </h1>
          <h3 className={(styles.h2, styles.bodyText)}>
          Before anything else, a quick note on my name. For as long as I can remember, 
          I've introduced myself as 'Sachit, like Watch-it' - most friends and coworkers know me as this. 
          The intended Hindi pronunciation is slightly different: the 'a' is pronounced 'uh' and the 't' 
          is pronounced 'th' (S - uh - chith). It's not entirely intuitive, but{" "}
            <a
              className={styles.aboutLink}
              href="https://www.youtube.com/watch?v=F__SBto-uYg&ab_channel=GreatVideos-GVCMH"
              target="_blank"
            >
              follows the same pattern as many other East Asian/Indian names
            </a>
            . I have been recently been going by Sach (pronounced 'Such').
          </h3>

          <h3 className={(styles.h2, styles.bodyText)}>
            The purpose of the this site is to simply consolidate pieces of life
            I enjoy and create a springboard for future ideas and experiences. I
            like to try new things, and built this site to serve as my home
            base.
          </h3>
          <h3 className={(styles.h2, styles.bodyText)}>
            I have interests spanning industries, companies and concepts. I am a
            sucker for B2C/B software startups, asymmetric risk, early-stage
            investing, and systems-thinking. I'm currently a deployed engineer at {" "}
            <a
              className={styles.aboutLink}
              href="https://www.retool.com/"
              target="_blank"
            >
              Retool
            </a>, 
            where I help with strategy, product, and customer success. In the past, I've worked as a software engineer in{" "}
            <a
              className={styles.aboutLink}
              href="https://www.deloittedigital.com/"
              target="_blank"
            >
              Deloitte's Digital studio
            </a>
            , a venture fellow in True Venture's{" "}
            <a
              className={styles.aboutLink}
              href="https://vimeo.com/295238898"
              target="_blank"
            >
              Technology Fellowship Program
            </a>
            , and a software engineer at {" "}
            <a
              className={styles.aboutLink}
              href="https://opennetworking.org/"
              target="_blank"
            >
              ON.Lab
            </a>, a software consortium disrupting the networking industry.
             I graduated from{" "}
            <a
              className={styles.aboutLink}
              href="https://www.vanderbilt.edu/"
              target="_blank"
            >
              Vanderbilt University
            </a>{" "}
            in 2019, where I studied computer science and economics.
          </h3>
          <h3 className={(styles.h2, styles.bodyText)}>
            Outside of tech, I thoroughly enjoy reading, writing, walking, board
            games, interval training, and self improvement. I live in San Francisco, so if you're 
            in the city (or not), let's chat!
          </h3>
          <h3>
          <a 
            className={styles.aboutLink}
            href = "mailto:sachitbhat.sb@gmail.com"
            target="blank" 
          >
            Email
        </a>
      
            <br></br>
            <a
              className={styles.aboutLink}
              href="https://www.linkedin.com/in/sachitbhat/"
              target="_blank"
            >
              LinkedIn
            </a>
          </h3>
          <h3>
            Cheers!
          </h3>
        </div>

export const Links1 = {
  'LinkedIn': {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sachitbhat/',
    tooltip: 'LinkedIn',
    icon: 'FaLinkedin'
  },
  'Personal Newsletter': {
    name: 'Personal Newsletter',
    link: 'http://newsletter.sachitbhat.com/',
    tooltip: 'Personal Newsletter',
    icon: 'FaPencilAlt'
  }
}

export const LINKS = [ 
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sachitbhat/',
    tooltip: 'LinkedIn',
    icon: 'FaLinkedin'
  },
  {
    name: 'Personal Newsletter',
    link: 'http://newsletter.sachitbhat.com/',
    tooltip: 'Personal Newsletter',
    icon: 'FaPencilAlt'
  },
  {
    name: 'Monthly Reading',
    link: 'https://coda.io/@sachit-bhat/sb',
    tooltip: 'Monthly Reading',
    icon: 'RiArticleFill',
  },
  {
    name: 'YourStack',
    link: 'https://yourstack.com/@SachitBhat4',
    tooltip: 'Your Stack',
    icon: 'BiArrowToBottom'
  },
  {
    name: '500px',
    link: 'https://500px.com/p/sachitbhatsb?view=photos',
    tooltip: 'Photography',
    icon: 'FaCamera'
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/s.bhat?si=OwZc80oGQoKProKrRXYRww',
    tooltip: 'Music',
    icon: 'FaSpotify'
  },
  {
    name: 'Goodreads',
    link: 'https://www.goodreads.com/user/show/117209173-sachit-bhat',
    tooltip: 'Goodreads',
    icon: 'FaGoodreads'
  },
  {
    name: 'Mentorship',
    link: 'https://app.collegeadvisor.com/advisors/2896',
    tooltip: 'College Advising',
    icon: 'FaKey'
  },
  {
    name: 'Product Hunt',
    link: 'https://www.producthunt.com/@sachit_bhat_sb',
    tooltip: 'Product Hunt',
    icon: 'FaProductHunt'
  }
];
 
