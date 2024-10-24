import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        This website demonstrates Nextjs 14 app router concepts
      </h1>
      <p className={styles.p}>By integrating unsplash api</p>
      <div className={styles.center}></div>
      <div className={styles.grid}></div>
    </main>
  );
}
