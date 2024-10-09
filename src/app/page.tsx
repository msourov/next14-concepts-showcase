import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next 14.01 App</h1>
      <div className={styles.center}></div>
      <div className={styles.grid}></div>
    </main>
  );
}
