import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { aboutText } from "../utils/constants.js";

const about = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/">
          <a id="top" className={styles.topLink}>
            Home
          </a>
        </Link>
        <hr className={styles.headerLine} />
        <div>
          {aboutText}
        </div>
        <hr className={styles.headerLine} />
        <div className={styles.toTop}>
          <a href="#top">Back to top</a>
        </div>
      </main>
    </div>
  );
};

export default about;
